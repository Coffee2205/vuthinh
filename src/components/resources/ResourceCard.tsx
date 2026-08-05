import Image from "next/image";
import Link from "next/link";
import type { LearningResource } from "@/types/resource";
import { shouldBypassImageOptimization } from "@/lib/supabase/storage";

export function ResourceCard({ resource }: { resource: LearningResource }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="relative aspect-[16/10] bg-gradient-to-br from-amber-50 via-white to-blue-100">
        {resource.thumbnail_url ? (
          <Image
            src={resource.thumbnail_url}
            alt={resource.thumbnail_alt || `Ảnh tài liệu ${resource.title}`}
            fill
            sizes="(min-width:1024px) 33vw,(min-width:640px) 50vw,100vw"
            className="object-cover"
            unoptimized={shouldBypassImageOptimization(resource.thumbnail_url)}
          />
        ) : (
          <div className="grid h-full place-items-center p-6 text-center">
            <span className="text-sm font-bold uppercase tracking-[.15em] text-brand-blue">
              Vũ Thịnh · Tài liệu
            </span>
          </div>
        )}
        {resource.is_featured && (
          <span className="absolute right-3 top-3 rounded-full bg-amber-300 px-3 py-1 text-xs font-bold text-slate-900">
            Nổi bật
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex flex-wrap gap-2 text-xs font-bold uppercase tracking-[.1em] text-brand-green">
          <span>{resource.category?.name || resource.resource_type}</span>
          {resource.file_type && (
            <span className="text-slate-500">· {resource.file_type}</span>
          )}
        </div>
        <h2 className="mt-3 text-xl font-bold leading-snug text-slate-950">
          <Link
            href={`/resources/${resource.slug}`}
            className="rounded-sm hover:text-brand-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
          >
            {resource.title}
          </Link>
        </h2>
        {resource.description && (
          <p className="mt-3 line-clamp-4 leading-7 text-slate-600">
            {resource.description}
          </p>
        )}
        <div className="mt-auto pt-5">
          {resource.author_name && (
            <p className="text-sm text-slate-500">
              Tác giả: {resource.author_name}
            </p>
          )}
          <p className="mt-2 text-sm font-semibold text-slate-600">
            {resource.access_type === "public"
              ? "Có thể truy cập ngay"
              : "Cần đăng ký để nhận tài liệu"}
          </p>
          <Link
            href={`/resources/${resource.slug}`}
            className="button-primary mt-5 w-full"
          >
            Xem chi tiết
          </Link>
        </div>
      </div>
    </article>
  );
}
