import "server-only";
import { redirect } from "next/navigation";
import { createSupabaseAuthServerClient } from "@/lib/supabase/auth-server";

export type CurrentAdmin = { id: string; email: string; name: string };

export async function getCurrentAdmin(): Promise<CurrentAdmin | null> {
  const supabase = await createSupabaseAuthServerClient();
  const { data: { user }, error } = await supabase.auth.getUser();
  if (error || !user) return null;
  const { data: profile, error: profileError } = await supabase.from("user_profiles").select("*").eq("id", user.id).maybeSingle();
  if (profileError || !profile) return null;
  const row = profile as Record<string, unknown>;
  const role = String(row.role ?? row.user_role ?? "");
  const active = row.is_active !== false && !["inactive", "disabled", "blocked"].includes(String(row.status ?? "active"));
  if (role !== "admin" || !active) return null;
  return { id: user.id, email: user.email ?? "", name: String(row.full_name ?? row.display_name ?? user.email ?? "Admin") };
}

export async function requireAdmin() {
  const admin = await getCurrentAdmin();
  if (!admin) redirect("/admin/login");
  return admin;
}
