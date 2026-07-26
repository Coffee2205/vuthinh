import Link from "next/link";
import { saveEditor } from "@/app/admin/(protected)/[section]/[id]/actions";
import { AdminMediaField } from "@/components/admin/AdminMediaField";
import { AdminSubmitButton } from "@/components/admin/AdminSubmitButton";
import { getPublicMediaUrl } from "@/lib/supabase/storage";
import { editorConfigs, type EditorOptions, type EditorSection } from "@/services/admin/editor.service";

const labels: Record<string, string> = {
  category_id: "Danh mục", author_expert_id: "Tác giả/giảng viên", title: "Tiêu đề", slug: "Slug",
  short_description: "Mô tả ngắn", description: "Mô tả", level_label: "Cấp độ", level_from: "Trình độ đầu vào",
  level_to: "Trình độ đầu ra", session_count: "Số buổi", session_duration_minutes: "Phút mỗi buổi",
  duration_text: "Thời lượng hiển thị", study_format: "Hình thức học", class_size_text: "Sĩ số", price: "Giá",
  original_price: "Giá gốc", price_display: "Giá hiển thị", is_featured: "Featured", status: "Trạng thái",
  published_at: "Ngày xuất bản", excerpt: "Tóm tắt", content: "Nội dung Markdown/câu chuyện",
  cover_image_alt: "Alt ảnh", seo_title: "SEO title", seo_description: "SEO description", source_title: "Tên nguồn",
  canonical_url: "Canonical URL", reading_time_minutes: "Thời gian đọc (phút)", source_url: "URL nguồn", source_publisher: "Nhà xuất bản", source_accessed_at: "Ngày truy cập nguồn", source_note: "Ghi chú nguồn", author_name: "Tác giả",
  resource_type: "Loại tài nguyên", file_url: "File URL", external_url: "External URL", file_name: "Tên file",
  mime_type: "MIME type", access_type: "Kiểu truy cập", student_name: "Tên học viên", quote: "Trích dẫn ngắn",
  consent_confirmed: "Đã xác nhận consent", question: "Câu hỏi", answer: "Trả lời", is_active: "Active",
  display_order: "Thứ tự",
};
const textareas = new Set(["description", "content", "excerpt", "short_description", "source_note", "answer"]);
const checks = new Set(["is_featured", "is_active", "consent_confirmed"]);
const nums = new Set(["session_count", "session_duration_minutes", "price", "original_price", "display_order", "reading_time_minutes"]);
const requiredPostFields = new Set(["title", "slug", "excerpt", "content", "status"]);

const messages: Record<string, string> = {
  consent: "Không thể publish cảm nhận khi chưa xác nhận consent.",
  duplicate: "Slug đã tồn tại.",
  "media-type": "Chỉ hỗ trợ ảnh JPG, PNG hoặc WebP.",
  "media-size": "Ảnh vượt quá dung lượng cho phép 5 MB.",
  "media-upload": "Không thể tải ảnh lên. Vui lòng thử lại.",
  "media-remove": "Đã lưu nội dung nhưng chưa thể xóa ảnh cũ.",
};

