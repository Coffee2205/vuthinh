import { createSupabaseServerClient } from "@/lib/supabase/server";
import { getBlogCoverMedia } from "@/config/public-media";
import { getPublicMediaUrl } from "@/lib/supabase/storage";
import type { BlogAuthor, BlogCategory, BlogFilters, BlogPost, BlogPostDetail, BlogPostListItem, BlogRelatedConsultationService, BlogRelatedCourse, BlogTag, PaginatedBlogPosts } from "@/types/blog";

type Row = Record<string, unknown>;
const listColumns = "id,category_id,author_expert_id,title,slug,excerpt,cover_image_url,cover_image_alt,status,is_featured,reading_time_minutes,seo_title,seo_description,canonical_url,source_title,source_url,source_publisher,source_accessed_at,source_note,published_at,display_order,created_at,updated_at";
function fail(context: string, error: { message: string }): never { console.error(`[blog.service] ${context}: ${error.message}`); throw new Error(context) }
function one<T>(value: unknown): T | null { return Array.isArray(value) ? (value[0] as T ?? null) : (value as T ?? null) }
function mapList(row: Row): BlogPostListItem {
  const { content: _content, blog_categories, experts, blog_post_tags, ...post } = row;
  void _content;
  const tags = Array.isArray(blog_post_tags) ? blog_post_tags.map((item) => one<BlogTag>((item as Row).blog_tags)).filter((tag): tag is BlogTag => Boolean(tag)) : [];
  const storedPost = post as unknown as Omit<BlogPost, "content">;
  const storageCover = storedPost.cover_image_url ? null : getBlogCoverMedia(storedPost.slug);
  const author = one<BlogAuthor>(experts);
  return {
    ...storedPost,
    cover_image_url: getPublicMediaUrl(storedPost.cover_image_url || storageCover?.url),
    cover_image_alt: storedPost.cover_image_alt || storageCover?.alt || null,
    category: one<BlogCategory>(blog_categories),
    author: author ? { ...author, avatar_url: getPublicMediaUrl(author.avatar_url) } : null,
    tags,
  };
}
const relationSelect = `${listColumns},blog_categories(id,name,slug,description,display_order,is_active),experts(id,full_name,slug,professional_title,avatar_url),blog_post_tags(blog_tags(id,name,slug,is_active))`;

export async function getActiveBlogCategories(): Promise<BlogCategory[]> {
  const { data, error } = await createSupabaseServerClient().from("blog_categories").select("*").eq("is_active", true).order("display_order");
  if (error) fail("Không thể tải danh mục blog", error); return (data ?? []) as BlogCategory[];
}
export async function getPublishedBlogPosts(filters: BlogFilters = {}): Promise<BlogPostListItem[]> {
  const supabase = createSupabaseServerClient(); let categoryId: string | undefined;
  if (filters.categorySlug) { const { data, error } = await supabase.from("blog_categories").select("id").eq("slug", filters.categorySlug).eq("is_active", true).maybeSingle(); if (error) fail("Không thể tải danh mục blog", error); if (!data) return []; categoryId = data.id }
  let query = supabase.from("blog_posts").select(relationSelect).eq("status", "published").or(`published_at.is.null,published_at.lte.${new Date().toISOString()}`).order("published_at", { ascending: false, nullsFirst: false }).order("display_order");
  if (categoryId) query = query.eq("category_id", categoryId); if (filters.featured != null) query = query.eq("is_featured", filters.featured);
  if (filters.limit != null) query = query.range(filters.offset ?? 0, (filters.offset ?? 0) + filters.limit - 1);
  const { data, error } = await query; if (error) fail("Không thể tải bài viết", error); return (data ?? []).map((row) => mapList(row as Row));
}
export function getFeaturedBlogPosts() { return getPublishedBlogPosts({ featured: true, limit: 2 }) }
export function getBlogPostsByCategorySlug(categorySlug: string) { return getPublishedBlogPosts({ categorySlug }) }

