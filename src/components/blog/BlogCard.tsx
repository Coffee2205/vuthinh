import Image from "next/image";
import Link from "next/link";
import type { BlogPostListItem } from "@/types/blog";
import { shouldBypassImageOptimization } from "@/lib/supabase/storage";

export const formatBlogDate = (value: string | null) => value ? new Intl.DateTimeFormat("vi-VN", { dateStyle: "long" }).format(new Date(value)) : "Đang cập nhật";
export function BlogCard({ post, headingLevel = "h2" }: { post: BlogPostListItem; headingLevel?: "h2" | "h3" }) {
  const Heading = headingLevel;
  return <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
    <div className="relative aspect-[16/10] bg-gradient-to-br from-blue-100 via-white to-emerald-100">{post.cover_image_url ? <Image src={post.cover_image_url} alt={post.cover_image_alt || `Ảnh bài viết ${post.title}`} fill sizes="(min-width:1024px) 33vw,(min-width:640px) 50vw,100vw" className="object-cover" unoptimized={shouldBypassImageOptimization(post.cover_image_url)} /> : <div className="grid h-full place-items-center p-6 text-center text-sm font-bold uppercase tracking-[.15em] text-brand-blue">Vũ Thịnh · Kiến thức</div>}</div>
    <div className="flex flex-1 flex-col p-5 sm:p-6"><p className="text-xs font-bold uppercase tracking-[.12em] text-brand-green">{post.category?.name ?? "Kiến thức"}</p><Heading className="mt-3 text-xl font-bold leading-snug text-slate-950"><Link className="rounded-sm hover:text-brand-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue" href={`/blog/${post.slug}`}>{post.title}</Link></Heading>{post.excerpt && <p className="mt-3 line-clamp-3 leading-7 text-slate-600">{post.excerpt}</p>}<div className="mt-auto pt-5 text-sm text-slate-500"><p>{post.author?.full_name ?? "Ban biên tập Vũ Thịnh"}</p><p className="mt-1">{formatBlogDate(post.published_at)}{post.reading_time_minutes ? ` · ${post.reading_time_minutes} phút đọc` : ""}</p></div></div>
  </article>
}
