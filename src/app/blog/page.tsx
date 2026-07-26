import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { BlogCard } from "@/components/blog/BlogCard";
import { BlogCategoryFilter } from "@/components/blog/BlogCategoryFilter";
import { BlogPagination } from "@/components/blog/BlogPagination";
import { Container } from "@/components/common/Container";
import { getActiveBlogCategories, getFeaturedBlogPosts, getPaginatedBlogPosts } from "@/services/blog.service";
import { createPageMetadata } from "@/lib/seo";

const BLOG_PAGE_SIZE = 12;

export const metadata: Metadata = createPageMetadata({ title: "Blog kiến thức", description: "Kiến thức về tiếng Trung, HSK, phương pháp học và lộ trình học tập tại Vũ Thịnh.", path: "/blog" });
export default async function BlogPage({ searchParams }: { searchParams: Promise<{ category?: string; page?: string }> }) {
  const { category, page: pageParam } = await searchParams;
  const parsedPage = Number.parseInt(pageParam ?? "1", 10);
  const page = Number.isFinite(parsedPage) && parsedPage > 0 ? parsedPage : 1;
  const [categories, paginated, featured] = await Promise.all([
    getActiveBlogCategories(),
    getPaginatedBlogPosts({ categorySlug: category, page, pageSize: BLOG_PAGE_SIZE }),
    getFeaturedBlogPosts(),
  ]);
  if (paginated.total > 0 && page > paginated.totalPages) {
    const params = new URLSearchParams();
    if (category) params.set("category", category);
    if (paginated.totalPages > 1) params.set("page", String(paginated.totalPages));
    redirect(params.size ? `/blog?${params}` : "/blog");
  }
  const posts = paginated.posts;
  const shownFeatured = featured.length ? featured : posts.slice(0, 1);
  return <main><section className="bg-gradient-to-b from-white to-blue-50 py-16 sm:py-20"><Container><div className="max-w-3xl"><p className="text-sm font-bold uppercase tracking-[.14em] text-brand-green">Trung tâm kiến thức giáo dục</p><h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">Kiến thức và phương pháp học tập</h1><p className="mt-6 text-lg leading-8 text-slate-600">Nội dung về tiếng Trung, HSK, phương pháp học và lộ trình dành cho người học và phụ huynh.</p></div></Container></section>
    <section className="py-14" aria-labelledby="featured-heading"><Container><h2 id="featured-heading" className="text-3xl font-bold text-slate-950">Bài viết nổi bật</h2>{shownFeatured.length ? <div className="mt-7 grid gap-6 lg:grid-cols-2">{shownFeatured.map((post) => <BlogCard key={post.id} post={post} />)}</div> : <p className="mt-5 rounded-2xl bg-slate-50 p-6 text-slate-600">Chưa có bài viết nổi bật được xuất bản.</p>}</Container></section>
    <section className="bg-slate-50 py-14" aria-labelledby="latest-heading"><Container><div className="flex flex-col gap-6"><div><h2 id="latest-heading" className="text-3xl font-bold text-slate-950">Bài viết mới nhất</h2><p className="mt-2 text-slate-600">Chọn danh mục để tìm nội dung phù hợp.</p></div><BlogCategoryFilter categories={categories} activeSlug={category} /></div>{posts.length ? <><div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{posts.map((post) => <BlogCard key={post.id} post={post} />)}</div><BlogPagination page={page} totalPages={paginated.totalPages} category={category} /></> : <div className="mt-8 rounded-2xl border border-dashed border-slate-300 bg-white p-8"><h3 className="text-xl font-bold text-slate-950">Chưa có bài viết phù hợp</h3><p className="mt-2 text-slate-600">Hãy chọn danh mục khác hoặc quay lại xem tất cả bài viết.</p>{category && <Link href="/blog" className="button-primary mt-5">Xem tất cả bài viết</Link>}</div>}</Container></section>
    <section className="py-14"><Container><div className="rounded-3xl bg-brand-blue px-6 py-10 text-white sm:px-10"><h2 className="text-2xl font-bold">Bạn cần một lộ trình phù hợp?</h2><p className="mt-3 max-w-2xl leading-7 text-blue-50">Khám phá khóa học hoặc gửi yêu cầu để được trao đổi về mục tiêu học tập.</p><div className="mt-6 flex flex-wrap gap-3"><Link href="/courses" className="inline-flex min-h-11 items-center rounded-lg bg-white px-5 font-semibold text-brand-blue">Xem khóa học</Link><Link href="/consultation" className="inline-flex min-h-11 items-center rounded-lg border border-white px-5 font-semibold text-white">Đăng ký tư vấn</Link></div></div></Container></section></main>
}
