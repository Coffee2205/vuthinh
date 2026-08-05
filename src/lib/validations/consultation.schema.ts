import { z } from "zod";

const optionalText = (max: number) =>
  z
    .string()
    .trim()
    .max(max, `Tối đa ${max} ký tự`)
    .transform((value) => value || null);

export const consultationRequestSchema = z.object({
  expert_id: z.string().uuid("Giảng viên không hợp lệ"),
  service_id: z.string().uuid("Dịch vụ không hợp lệ").nullable(),
  full_name: z
    .string()
    .trim()
    .min(2, "Họ tên cần ít nhất 2 ký tự")
    .max(150, "Họ tên tối đa 150 ký tự"),
  phone: z
    .string()
    .trim()
    .min(8, "Số điện thoại cần ít nhất 8 ký tự")
    .max(30, "Số điện thoại tối đa 30 ký tự")
    .regex(/^\+?[0-9][0-9 .()-]{6,28}[0-9]$/, "Số điện thoại không hợp lệ"),
  email: z
    .string()
    .trim()
    .max(254, "Email quá dài")
    .refine(
      (value) => !value || z.email().safeParse(value).success,
      "Email không hợp lệ",
    )
    .transform((value) => value || null),
  consulting_for: z.enum(
    ["self", "child", "employee", "other"],
    "Vui lòng chọn người cần tư vấn",
  ),
  student_age: z.preprocess(
    (value) => (value === "" || value == null ? null : Number(value)),
    z
      .number()
      .int()
      .min(3, "Tuổi tối thiểu là 3")
      .max(100, "Tuổi tối đa là 100")
      .nullable(),
  ),
  current_level: optionalText(500),
  learning_goal: z
    .string()
    .trim()
    .min(5, "Mục tiêu cần ít nhất 5 ký tự")
    .max(5000, "Mục tiêu tối đa 5000 ký tự"),
  target_date_text: optionalText(300),
  available_study_time: optionalText(500),
  current_difficulty: optionalText(5000),
  preferred_date: z
    .string()
    .trim()
    .refine(
      (value) => !value || /^\d{4}-\d{2}-\d{2}$/.test(value),
      "Ngày không hợp lệ",
    )
    .transform((value) => value || null),
  preferred_time_slot: optionalText(200),
  consultation_format: z.enum(
    ["online", "offline"],
    "Vui lòng chọn hình thức tư vấn",
  ),
  note: optionalText(5000),
  privacy_accepted: z.literal(true, "Bạn cần đồng ý với chính sách bảo mật"),
});

export type ConsultationSchemaInput = z.infer<typeof consultationRequestSchema>;
