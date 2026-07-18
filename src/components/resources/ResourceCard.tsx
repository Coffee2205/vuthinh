import Image from "next/image";
import type { LearningResource } from "@/types/resource";

function safeResourceUrl(resource: LearningResource) {
  const value = resource.file_url || resource.external_url;
  if (!value) return null;
  try {
    const url = new URL(value);
    return url.protocol === "https:" || url.protocol === "http:" ? value : null;
  } catch {
    return null;
  }
}

export function ResourceCard({ resource }: { resource: LearningResource }) {
  const href = safeResourceUrl(resource);
  const actionLabel = resource.file_url ? "Tải tài liệu" : "Xem tài liệu";

  return <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
    <div className="relative aspect-[16/10] bg-gradient-to-br from-amber-50 via-white to-blue-100">
      {resource.thumbnail_url ? <Image src={resource.thumbnail_url} alt={resource.thumbnail_alt || `Ảnh tài liệu ${resource.title}`} fill unoptimized sizes="(min-width:1024px) 33vw,(min-width:640px) 50vw,100vw" className="object-cover" /> : <div className="grid h-full place-items-center p-6 text-center"><span className="text-sm font-bold uppercase tracking-[.15em] text-brand-blue">Vũ Thịnh · Tài liệu</span></div>}
      {resource.is_featured && <span className="absolute right-3 top-3 rounded-full bg-amber-300 px-3 py-1 text-xs font-bold text-slate-900">Nổi bật</span>}
    </div>
    <div className="flex flex-1 flex-col p-5 sm:p-6"><p className="text-xs font-bold uppercase tracking-[.12em] text-brand-green">{resource.resource_type}</p><h2 className="mt-3 text-xl font-bold leading-snug text-slate-950">{resource.title}</h2>{resource.description && <p className="mt-3 line-clamp-4 leading-7 text-slate-600">{resource.description}</p>}<div className="mt-auto pt-6">{href ? <a href={href} target="_blank" rel="noopener noreferrer" className="button-primary w-full">{actionLabel}<span className="sr-only">, mở trong tab mới</span></a> : <p className="rounded-lg bg-slate-100 px-4 py-3 text-center text-sm font-semibold text-slate-600">Link đang được cập nhật</p>}</div></div>
  </article>;
}
