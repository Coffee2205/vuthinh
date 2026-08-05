import { createSupabaseServerClient } from "@/lib/supabase/server";
import type { ConsultationRequestInput } from "@/types/consultation";

export async function createConsultationRequest(
  input: ConsultationRequestInput,
) {
  const supabase = createSupabaseServerClient();
  const { data: expert, error: expertError } = await supabase
    .from("experts")
    .select("id")
    .eq("id", input.expert_id)
    .eq("is_active", true)
    .maybeSingle();
  if (expertError || !expert) throw new Error("EXPERT_NOT_AVAILABLE");

  if (input.service_id) {
    const { data: service, error: serviceError } = await supabase
      .from("consultation_services")
      .select("id")
      .eq("id", input.service_id)
      .eq("expert_id", input.expert_id)
      .eq("is_active", true)
      .maybeSingle();
    if (serviceError || !service) throw new Error("SERVICE_NOT_AVAILABLE");
  }

  const { error } = await supabase.from("consultation_requests").insert(input);
  if (error) {
    console.error("[consultation.service] Insert failed", { code: error.code });
    throw new Error("CONSULTATION_INSERT_FAILED");
  }
}
