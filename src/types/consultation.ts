export type ConsultingFor = "self" | "child" | "employee" | "other";
export type ConsultationFormat = "online" | "offline";

export interface ConsultationRequest {
  id: string;
  expert_id: string;
  service_id: string | null;
  full_name: string;
  phone: string;
  email: string | null;
  consulting_for: ConsultingFor;
  student_age: number | null;
  current_level: string | null;
  learning_goal: string;
  target_date_text: string | null;
  available_study_time: string | null;
  current_difficulty: string | null;
  preferred_date: string | null;
  preferred_time_slot: string | null;
  consultation_format: ConsultationFormat;
  note: string | null;
  privacy_accepted: boolean;
  status: string;
  admin_note: string | null;
  created_at: string;
  updated_at: string;
}

export type ConsultationRequestInput = Pick<
  ConsultationRequest,
  | "expert_id"
  | "service_id"
  | "full_name"
  | "phone"
  | "email"
  | "consulting_for"
  | "student_age"
  | "current_level"
  | "learning_goal"
  | "target_date_text"
  | "available_study_time"
  | "current_difficulty"
  | "preferred_date"
  | "preferred_time_slot"
  | "consultation_format"
  | "note"
  | "privacy_accepted"
>;

export interface ConsultationFormState {
  status: "idle" | "validation_error" | "database_error";
  message?: string;
  fieldErrors?: Record<string, string[]>;
  values?: Record<string, string>;
}
