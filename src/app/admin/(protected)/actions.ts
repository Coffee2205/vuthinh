"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createSupabaseAuthServerClient } from "@/lib/supabase/auth-server";
import { requireAdmin } from "@/services/admin/auth.service";
import { consultationStatusSchema, registrationStatusSchema, trialStatusSchema } from "@/validation/admin";

export async function logoutAction() { const db = await createSupabaseAuthServerClient(); await db.auth.signOut(); redirect("/admin/login"); }

export async function updateRequestStatus(formData: FormData) {
  await requireAdmin();
  const kind = String(formData.get("kind") ?? "");
  const id = String(formData.get("id") ?? "");
  const status = String(formData.get("status") ?? "");
  const note = String(formData.get("admin_note") ?? "").trim().slice(0, 2000);
  const config = kind === "course" ? { table: "course_registrations", schema: registrationStatusSchema, path: "/admin/registrations" } : kind === "trial" ? { table: "trial_registrations", schema: trialStatusSchema, path: "/admin/registrations" } : kind === "consultation" ? { table: "consultation_requests", schema: consultationStatusSchema, path: "/admin/consultations" } : null;
  if (!config || !/^[0-9a-f-]{36}$/i.test(id)) return;
  const parsed = config.schema.safeParse(status); if (!parsed.success) return;
  const db = await createSupabaseAuthServerClient();
  const payload: Record<string, string> = { status: parsed.data }; if (note) payload.admin_note = note;
  const { error } = await db.from(config.table).update(payload).eq("id", id);
  if (error) redirect(`${config.path}?error=update`);
  revalidatePath(config.path); redirect(`${config.path}?updated=1`);
}
