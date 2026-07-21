export const PUBLIC_MEDIA_BUCKET = "Public-Media";
export const MAX_PUBLIC_IMAGE_BYTES = 5 * 1024 * 1024;
export const PUBLIC_IMAGE_MIME_TYPES = ["image/jpeg", "image/png", "image/webp"] as const;

export const MEDIA_FOLDERS = {
  courses: "courses",
  posts: "posts",
  resources: "resources",
  testimonials: "testimonials",
  experts: "experts",
} as const;

export type MediaFolder = (typeof MEDIA_FOLDERS)[keyof typeof MEDIA_FOLDERS];

const storageObjectMarker = `/storage/v1/object/public/${PUBLIC_MEDIA_BUCKET}/`;
const supportedRoots = new Set<string>([...Object.values(MEDIA_FOLDERS), "post"]);

function getSupabaseUrl() {
  return process.env.NEXT_PUBLIC_SUPABASE_URL?.replace(/\/$/, "") ?? null;
}

export function getPublicMediaPath(value: string | null | undefined): string | null {
  const input = value?.trim();
  if (!input || /^(placeholder|default)$/i.test(input)) return null;

  if (input.startsWith("/")) return null;

  if (/^https?:\/\//i.test(input)) {
    try {
      const url = new URL(input);
      const expectedOrigin = getSupabaseUrl() ? new URL(getSupabaseUrl()!).origin : null;
      if (expectedOrigin && url.origin !== expectedOrigin) return null;
      const markerIndex = url.pathname.indexOf(storageObjectMarker);
      if (markerIndex < 0) return null;
      const path = decodeURIComponent(url.pathname.slice(markerIndex + storageObjectMarker.length));
      return isSupabaseStoragePath(path) ? path : null;
    } catch {
      return null;
    }
  }

  return isSupabaseStoragePath(input) ? input : null;
}

export function isSupabaseStoragePath(value: string | null | undefined): boolean {
  const input = value?.trim();
  if (!input || input.startsWith("/") || /^https?:\/\//i.test(input)) return false;
  const parts = input.split("/");
  return supportedRoots.has(parts[0]) && parts.length >= 2 && parts.every(Boolean);
}

export function getPublicMediaUrl(value: string | null | undefined): string | null {
  const input = value?.trim();
  if (!input || /^(placeholder|default)$/i.test(input)) return null;
  if (/^https?:\/\//i.test(input) || input.startsWith("/")) return input;
  if (!isSupabaseStoragePath(input)) return null;

  const supabaseUrl = getSupabaseUrl();
  if (!supabaseUrl) return null;
  const encodedPath = input.split("/").map(encodeURIComponent).join("/");
  return `${supabaseUrl}${storageObjectMarker}${encodedPath}`;
}

export function shouldBypassImageOptimization(value: string | null | undefined): boolean {
  const input = value?.trim();
  if (!input || input.startsWith("/")) return false;
  if (!/^https?:\/\//i.test(input)) return false;
  try {
    const expectedOrigin = getSupabaseUrl() ? new URL(getSupabaseUrl()!).origin : null;
    return !expectedOrigin || new URL(input).origin !== expectedOrigin;
  } catch {
    return false;
  }
}

export function validatePublicImage(file: File): string | null {
  if (!PUBLIC_IMAGE_MIME_TYPES.includes(file.type as (typeof PUBLIC_IMAGE_MIME_TYPES)[number])) {
    return "Chỉ hỗ trợ ảnh JPG, PNG hoặc WebP.";
  }
  if (file.size > MAX_PUBLIC_IMAGE_BYTES) return "Ảnh vượt quá dung lượng cho phép 5 MB.";
  if (file.size === 0) return "Tệp ảnh đang trống.";
  return null;
}
