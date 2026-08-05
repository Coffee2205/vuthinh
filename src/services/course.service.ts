import { createSupabaseServerClient } from "@/lib/supabase/server";
import { getPublicMediaUrl } from "@/lib/supabase/storage";
import type {
  Course,
  CourseFilters,
  CourseSort,
  OrderedContent,
  ProgramCategory,
} from "@/types/course";

type Row = Record<string, unknown>;

function relation(value: unknown): Row {
  if (Array.isArray(value)) return (value[0] ?? {}) as Row;
  return (value ?? {}) as Row;
}

function orderedRows(
  value: unknown,
  kind: "content" | "roadmap" | "curriculum",
): OrderedContent[] {
  if (!Array.isArray(value)) return [];
  return value
    .map((item) => {
      const row = item as Row;
      return {
        id: String(row.id),
        title: row.title ? String(row.title) : undefined,
        content:
          kind === "content" && row.content ? String(row.content) : undefined,
        description: row.description ? String(row.description) : null,
        objective: row.objective ? String(row.objective) : null,
        sessionCount:
          row.session_count == null ? null : Number(row.session_count),
        materialType: row.material_type ? String(row.material_type) : null,
        note: row.note ? String(row.note) : null,
        displayOrder: Number(row.display_order ?? 0),
      };
    })
    .sort((a, b) => a.displayOrder - b.displayOrder);
}

function mapCourse(row: Row): Course {
  const category = relation(row.course_categories);
  const program = relation(category.program_categories);
  return {
    id: String(row.id),
    title: String(row.title),
    slug: String(row.slug),
    shortDescription: String(row.short_description),
    description: String(row.description),
    thumbnailUrl: getPublicMediaUrl(
      row.thumbnail_url ? String(row.thumbnail_url) : null,
    ),
    category: {
      id: String(category.id),
      name: String(category.name),
      slug: String(category.slug),
      program: {
        id: String(program.id),
        name: String(program.name),
        slug: String(program.slug),
      },
    },
    levelLabel: String(row.level_label),
    levelFrom: row.level_from ? String(row.level_from) : null,
    levelTo: row.level_to ? String(row.level_to) : null,
    sessionCount: Number(row.session_count),
    sessionDurationMinutes:
      row.session_duration_minutes == null
        ? null
        : Number(row.session_duration_minutes),
    durationText: row.duration_text ? String(row.duration_text) : null,
    classSizeText: row.class_size_text ? String(row.class_size_text) : null,
    studyFormat: row.study_format as Course["studyFormat"],
    originalPrice:
      row.original_price == null ? null : Number(row.original_price),
    price: row.price == null ? null : Number(row.price),
    priceDisplay: row.price_display ? String(row.price_display) : null,
    currency: String(row.currency ?? "VND"),
    discountPercent:
      row.discount_percent == null ? null : Number(row.discount_percent),
    textbookSummary: row.textbook_summary ? String(row.textbook_summary) : null,
    expectedOutcomesSummary: row.expected_outcomes_summary
      ? String(row.expected_outcomes_summary)
      : null,
    isFeatured: Boolean(row.is_featured),
    publishedAt: row.published_at ? String(row.published_at) : null,
    displayOrder: Number(row.display_order ?? 0),
    audiences: orderedRows(row.course_audiences, "content"),
    roadmapStages: orderedRows(row.course_roadmap_stages, "roadmap"),
    curriculumItems: orderedRows(row.course_curriculum_items, "curriculum"),
    outcomes: orderedRows(row.course_outcomes, "content"),
  };
}

const courseSelect = `
  *,
  course_categories!inner(id,name,slug,program_categories!inner(id,name,slug,is_active)),
  course_audiences(id,content,display_order),
  course_roadmap_stages(id,title,description,objective,session_count,display_order),
  course_curriculum_items(id,title,description,material_type,note,display_order),
  course_outcomes(id,content,display_order)
`;

function sortCourses(courses: Course[], sort: CourseSort = "default") {
  return [...courses].sort((a, b) => {
    if (sort === "newest")
      return Date.parse(b.publishedAt ?? "") - Date.parse(a.publishedAt ?? "");
    if (sort === "price-asc")
      return (
        (a.price ?? Number.MAX_SAFE_INTEGER) -
        (b.price ?? Number.MAX_SAFE_INTEGER)
      );
    if (sort === "price-desc") return (b.price ?? -1) - (a.price ?? -1);
    return (
      Number(b.isFeatured) - Number(a.isFeatured) ||
      a.displayOrder - b.displayOrder
    );
  });
}

export async function getActivePrograms(): Promise<ProgramCategory[]> {
  const supabase = createSupabaseServerClient();
  const { data, error } = await supabase
    .from("program_categories")
    .select("*,course_categories(courses(id,status))")
    .eq("is_active", true)
    .order("display_order");
  if (error) throw new Error(`Không thể tải chương trình: ${error.message}`);
  return (data as Row[]).map((row) => {
    const categories = Array.isArray(row.course_categories)
      ? (row.course_categories as Row[])
      : [];
    const courseCount = categories.reduce(
      (sum, item) =>
        sum +
        (Array.isArray(item.courses)
          ? (item.courses as Row[]).filter(
              (course) => course.status === "published",
            ).length
          : 0),
      0,
    );
    return {
      id: String(row.id),
      name: String(row.name),
      slug: String(row.slug),
      shortDescription: String(row.short_description),
      description: String(row.description),
      imageUrl: getPublicMediaUrl(row.image_url ? String(row.image_url) : null),
      targetAudience: row.target_audience ? String(row.target_audience) : null,
      displayOrder: Number(row.display_order ?? 0),
      courseCount,
      isCore:
        String(row.slug).startsWith("tieng-trung") ||
        String(row.slug) === "luyen-thi-hsk",
    };
  });
}

export async function getPublishedCourses(
  filters: CourseFilters = {},
): Promise<Course[]> {
  const supabase = createSupabaseServerClient();
  const { data, error } = await supabase
    .from("courses")
    .select(courseSelect)
    .eq("status", "published")
    .order("display_order");
  if (error) throw new Error(`Không thể tải khóa học: ${error.message}`);
  const courses = (data as Row[])
    .map(mapCourse)
    .filter(
      (course) =>
        !filters.program || course.category.program.slug === filters.program,
    );
  return sortCourses(courses, filters.sort);
}

export async function getCourseBySlug(slug: string): Promise<Course | null> {
  const supabase = createSupabaseServerClient();
  const { data, error } = await supabase
    .from("courses")
    .select(courseSelect)
    .eq("slug", slug)
    .eq("status", "published")
    .maybeSingle();
  if (error) throw new Error(`Không thể tải khóa học: ${error.message}`);
  return data ? mapCourse(data as Row) : null;
}

export async function getRelatedCourses(
  courseId: string,
  categoryId: string,
): Promise<Course[]> {
  const courses = await getPublishedCourses();
  return courses
    .filter(
      (course) => course.id !== courseId && course.category.id === categoryId,
    )
    .slice(0, 3);
}
