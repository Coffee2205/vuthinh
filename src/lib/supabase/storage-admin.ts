import "server-only";
import type { SupabaseClient } from "@supabase/supabase-js";
import {
  getPublicMediaPath,
  MAX_PUBLIC_IMAGE_BYTES,
  PUBLIC_MEDIA_BUCKET,
  type MediaFolder,
  validatePublicImage,
} from "@/lib/supabase/storage";

const extensionByMime: Record<string, string> = {
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/webp": "webp",
};

export type MediaOperationResult =
  | { ok: true; path: string }
  | { ok: false; code: "invalid" | "upload" | "remove"; message: string };

export async function uploadPublicImage(
  db: SupabaseClient,
  file: File,
  folder: `${MediaFolder}/${string}`,
): Promise<MediaOperationResult> {
  const validationError = validatePublicImage(file);
  if (validationError)
    return { ok: false, code: "invalid", message: validationError };

  const extension = extensionByMime[file.type];
  const path = `${folder}/${Date.now()}-${crypto.randomUUID()}.${extension}`;
  const bytes = new Uint8Array(await file.arrayBuffer());
  const { error } = await db.storage
    .from(PUBLIC_MEDIA_BUCKET)
    .upload(path, bytes, {
      cacheControl: "31536000",
      contentType: file.type,
      upsert: false,
    });

  if (error) {
    console.error("[storage] Public image upload failed", {
      code: error.name,
      size: file.size,
      limit: MAX_PUBLIC_IMAGE_BYTES,
    });
    return {
      ok: false,
      code: "upload",
      message: "Không thể tải ảnh lên. Vui lòng thử lại.",
    };
  }
  return { ok: true, path };
}

export async function removePublicImage(
  db: SupabaseClient,
  pathOrUrl: string | null | undefined,
) {
  const path = getPublicMediaPath(pathOrUrl);
  if (!path) return { ok: true as const, removed: false };
  const { error } = await db.storage.from(PUBLIC_MEDIA_BUCKET).remove([path]);
  if (error) {
    console.error("[storage] Public image removal failed", {
      code: error.name,
      path,
    });
    return { ok: false as const, removed: false };
  }
  return { ok: true as const, removed: true };
}

export async function replacePublicImage({
  db,
  oldValue,
  file,
  folder,
  persist,
}: {
  db: SupabaseClient;
  oldValue: string | null;
  file: File;
  folder: `${MediaFolder}/${string}`;
  persist: (path: string) => Promise<boolean>;
}) {
  const uploaded = await uploadPublicImage(db, file, folder);
  if (!uploaded.ok) return uploaded;

  if (!(await persist(uploaded.path))) {
    await removePublicImage(db, uploaded.path);
    return {
      ok: false as const,
      code: "upload" as const,
      message: "Không thể lưu đường dẫn ảnh. Ảnh mới đã được hoàn tác.",
    };
  }

  const removed = await removePublicImage(db, oldValue);
  return {
    ok: true as const,
    path: uploaded.path,
    oldFileRemovalFailed: !removed.ok,
  };
}
