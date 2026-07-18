export type ResourceStatus = "draft" | "published" | "archived";

export interface LearningResource {
  id: string;
  title: string;
  slug: string;
  description: string | null;
  thumbnail_url: string | null;
  thumbnail_alt: string | null;
  resource_type: string;
  file_url: string | null;
  external_url: string | null;
  status: ResourceStatus;
  is_featured: boolean;
  published_at: string | null;
  display_order: number;
  created_at: string;
  updated_at: string;
}
