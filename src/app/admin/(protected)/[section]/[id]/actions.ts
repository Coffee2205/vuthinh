"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { createSupabaseAuthServerClient } from "@/lib/supabase/auth-server";
import { removePublicImage, uploadPublicImage } from "@/lib/supabase/storage-admin";
import { MAX_PUBLIC_IMAGE_BYTES, PUBLIC_IMAGE_MIME_TYPES } from "@/lib/supabase/storage";
import { requireAdmin } from "@/services/admin/auth.service";
import { editorConfigs, isEditorSection } from "@/services/admin/editor.service";

const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
const urlFields = new Set(["file_url", "external_url", "source_url", "canonical_url"]);
const numberFields = new Set(["session_count", "session_duration_minutes", "price", "original_price", "display_order", "reading_time_minutes"]);
const booleanFields = new Set(["is_featured", "is_active", "consent_confirmed"]);
const uuidFields = new Set(["category_id", "author_expert_id"]);
const publicPathBySection = { courses: "/courses", posts: "/blog", resources: "/resources", testimonials: "/success-stories", faqs: "/faq" } as const;

function editorError(list: string, id: string, code: string): never {
  redirect(`${list}/${id}?error=${code}`);
}

function validateImageFile(file: File, list: string, id: string) {
  if (!PUBLIC_IMAGE_MIME_TYPES.includes(file.type as (typeof PUBLIC_IMAGE_MIME_TYPES)[number])) editorError(list, id, "media-type");
  if (file.size > MAX_PUBLIC_IMAGE_BYTES || file.size === 0) editorError(list, id, "media-size");
}

export async function saveEditor(formData: FormData) {
  await requireAdmin();
  const section = String(formData.get("section"));
  const requestedId = String(formData.get("id"));
  if (!isEditorSection(section)) return;
  const config = editorConfigs[section];
  const isNew = requestedId === "new";
  const recordId = isNew ? crypto.randomUUID() : requestedId;
  if (!uuidPattern.test(recordId)) editorError(config.list, requestedId, "validation");

  const payload: Record<string, unknown> = {};
  for (const field of config.fields) {
    if (config.media?.field === field) continue;
    if (booleanFields.has(field)) { payload[field] = formData.get(field) === "on"; continue; }
    const raw = String(formData.get(field) ?? "").trim();
    if (!raw) { payload[field] = null; continue; }
    if (raw.length > 50000) editorError(config.list, requestedId, "validation");
    if (field === "slug" && !slugPattern.test(raw)) editorError(config.list, requestedId, "slug");
    if (uuidFields.has(field) && !uuidPattern.test(raw)) editorError(config.list, requestedId, "validation");
    if (urlFields.has(field) && !z.url().safeParse(raw).success) editorError(config.list, requestedId, "url");
    if (numberFields.has(field)) {
      const value = Number(raw);
      if (!Number.isFinite(value) || value < 0) editorError(config.list, requestedId, "number");
      payload[field] = value;
    } else payload[field] = raw;
  }

  if (section === "testimonials" && payload.status === "published" && payload.consent_confirmed !== true) editorError(config.list, requestedId, "consent");
  if ("status" in payload && !["draft", "published", "archived"].includes(String(payload.status))) editorError(config.list, requestedId, "validation");
  if (section === "posts" && (!payload.category_id || !payload.title || !payload.slug || !payload.excerpt || !payload.content)) editorError(config.list, requestedId, "validation");
  if ("status" in payload && payload.status === "published" && !payload.published_at) payload.published_at = new Date().toISOString();

  const db = await createSupabaseAuthServerClient();
  const mediaFileValue = formData.get("media_file");
  const mediaFile = mediaFileValue instanceof File && mediaFileValue.size > 0 ? mediaFileValue : null;
  const removeRequested = formData.get("remove_image") === "true";
  let oldMedia: string | null = null;

  if (config.media && !isNew) {
    const { data, error } = await db.from(config.table).select(config.media.field).eq("id", recordId).maybeSingle();
    if (error || !data) editorError(config.list, requestedId, "database");
    oldMedia = String((data as Record<string, unknown>)[config.media.field] ?? "") || null;
  }

  let uploadedPath: string | null = null;
  if (config.media && mediaFile) {
    validateImageFile(mediaFile, config.list, requestedId);
    const uploaded = await uploadPublicImage(db, mediaFile, `${config.media.folder}/${recordId}`);
    if (!uploaded.ok) editorError(config.list, requestedId, uploaded.code === "invalid" ? "media-type" : "media-upload");
    uploadedPath = uploaded.path;
    payload[config.media.field] = uploaded.path;
    if (section === "posts" && !payload.cover_image_alt) payload.cover_image_alt = String(payload.title ?? "Ảnh bài viết");
  } else if (config.media && removeRequested) {
    payload[config.media.field] = null;
  }

  const result = isNew
    ? await db.from(config.table).insert({ id: recordId, ...payload }).select("id").single()
    : await db.from(config.table).update(payload).eq("id", recordId).select("id").single();

  if (result.error) {
    if (uploadedPath) await removePublicImage(db, uploadedPath);
    const duplicate = result.error.code === "23505" ? "duplicate" : "database";
    editorError(config.list, requestedId, duplicate);
  }

  if (config.media && oldMedia && (uploadedPath || removeRequested)) {
    const removed = await removePublicImage(db, oldMedia);
    if (!removed.ok) {
      revalidatePath(config.list);
      revalidatePath(publicPathBySection[section]);
      editorError(config.list, recordId, "media-remove");
    }
  }

  revalidatePath(config.list);
  revalidatePath(publicPathBySection[section]);
  if (section === "posts" && payload.slug) revalidatePath(`/blog/${String(payload.slug)}`);
  redirect(config.list);
}
