import { createSupabaseServerClient } from "@/lib/supabase/server";
import { getPublicMediaUrl } from "@/lib/supabase/storage";
import type {
  LearningResource,
  ResourceCategory,
  ResourceFilters,
  ResourceRelatedCourse,
} from "@/types/resource";

type Row = Record<string, unknown>;
function fail(context: string, error: { message: string }): never {
  console.error(`[resource.service] ${context}: ${error.message}`);
  throw new Error(context);
}
function asString(value: unknown) {
  return value == null ? null : String(value);
}
function mapResource(
  row: Row,
  category: ResourceCategory | null = null,
): LearningResource {
  return {
    id: String(row.id),
    category_id: asString(row.category_id),
    title: String(row.title),
    slug: String(row.slug),
    description: asString(row.description),
    thumbnail_url: getPublicMediaUrl(asString(row.thumbnail_url)),
    thumbnail_alt: asString(row.thumbnail_alt),
    resource_type: String(row.resource_type ?? "Tài liệu"),
    file_type: asString(row.file_type),
    author_name: asString(row.author_name),
    access_type:
      row.access_type === "registration_required"
        ? "registration_required"
        : "public",
    file_url: asString(row.file_url),
    external_url: asString(row.external_url),
    status: row.status as LearningResource["status"],
    is_featured: Boolean(row.is_featured),
    published_at: asString(row.published_at),
    display_order: Number(row.display_order ?? 0),
    created_at: String(row.created_at ?? ""),
    updated_at: String(row.updated_at ?? ""),
    category,
    related_courses: [],
  };
}

export async function getActiveResourceCategories(): Promise<
  ResourceCategory[]
> {
  const { data, error } = await createSupabaseServerClient()
    .from("resource_categories")
    .select("*")
    .eq("is_active", true)
    .order("display_order");
  if (error) fail("Không thể tải danh mục tài liệu", error);
  return (data ?? []) as ResourceCategory[];
}

export async function getPublishedResources(
  filters: ResourceFilters = {},
): Promise<LearningResource[]> {
  const supabase = createSupabaseServerClient();
  let categoryId: string | undefined;
  if (filters.categorySlug) {
    const { data, error } = await supabase
      .from("resource_categories")
      .select("id")
      .eq("slug", filters.categorySlug)
      .eq("is_active", true)
      .maybeSingle();
    if (error) fail("Không thể tải danh mục tài liệu", error);
    if (!data) return [];
    categoryId = data.id;
  }
  let query = supabase
    .from("resources")
    .select("*")
    .eq("status", "published")
    .or(`published_at.is.null,published_at.lte.${new Date().toISOString()}`)
    .order("is_featured", { ascending: false })
    .order("published_at", { ascending: false, nullsFirst: false })
    .order("display_order");
  if (categoryId) query = query.eq("category_id", categoryId);
  const { data, error } = await query;
  if (error) fail("Không thể tải tài liệu", error);
  const categories = await getActiveResourceCategories();
  return (data ?? []).map((row) =>
    mapResource(
      row as Row,
      categories.find((item) => item.id === row.category_id) ?? null,
    ),
  );
}

export async function getResourceBySlug(
  slug: string,
): Promise<LearningResource | null> {
  const supabase = createSupabaseServerClient();
  const { data, error } = await supabase
    .from("resources")
    .select("*")
    .eq("slug", slug)
    .eq("status", "published")
    .or(`published_at.is.null,published_at.lte.${new Date().toISOString()}`)
    .maybeSingle();
  if (error) fail("Không thể tải tài liệu", error);
  if (!data) return null;
  const [categories, relationResult] = await Promise.all([
    getActiveResourceCategories(),
    supabase
      .from("resource_courses")
      .select(
        "courses(id,title,slug,short_description,level_label,session_count,thumbnail_url)",
      )
      .eq("resource_id", data.id)
      .order("display_order"),
  ]);
  if (relationResult.error)
    fail("Không thể tải khóa học liên quan", relationResult.error);
  const resource = mapResource(
    data as Row,
    categories.find((item) => item.id === data.category_id) ?? null,
  );
  resource.related_courses = (relationResult.data ?? [])
    .map((item) => {
      const value = (item as Row).courses;
      const course = (
        Array.isArray(value) ? value[0] : value
      ) as ResourceRelatedCourse | null;
      return course
        ? { ...course, thumbnail_url: getPublicMediaUrl(course.thumbnail_url) }
        : null;
    })
    .filter((item): item is ResourceRelatedCourse => Boolean(item));
  return resource;
}

export async function createResourceDownloadEvent(resourceId: string) {
  const { error } = await createSupabaseServerClient()
    .from("resource_download_events")
    .insert({ resource_id: resourceId });
  if (error) {
    console.error("[resource.service] Download event insert failed", {
      code: error.code,
    });
    throw new Error("DOWNLOAD_EVENT_FAILED");
  }
}

export function getResourceTarget(resource: LearningResource) {
  const value = resource.file_url || resource.external_url;
  if (!value) return null;
  try {
    const url = new URL(value);
    return url.protocol === "https:" || url.protocol === "http:" ? value : null;
  } catch {
    return null;
  }
}
