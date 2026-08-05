import { z } from "zod";
const name = z
  .string()
  .trim()
  .min(2, "Họ tên cần ít nhất 2 ký tự")
  .max(150, "Họ tên tối đa 150 ký tự");
const phone = z
  .string()
  .trim()
  .min(8, "Số điện thoại quá ngắn")
  .max(30, "Số điện thoại quá dài")
  .regex(/^\+?[0-9][0-9 .()-]{6,28}[0-9]$/, "Số điện thoại không hợp lệ");
const email = z
  .string()
  .trim()
  .max(254, "Email quá dài")
  .refine((v) => !v || z.email().safeParse(v).success, "Email không hợp lệ")
  .transform((v) => v || null);
const optional = (max: number) =>
  z
    .string()
    .trim()
    .max(max, `Tối đa ${max} ký tự`)
    .transform((v) => v || null);
const privacy = z.literal(true, "Bạn cần đồng ý với chính sách bảo mật");
export const contactMessageSchema = z.object({
  full_name: name,
  phone,
  email,
  subject: z.string().trim().min(3, "Chủ đề cần ít nhất 3 ký tự").max(200),
  message: z.string().trim().min(10, "Nội dung cần ít nhất 10 ký tự").max(5000),
  privacy_accepted: privacy,
});
const registrationBase = {
  course_id: z.string().uuid("Khóa học không hợp lệ"),
  full_name: name,
  phone,
  email,
  current_level: optional(500),
  learning_goal: z
    .string()
    .trim()
    .min(5, "Mục tiêu cần ít nhất 5 ký tự")
    .max(3000),
  note: optional(3000),
  privacy_accepted: privacy,
};
export const trialRegistrationSchema = z.object({
  ...registrationBase,
  learner_type: z.enum(["self", "child", "other"], "Vui lòng chọn người học"),
});
export const courseRegistrationSchema = z.object(registrationBase);
export const jobApplicationSchema = z.object({
  job_post_id: z.string().uuid("Vị trí không hợp lệ"),
  full_name: name,
  phone,
  email: z.string().trim().email("Email không hợp lệ").max(254),
  cover_letter: optional(5000),
  privacy_accepted: privacy,
});
