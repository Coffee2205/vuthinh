import assert from "node:assert/strict";
import test from "node:test";

process.env.NEXT_PUBLIC_SUPABASE_URL = "https://project-ref.supabase.co";
const storage = await import("../src/lib/supabase/storage.ts");

test("giữ nguyên URL đầy đủ và local path", () => {
  assert.equal(storage.getPublicMediaUrl("https://cdn.example.com/image.jpg"), "https://cdn.example.com/image.jpg");
  assert.equal(storage.getPublicMediaUrl("/images/local.webp"), "/images/local.webp");
});

test("chuyển storage path thành public URL đúng một lần", () => {
  const path = "courses/record-id/image.webp";
  const url = "https://project-ref.supabase.co/storage/v1/object/public/Public-Media/courses/record-id/image.webp";
  assert.equal(storage.getPublicMediaUrl(path), url);
  assert.equal(storage.getPublicMediaUrl(url), url);
});

test("null và placeholder không tạo broken URL", () => {
  assert.equal(storage.getPublicMediaUrl(null), null);
  assert.equal(storage.getPublicMediaUrl("placeholder"), null);
});

test("trích đúng path từ URL Supabase hiện tại", () => {
  const url = "https://project-ref.supabase.co/storage/v1/object/public/Public-Media/posts/post-id/cover.webp";
  assert.equal(storage.getPublicMediaPath(url), "posts/post-id/cover.webp");
  assert.equal(storage.isSupabaseStoragePath("posts/post-id/cover.webp"), true);
});

test("không coi URL ngoài hoặc bucket khác là file có thể xóa", () => {
  assert.equal(storage.getPublicMediaPath("https://cdn.example.com/image.jpg"), null);
  assert.equal(storage.getPublicMediaPath("https://project-ref.supabase.co/storage/v1/object/public/other/image.jpg"), null);
});

test("chỉ bỏ Image Optimizer cho host ảnh ngoài", () => {
  assert.equal(storage.shouldBypassImageOptimization("https://cdn.example.com/image.jpg"), true);
  assert.equal(storage.shouldBypassImageOptimization("https://project-ref.supabase.co/storage/v1/object/public/Public-Media/courses/id/image.webp"), false);
  assert.equal(storage.shouldBypassImageOptimization("/images/local.webp"), false);
});

test("folder mapping chỉ chứa entity được phép", () => {
  assert.deepEqual(storage.MEDIA_FOLDERS, {
    courses: "courses",
    posts: "posts",
    resources: "resources",
    testimonials: "testimonials",
    experts: "experts",
  });
});

test("validate MIME và giới hạn 5 MB", () => {
  assert.equal(storage.validatePublicImage(new File(["ok"], "image.png", { type: "image/png" })), null);
  assert.equal(storage.validatePublicImage(new File(["bad"], "image.svg", { type: "image/svg+xml" })), "Chỉ hỗ trợ ảnh JPG, PNG hoặc WebP.");
  assert.equal(storage.validatePublicImage(new File([new Uint8Array(storage.MAX_PUBLIC_IMAGE_BYTES + 1)], "large.jpg", { type: "image/jpeg" })), "Ảnh vượt quá dung lượng cho phép 5 MB.");
});
