"use client";

import Image from "next/image";
import { useEffect, useId, useState } from "react";
import { MAX_PUBLIC_IMAGE_BYTES, PUBLIC_IMAGE_MIME_TYPES, shouldBypassImageOptimization } from "@/lib/supabase/storage";

export function AdminMediaField({
  label,
  initialUrl,
  previewAlt,
  aspect,
}: {
  label: string;
  initialUrl: string | null;
  previewAlt: string;
  aspect: "16/9" | "1/1";
}) {
  const inputId = useId();
  const [previewUrl, setPreviewUrl] = useState(initialUrl);
  const [objectUrl, setObjectUrl] = useState<string | null>(null);
  const [removeRequested, setRemoveRequested] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => () => { if (objectUrl) URL.revokeObjectURL(objectUrl); }, [objectUrl]);

  function handleFile(file: File | undefined) {
    if (objectUrl) URL.revokeObjectURL(objectUrl);
    setObjectUrl(null);
    setError("");
    if (!file) { setPreviewUrl(removeRequested ? null : initialUrl); return true; }
    if (!PUBLIC_IMAGE_MIME_TYPES.includes(file.type as (typeof PUBLIC_IMAGE_MIME_TYPES)[number])) {
      setPreviewUrl(initialUrl);
      setError("Chỉ hỗ trợ ảnh JPG, PNG hoặc WebP.");
      return false;
    }
    if (file.size > MAX_PUBLIC_IMAGE_BYTES) {
      setPreviewUrl(initialUrl);
      setError("Ảnh vượt quá dung lượng cho phép 5 MB.");
      return false;
    }
    const nextObjectUrl = URL.createObjectURL(file);
    setObjectUrl(nextObjectUrl);
    setPreviewUrl(nextObjectUrl);
    setRemoveRequested(false);
    return true;
  }

  function removeImage() {
    if (objectUrl) URL.revokeObjectURL(objectUrl);
    setObjectUrl(null);
    setPreviewUrl(null);
    setRemoveRequested(true);
    setError("");
    const input = document.getElementById(inputId) as HTMLInputElement | null;
    if (input) input.value = "";
  }

  return <fieldset className="md:col-span-2 rounded-xl border border-slate-200 p-4">
    <legend className="px-1 text-sm font-semibold text-slate-900">{label}</legend>
    <input type="hidden" name="remove_image" value={removeRequested ? "true" : "false"} />
    <div className="mt-2 grid gap-4 sm:grid-cols-[minmax(0,18rem)_1fr] sm:items-start">
      <div className={`relative overflow-hidden rounded-xl bg-slate-100 ${aspect === "1/1" ? "aspect-square max-w-72" : "aspect-video"}`}>
        {previewUrl ? <Image src={previewUrl} alt={previewAlt} fill sizes="(max-width: 640px) 100vw, 288px" className="object-cover" unoptimized={previewUrl.startsWith("blob:") || shouldBypassImageOptimization(previewUrl)} onError={() => { setPreviewUrl(null); setError("Không thể hiển thị ảnh xem trước."); }} /> : <div className="grid h-full place-items-center p-5 text-center text-sm text-slate-500">Chưa có ảnh</div>}
      </div>
      <div>
        <label htmlFor={inputId} className="text-sm font-semibold text-slate-900">Chọn ảnh mới</label>
        <input id={inputId} name="media_file" type="file" accept={PUBLIC_IMAGE_MIME_TYPES.join(",")} onChange={(event) => { if (!handleFile(event.target.files?.[0])) event.currentTarget.value = ""; }} className="mt-2 block min-h-11 w-full rounded-lg border border-slate-300 p-2 text-sm file:mr-3 file:rounded-md file:border-0 file:bg-blue-50 file:px-3 file:py-2 file:font-semibold file:text-brand-blue" aria-describedby={`${inputId}-help ${inputId}-status`} />
        <p id={`${inputId}-help`} className="mt-2 text-sm leading-6 text-slate-600">JPG, PNG hoặc WebP; tối đa 5 MB. Ảnh mới chỉ được tải lên khi bấm Lưu.</p>
        <p id={`${inputId}-status`} className={`mt-2 text-sm ${error ? "text-red-700" : "text-slate-600"}`} aria-live="polite">{error || (removeRequested ? "Ảnh sẽ được gỡ khi lưu nội dung." : objectUrl ? "Đã chọn ảnh mới để xem trước." : "")}</p>
        {previewUrl && <button type="button" onClick={removeImage} className="mt-3 inline-flex min-h-11 items-center rounded-lg border border-red-200 px-4 font-semibold text-red-700 hover:bg-red-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-700" aria-label={`Xóa ${label.toLowerCase()}`}>Xóa ảnh</button>}
      </div>
    </div>
  </fieldset>;
}
