export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  display_order: number;
  is_active: boolean;
}
export interface BlogTag {
  id: string;
  name: string;
  slug: string;
  is_active: boolean;
}
export interface BlogAuthor {
  id: string;
  full_name: string;
  slug: string;
  professional_title: string;
  avatar_url: string | null;
}
export interface BlogPost {
  id: string;
  category_id: string | null;
  author_expert_id: string | null;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string;
  cover_image_url: string | null;
  cover_image_alt: string | null;
  status: "draft" | "published" | "archived";
  is_featured: boolean;
  reading_time_minutes: number | null;
  seo_title: string | null;
  seo_description: string | null;
  canonical_url: string | null;
  source_title: string | null;
  source_url: string | null;
  source_publisher: string | null;
  source_accessed_at: string | null;
  source_note: string | null;
  published_at: string | null;
  display_order: number;
  created_at: string;
  updated_at: string;
}
export interface BlogPostListItem extends Omit<BlogPost, "content"> {
  category: BlogCategory | null;
  author: BlogAuthor | null;
  tags: BlogTag[];
}
export interface BlogRelatedCourse {
  id: string;
  title: string;
  slug: string;
  level_label: string;
  session_count: number;
  price: number | null;
  price_display: string | null;
  currency: string;
}
export interface BlogRelatedConsultationService {
  id: string;
  name: string;
  slug: string;
  short_description: string | null;
  price: number | null;
  price_from: number | null;
  price_to: number | null;
  currency: string;
  price_unit: string | null;
}
export type BlogRelatedPost = BlogPostListItem;
export interface BlogPostDetail extends BlogPostListItem {
  content: string;
  related_courses: BlogRelatedCourse[];
  related_consultation_services: BlogRelatedConsultationService[];
  related_posts: BlogRelatedPost[];
}
export interface BlogFilters {
  categorySlug?: string;
  limit?: number;
  offset?: number;
  featured?: boolean;
}
export interface PaginatedBlogPosts {
  posts: BlogPostListItem[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}
