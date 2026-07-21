import { createSupabaseServerClient } from "@/lib/supabase/server";
import { getPublicMediaUrl } from "@/lib/supabase/storage";
import type { ConsultationService, Expert, ExpertFaq, ExpertQualification, ExpertSpecialization } from "@/types/expert";

function fail(context: string, message: string): never {
  console.error(`[expert.service] ${context}`);
  throw new Error(`${context}: ${message}`);
}

export async function getActiveExpertBySlug(slug: string) {
  const { data, error } = await createSupabaseServerClient().from("experts").select("*").eq("slug", slug).eq("is_active", true).maybeSingle();
  if (error) fail("Không thể tải hồ sơ chuyên gia", error.message);
  if (!data) return null;
  return { ...data, avatar_url: getPublicMediaUrl(data.avatar_url) } as Omit<Expert, "expert_qualifications" | "expert_specializations" | "consultation_services" | "expert_faqs">;
}

export async function getExpertQualifications(expertId: string) {
  const { data, error } = await createSupabaseServerClient().from("expert_qualifications").select("*").eq("expert_id", expertId).order("display_order");
  if (error) fail("Không thể tải học vấn chuyên gia", error.message);
  return (data ?? []) as ExpertQualification[];
}

export async function getExpertSpecializations(expertId: string) {
  const { data, error } = await createSupabaseServerClient().from("expert_specializations").select("*").eq("expert_id", expertId).order("display_order");
  if (error) fail("Không thể tải chuyên môn chuyên gia", error.message);
  return (data ?? []) as ExpertSpecialization[];
}

export async function getExpertServices(expertId: string) {
  const supabase = createSupabaseServerClient();
  const [{ data: services, error }, { data: benefits, error: benefitsError }] = await Promise.all([
    supabase.from("consultation_services").select("*").eq("expert_id", expertId).eq("is_active", true).order("display_order"),
    supabase.from("consultation_service_benefits").select("*").order("display_order"),
  ]);
  if (error) fail("Không thể tải dịch vụ tư vấn", error.message);
  if (benefitsError) fail("Không thể tải lợi ích dịch vụ", benefitsError.message);
  return (services ?? []).map((service) => ({ ...service, consultation_service_benefits: (benefits ?? []).filter((benefit) => benefit.service_id === service.id) })) as ConsultationService[];
}

export async function getExpertFaqs(expertId: string) {
  const { data, error } = await createSupabaseServerClient().from("expert_faqs").select("*").eq("expert_id", expertId).eq("is_active", true).order("display_order");
  if (error) fail("Không thể tải FAQ chuyên gia", error.message);
  return (data ?? []) as ExpertFaq[];
}

export async function getExpertProfileBySlug(slug: string): Promise<Expert | null> {
  const expert = await getActiveExpertBySlug(slug);
  if (!expert) return null;
  const [qualifications, specializations, services, faqs] = await Promise.all([
    getExpertQualifications(expert.id), getExpertSpecializations(expert.id), getExpertServices(expert.id), getExpertFaqs(expert.id),
  ]);
  return { ...expert, expert_qualifications: qualifications, expert_specializations: specializations, consultation_services: services, expert_faqs: faqs };
}
