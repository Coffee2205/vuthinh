"use server";
import { redirect } from "next/navigation";
import type { ZodType } from "zod";
import {
  contactMessageSchema,
  courseRegistrationSchema,
  jobApplicationSchema,
  trialRegistrationSchema,
} from "@/lib/validations/support.schema";
import {
  createContactMessage,
  createCourseRegistration,
  createJobApplication,
  createTrialRegistration,
  getJobBySlug,
} from "@/services/support.service";
import type { PublicFormState } from "@/types/support";
function raw(formData: FormData, keys: string[]) {
  return Object.fromEntries(
    keys.map((k) => [
      k,
      k === "privacy_accepted"
        ? formData.get(k) === "on"
        : String(formData.get(k) ?? ""),
    ]),
  );
}
async function submit(
  schema: ZodType,
  tableAction: (v: Record<string, unknown>) => Promise<void>,
  keys: string[],
  successUrl: string,
  _state: PublicFormState,
  formData: FormData,
): Promise<PublicFormState> {
  const values = raw(formData, keys);
  const parsed = schema.safeParse(values);
  if (!parsed.success) {
    const fieldErrors: Record<string, string[]> = {};
    for (const issue of parsed.error.issues) {
      const key = String(issue.path[0] ?? "form");
      (fieldErrors[key] ??= []).push(issue.message);
    }
    return {
      status: "validation_error",
      message: "Vui lòng kiểm tra lại thông tin.",
      fieldErrors,
      values: Object.fromEntries(
        Object.entries(values).map(([k, v]) => [k, String(v)]),
      ),
    };
  }
  try {
    await tableAction(parsed.data as Record<string, unknown>);
  } catch {
    return {
      status: "database_error",
      message: "Chưa thể ghi nhận thông tin. Vui lòng thử lại sau.",
      values: Object.fromEntries(
        Object.entries(values).map(([k, v]) => [k, String(v)]),
      ),
    };
  }
  redirect(successUrl);
}
export const submitContact = submit.bind(
  null,
  contactMessageSchema,
  createContactMessage,
  ["full_name", "phone", "email", "subject", "message", "privacy_accepted"],
  "/contact?submitted=1",
);
export const submitTrial = submit.bind(
  null,
  trialRegistrationSchema,
  createTrialRegistration,
  [
    "course_id",
    "learner_type",
    "full_name",
    "phone",
    "email",
    "current_level",
    "learning_goal",
    "note",
    "privacy_accepted",
  ],
  "/trial-registration?submitted=1",
);
export const submitHomeTrial = submit.bind(
  null,
  trialRegistrationSchema,
  createTrialRegistration,
  [
    "course_id",
    "learner_type",
    "full_name",
    "phone",
    "email",
    "current_level",
    "learning_goal",
    "note",
    "privacy_accepted",
  ],
  "/?trial-submitted=1#trial-registration",
);
export const submitCourse = submit.bind(
  null,
  courseRegistrationSchema,
  createCourseRegistration,
  [
    "course_id",
    "full_name",
    "phone",
    "email",
    "current_level",
    "learning_goal",
    "note",
    "privacy_accepted",
  ],
  "/trial-registration?submitted=course",
);
export async function submitJob(
  slug: string,
  state: PublicFormState,
  formData: FormData,
) {
  const job = await getJobBySlug(slug);
  if (!job)
    return {
      status: "database_error",
      message: "Vị trí không còn nhận hồ sơ.",
    } as PublicFormState;
  formData.set("job_post_id", job.id);
  return submit(
    jobApplicationSchema,
    createJobApplication,
    [
      "job_post_id",
      "full_name",
      "phone",
      "email",
      "cover_letter",
      "privacy_accepted",
    ],
    `/careers/${slug}?submitted=1`,
    state,
    formData,
  );
}
