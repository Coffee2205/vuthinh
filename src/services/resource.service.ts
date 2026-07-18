import { createSupabaseServerClient } from "@/lib/supabase/server";
import type { LearningResource } from "@/types/resource";

const resourceColumns = "id,title,slug,description,thumbnail_url,thumbnail_alt,resource_type,file_url,external_url,status,is_featured,published_at,display_order,created_at,updated_at";

export async function getPublishedResources(): Promise<LearningResource[]> {
  const { data, error } = await createSupabaseServerClient()
    .from("resources")
    .select(resourceColumns)
    .eq("status", "published")
    .or(`published_at.is.null,published_at.lte.${new Date().toISOString()}`)
    .order("is_featured", { ascending: false })
    .order("published_at", { ascending: false, nullsFirst: false })
    .order("display_order");

  if (error) {
    console.error(`[resource.service] Không thể tải tài liệu: ${error.message}`);
    throw new Error("Không thể tải tài liệu");
  }

  return (data ?? []) as LearningResource[];
}
