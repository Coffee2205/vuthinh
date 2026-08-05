"use server";

import { redirect } from "next/navigation";
import { consultationRequestSchema } from "@/lib/validations/consultation.schema";
import { createConsultationRequest } from "@/services/consultation.service";
import type { ConsultationFormState } from "@/types/consultation";

function stringValue(formData: FormData, key: string) {
  return String(formData.get(key) ?? "");
}

export async function submitConsultationRequest(
  _previous: ConsultationFormState,
  formData: FormData,
): Promise<ConsultationFormState> {
  const raw = {
    expert_id: stringValue(formData, "expert_id"),
    service_id: stringValue(formData, "service_id") || null,
    full_name: stringValue(formData, "full_name"),
    phone: stringValue(formData, "phone"),
    email: stringValue(formData, "email"),
    consulting_for: stringValue(formData, "consulting_for"),
    student_age: stringValue(formData, "student_age"),
    current_level: stringValue(formData, "current_level"),
    learning_goal: stringValue(formData, "learning_goal"),
    target_date_text: stringValue(formData, "target_date_text"),
    available_study_time: stringValue(formData, "available_study_time"),
    current_difficulty: stringValue(formData, "current_difficulty"),
    preferred_date: stringValue(formData, "preferred_date"),
    preferred_time_slot: stringValue(formData, "preferred_time_slot"),
    consultation_format: stringValue(formData, "consultation_format"),
    note: stringValue(formData, "note"),
    privacy_accepted: formData.get("privacy_accepted") === "on",
  };
  const values = {
    ...Object.fromEntries(
      Object.entries(raw).filter(([, value]) => typeof value === "string"),
    ),
    privacy_accepted: raw.privacy_accepted ? "true" : "false",
  } as Record<string, string>;
  const parsed = consultationRequestSchema.safeParse(raw);
  if (!parsed.success) {
    const fieldErrors: Record<string, string[]> = {};
    for (const issue of parsed.error.issues) {
      const field = String(issue.path[0] ?? "form");
      (fieldErrors[field] ??= []).push(issue.message);
    }
    return {
      status: "validation_error",
      message: "Vui lòng kiểm tra lại các trường được đánh dấu.",
      fieldErrors,
      values,
    };
  }
  try {
    await createConsultationRequest(parsed.data);
  } catch (error) {
    const message =
      error instanceof Error && error.message === "SERVICE_NOT_AVAILABLE"
        ? "Dịch vụ đã chọn không còn khả dụng. Vui lòng chọn lại."
        : "Chưa thể ghi nhận yêu cầu lúc này. Vui lòng thử lại sau.";
    return { status: "database_error", message, values };
  }
  redirect("/consultation/success");
}
