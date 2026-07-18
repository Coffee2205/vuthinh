import "server-only";
import { createSupabaseAuthServerClient } from "@/lib/supabase/auth-server";
import { requireAdmin } from "@/services/admin/auth.service";

export const PAGE_SIZE = 15;
type Table = "courses"|"blog_posts"|"resources"|"success_stories"|"faqs"|"course_registrations"|"trial_registrations"|"consultation_requests";

export async function getAdminRows(table: Table, options: { page: number; q?: string; status?: string; searchColumn: string }) {
  await requireAdmin();
  const db = await createSupabaseAuthServerClient();
  const from = (options.page - 1) * PAGE_SIZE;
  let query = db.from(table).select("*", { count: "exact" }).order("created_at", { ascending: false }).range(from, from + PAGE_SIZE - 1);
  if (options.q) query = query.ilike(options.searchColumn, `%${options.q.replace(/[%_,()]/g, "")}%`);
  if (options.status) query = query.eq("status", options.status);
  const { data, error, count } = await query;
  if (error) throw new Error(`ADMIN_READ_${table}`);
  return { rows: (data ?? []) as Record<string, unknown>[], count: count ?? 0, pages: Math.max(1, Math.ceil((count ?? 0) / PAGE_SIZE)) };
}

export async function getDashboardData() {
  await requireAdmin();
  const db = await createSupabaseAuthServerClient();
  const count = async (table: Table, status?: string) => {
    let query = db.from(table).select("id", { count: "exact", head: true });
    if (status) query = query.eq("status", status);
    const result = await query;
    if (result.error) throw new Error(`ADMIN_COUNT_${table}`);
    return result.count ?? 0;
  };
  const [courses, publishedCourses, posts, draftPosts, resources, stories, registrations, trials, consultations] = await Promise.all([
    count("courses"), count("courses", "published"), count("blog_posts"), count("blog_posts", "draft"), count("resources"), count("success_stories"), count("course_registrations", "new"), count("trial_registrations", "new"), count("consultation_requests", "new"),
  ]);
  return { courses, publishedCourses, posts, draftPosts, resources, stories, newRegistrations: registrations + trials, consultations };
}