export async function getPaginatedBlogPosts({ categorySlug, page, pageSize }: { categorySlug?: string; page: number; pageSize: number }): Promise<PaginatedBlogPosts> {
  const supabase = createSupabaseServerClient();
  let categoryId: string | undefined;
  if (categorySlug) {
    const { data, error } = await supabase.from("blog_categories").select("id").eq("slug", categorySlug).eq("is_active", true).maybeSingle();
    if (error) fail("Không thể tải danh mục blog", error);
    if (!data) return { posts: [], total: 0, page, pageSize, totalPages: 1 };
    categoryId = data.id;
  }

  const offset = (page - 1) * pageSize;
  let query = supabase
    .from("blog_posts")
    .select(relationSelect, { count: "exact" })
    .eq("status", "published")
    .or(`published_at.is.null,published_at.lte.${new Date().toISOString()}`)
    .order("published_at", { ascending: false, nullsFirst: false })
    .order("display_order")
    .range(offset, offset + pageSize - 1);
  if (categoryId) query = query.eq("category_id", categoryId);

  const { data, count, error } = await query;
  if (error) fail("Không thể tải bài viết", error);
  const total = count ?? 0;
  return {
    posts: (data ?? []).map((row) => mapList(row as Row)),
    total,
    page,
    pageSize,
    totalPages: Math.max(1, Math.ceil(total / pageSize)),
  };
}

async function getRelatedCoursesByPostIdWithClient(postId: string): Promise<BlogRelatedCourse[]> { const { data, error } = await createSupabaseServerClient().from("blog_post_courses").select("courses(id,title,slug,level_label,session_count,price,price_display,currency)").eq("post_id", postId).limit(3); if (error) fail("Không thể tải khóa học liên quan", error); return (data ?? []).map((row) => one<BlogRelatedCourse>((row as Row).courses)).filter((item): item is BlogRelatedCourse => Boolean(item)) }
export const getRelatedCoursesByPostId = getRelatedCoursesByPostIdWithClient;
export async function getRelatedConsultationServicesByPostId(postId: string): Promise<BlogRelatedConsultationService[]> { const { data, error } = await createSupabaseServerClient().from("blog_post_consultation_services").select("consultation_services(id,name,slug,short_description,price,price_from,price_to,currency,price_unit)").eq("post_id", postId).limit(3); if (error) fail("Không thể tải dịch vụ liên quan", error); return (data ?? []).map((row) => one<BlogRelatedConsultationService>((row as Row).consultation_services)).filter((item): item is BlogRelatedConsultationService => Boolean(item)) }
export async function getRelatedBlogPosts(postId: string): Promise<BlogPostListItem[]> { const supabase = createSupabaseServerClient(); const { data, error } = await supabase.from("blog_post_relations").select("related_post_id").eq("post_id", postId).order("display_order").limit(3); if (error) fail("Không thể tải bài viết liên quan", error); const ids = (data ?? []).map((item) => item.related_post_id); if (!ids.length) return []; const { data: posts, error: postsError } = await supabase.from("blog_posts").select(relationSelect).in("id", ids).eq("status", "published").or(`published_at.is.null,published_at.lte.${new Date().toISOString()}`); if (postsError) fail("Không thể tải bài viết liên quan", postsError); return (posts ?? []).map((row) => mapList(row as Row)) }
export async function getBlogPostBySlug(slug: string): Promise<BlogPostDetail | null> { const supabase = createSupabaseServerClient(); const { data, error } = await supabase.from("blog_posts").select(`content,${relationSelect}`).eq("slug", slug).eq("status", "published").or(`published_at.is.null,published_at.lte.${new Date().toISOString()}`).maybeSingle(); if (error) fail("Không thể tải bài viết", error); if (!data) return null; const base = mapList(data as Row); const [related_courses, related_consultation_services, related_posts] = await Promise.all([getRelatedCoursesByPostId(data.id), getRelatedConsultationServicesByPostId(data.id), getRelatedBlogPosts(data.id)]); return { ...base, content: data.content, related_courses, related_consultation_services, related_posts } }
