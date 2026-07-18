export type ResourceStatus = "draft" | "published" | "archived";
export type ResourceAccessType = "public" | "registration_required";

export interface ResourceCategory { id: string; name: string; slug: string; description: string | null; display_order: number; is_active: boolean }
export interface ResourceRelatedCourse { id: string; title: string; slug: string; short_description: string; level_label: string; session_count: number; thumbnail_url: string | null }
export interface LearningResource {
  id: string; category_id: string | null; title: string; slug: string; description: string | null;
  thumbnail_url: string | null; thumbnail_alt: string | null; resource_type: string; file_type: string | null;
  author_name: string | null; access_type: ResourceAccessType; file_url: string | null; external_url: string | null;
  status: ResourceStatus; is_featured: boolean; published_at: string | null; display_order: number;
  created_at: string; updated_at: string; category: ResourceCategory | null; related_courses: ResourceRelatedCourse[];
}
export interface ResourceFilters { categorySlug?: string }
