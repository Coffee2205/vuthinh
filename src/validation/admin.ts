import { z } from "zod";

export const adminLoginSchema = z.object({
  email: z.email("Email không hợp lệ").max(254),
  password: z.string().min(8, "Mật khẩu cần ít nhất 8 ký tự").max(200),
});
export const adminListSchema = z.object({
  page: z.coerce.number().int().min(1).catch(1),
  q: z.string().trim().max(100).catch(""),
  status: z.string().trim().max(30).catch(""),
});
export const contentStatusSchema = z.enum(["draft", "published", "archived"]);
export const registrationStatusSchema = z.enum([
  "new",
  "contacted",
  "qualified",
  "enrolled",
  "cancelled",
  "archived",
]);
export const trialStatusSchema = z.enum([
  "new",
  "contacted",
  "scheduled",
  "attended",
  "converted",
  "cancelled",
  "no_show",
]);
export const consultationStatusSchema = z.enum([
  "new",
  "contacted",
  "confirmed",
  "completed",
  "cancelled",
]);
