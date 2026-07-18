"use server";
import { redirect } from "next/navigation";
import { createSupabaseAuthServerClient } from "@/lib/supabase/auth-server";
import { adminLoginSchema } from "@/validation/admin";

export type LoginState = { message?: string; fieldErrors?: Record<string, string[]> };
export async function loginAction(_: LoginState, formData: FormData): Promise<LoginState> {
  const parsed = adminLoginSchema.safeParse({ email: formData.get("email"), password: formData.get("password") });
  if (!parsed.success) return { message: "Vui lòng kiểm tra thông tin đăng nhập.", fieldErrors: parsed.error.flatten().fieldErrors };
  const supabase = await createSupabaseAuthServerClient();
  const { error } = await supabase.auth.signInWithPassword(parsed.data);
  if (error) return { message: "Email hoặc mật khẩu không đúng." };
  const { data: { user } } = await supabase.auth.getUser();
  const { data: profile } = user ? await supabase.from("user_profiles").select("*").eq("id", user.id).maybeSingle() : { data: null };
  const row = (profile ?? {}) as Record<string, unknown>;
  const active = row.is_active !== false && !["inactive", "disabled", "blocked"].includes(String(row.status ?? "active"));
  if (!user || String(row.role ?? row.user_role ?? "") !== "admin" || !active) {
    await supabase.auth.signOut();
    return { message: "Tài khoản không có quyền quản trị hoặc đã bị vô hiệu hóa." };
  }
  redirect("/admin");
}