export function AdminEditor({ section, id, record, options, error }: { section: EditorSection; id: string; record: Record<string, unknown> | null; options?: EditorOptions | null; error?: string }) {
  const config = editorConfigs[section];
  const message = error ? messages[error] ?? "Dữ liệu không hợp lệ hoặc database từ chối thao tác." : "";
  const mediaValue = config.media ? String(record?.[config.media.field] ?? "") : "";
  const previewAlt = String(record?.title ?? record?.student_name ?? config.media?.label ?? "Ảnh nội dung");

  return <>
    <h1 className="text-3xl font-bold">{id === "new" ? "Tạo" : "Chỉnh sửa"} {config.title}</h1>
    {message && <p role="alert" className={`mt-5 rounded-lg p-4 ${error === "media-remove" ? "bg-amber-50 text-amber-900" : "bg-red-50 text-red-800"}`}>{message}</p>}
    <form action={saveEditor} className="mt-6 space-y-6 rounded-xl border bg-white p-5 sm:p-7">
      <input type="hidden" name="section" value={section} />
      <input type="hidden" name="id" value={id} />
      <div className="grid gap-5 md:grid-cols-2">
        {config.media && <AdminMediaField label={config.media.label} initialUrl={getPublicMediaUrl(mediaValue)} previewAlt={previewAlt} aspect={config.media.aspect} />}
        {config.fields.map((field) => {
          if (config.media?.field === field) return null;
          const value = record?.[field];
          if (section === "posts" && field === "category_id") return <div key={field}><label htmlFor={field} className="text-sm font-semibold">{labels[field]}</label><select id={field} name={field} defaultValue={String(value ?? "")} required className="mt-2 min-h-11 w-full rounded-lg border px-3"><option value="" disabled>Chọn danh mục</option>{options?.categories.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}</select></div>;
          if (section === "posts" && field === "author_expert_id") return <div key={field}><label htmlFor={field} className="text-sm font-semibold">{labels[field]}</label><select id={field} name={field} defaultValue={String(value ?? options?.authors[0]?.value ?? "")} className="mt-2 min-h-11 w-full rounded-lg border px-3"><option value="">Ban biên tập Vũ Thịnh</option>{options?.authors.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}</select></div>;
          if (checks.has(field)) return <label key={field} className="flex min-h-11 items-center gap-3 rounded-lg border p-3"><input name={field} type="checkbox" defaultChecked={value === true} className="size-5" />{labels[field]}</label>;
          if (field === "status") return <div key={field}><label htmlFor={field} className="text-sm font-semibold">{labels[field]}</label><select id={field} name={field} defaultValue={String(value ?? "draft")} className="mt-2 min-h-11 w-full rounded-lg border px-3"><option value="draft">draft</option><option value="published">published</option><option value="archived">archived</option></select></div>;
          if (field === "access_type") return <div key={field}><label htmlFor={field} className="text-sm font-semibold">{labels[field]}</label><select id={field} name={field} defaultValue={String(value ?? "public")} className="mt-2 min-h-11 w-full rounded-lg border px-3"><option value="public">public</option><option value="registration_required">registration_required</option></select></div>;
          const isDateField = field === "published_at" || field === "source_accessed_at";
          const defaultValue = field === "display_order" && id === "new" ? "0" : isDateField && value ? String(value).slice(0, field === "published_at" ? 16 : 10) : String(value ?? "");
          return <div key={field} className={textareas.has(field) ? "md:col-span-2" : ""}><label htmlFor={field} className="text-sm font-semibold">{labels[field] ?? field}</label>{textareas.has(field) ? <textarea id={field} name={field} defaultValue={String(value ?? "")} rows={field === "content" ? 12 : 4} maxLength={50000} required={section === "posts" && requiredPostFields.has(field)} className="mt-2 w-full rounded-lg border p-3" /> : <input id={field} name={field} type={nums.has(field) ? "number" : field === "published_at" ? "datetime-local" : field === "source_accessed_at" ? "date" : "text"} min={nums.has(field) ? 0 : undefined} defaultValue={defaultValue} maxLength={1000} required={section === "posts" && requiredPostFields.has(field)} className="mt-2 min-h-11 w-full rounded-lg border px-3" />}</div>;
        })}
      </div>
      {section === "testimonials" && <p className="rounded-lg bg-amber-50 p-4 text-sm text-amber-900">Bắt buộc xác nhận consent trước khi publish. Không biến lời kể thành cam kết thành tích.</p>}
      <div className="flex gap-3"><AdminSubmitButton /><Link href={config.list} className="inline-flex min-h-11 items-center rounded-lg border px-5 font-semibold">Hủy</Link></div>
    </form>
  </>;
}
