"use client";

import { useActionState } from "react";
import { submitConsultationRequest } from "@/app/consultation/actions";
import type { ConsultationService, Expert } from "@/types/expert";
import type { ConsultationFormState } from "@/types/consultation";

const initialState: ConsultationFormState = { status: "idle" };
function FieldError({ errors, id }: { errors?: string[]; id: string }) { return errors?.length ? <p id={id} className="text-sm font-medium text-red-700">{errors[0]}</p> : null; }
const inputClass = "min-h-11 rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-950 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-blue-100 disabled:bg-slate-100";

export function ConsultationForm({ expert, services, selectedServiceId }: { expert: Pick<Expert, "id" | "full_name">; services: ConsultationService[]; selectedServiceId?: string }) {
  const [state, formAction, isPending] = useActionState(submitConsultationRequest, initialState);
  const value = (name: string, fallback = "") => state.values?.[name] ?? fallback;
  const invalid = (name: string) => Boolean(state.fieldErrors?.[name]);
  return <form action={formAction} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
    <input type="hidden" name="expert_id" value={expert.id} />
    <div className="mb-7"><h2 className="text-2xl font-bold text-slate-950">Thông tin đăng ký</h2><p className="mt-2 text-sm leading-6 text-slate-600">Các trường có dấu * là bắt buộc. Yêu cầu lịch sẽ được xác nhận thủ công.</p></div>
    {state.message && <div role="alert" className={`mb-6 rounded-xl border p-4 text-sm ${state.status === "database_error" ? "border-red-200 bg-red-50 text-red-800" : "border-amber-200 bg-amber-50 text-amber-900"}`}>{state.message}</div>}
    <fieldset disabled={isPending} className="grid gap-5 sm:grid-cols-2">
      <label className="grid gap-2 text-sm font-semibold text-slate-700">Họ tên *<input className={inputClass} name="full_name" required minLength={2} maxLength={150} defaultValue={value("full_name")} aria-invalid={invalid("full_name")} aria-describedby={invalid("full_name") ? "full-name-error" : undefined} /><FieldError id="full-name-error" errors={state.fieldErrors?.full_name} /></label>
      <label className="grid gap-2 text-sm font-semibold text-slate-700">Số điện thoại *<input className={inputClass} type="tel" name="phone" required minLength={8} maxLength={30} defaultValue={value("phone")} aria-invalid={invalid("phone")} aria-describedby={invalid("phone") ? "phone-error" : undefined} /><FieldError id="phone-error" errors={state.fieldErrors?.phone} /></label>
      <label className="grid gap-2 text-sm font-semibold text-slate-700">Email<input className={inputClass} type="email" name="email" maxLength={254} defaultValue={value("email")} aria-invalid={invalid("email")} aria-describedby={invalid("email") ? "email-error" : undefined} /><FieldError id="email-error" errors={state.fieldErrors?.email} /></label>
      <label className="grid gap-2 text-sm font-semibold text-slate-700">Người cần tư vấn *<select className={inputClass} name="consulting_for" required defaultValue={value("consulting_for", "self")} aria-invalid={invalid("consulting_for")}><option value="self">Bản thân</option><option value="child">Con/em</option><option value="employee">Nhân viên</option><option value="other">Khác</option></select><FieldError id="consulting-for-error" errors={state.fieldErrors?.consulting_for} /></label>
      <label className="grid gap-2 text-sm font-semibold text-slate-700">Tuổi người học<input className={inputClass} type="number" name="student_age" min={3} max={100} defaultValue={value("student_age")} aria-invalid={invalid("student_age")} /><FieldError id="student-age-error" errors={state.fieldErrors?.student_age} /></label>
      <label className="grid gap-2 text-sm font-semibold text-slate-700">Trình độ hiện tại<input className={inputClass} name="current_level" maxLength={500} defaultValue={value("current_level")} /></label>
      <label className="grid gap-2 text-sm font-semibold text-slate-700 sm:col-span-2">Mục tiêu học tập *<textarea className={`${inputClass} min-h-32 resize-y`} name="learning_goal" required minLength={5} maxLength={5000} defaultValue={value("learning_goal")} aria-invalid={invalid("learning_goal")} aria-describedby={invalid("learning_goal") ? "learning-goal-error" : undefined} /><FieldError id="learning-goal-error" errors={state.fieldErrors?.learning_goal} /></label>
      <label className="grid gap-2 text-sm font-semibold text-slate-700">Thời hạn mong muốn<input className={inputClass} name="target_date_text" maxLength={300} defaultValue={value("target_date_text")} /></label>
      <label className="grid gap-2 text-sm font-semibold text-slate-700">Thời gian có thể dành ra<input className={inputClass} name="available_study_time" maxLength={500} defaultValue={value("available_study_time")} /></label>
      <label className="grid gap-2 text-sm font-semibold text-slate-700 sm:col-span-2">Khó khăn hiện tại<textarea className={`${inputClass} min-h-24 resize-y`} name="current_difficulty" maxLength={5000} defaultValue={value("current_difficulty")} /></label>
      <label className="grid gap-2 text-sm font-semibold text-slate-700 sm:col-span-2">Dịch vụ quan tâm<select className={inputClass} name="service_id" defaultValue={value("service_id", selectedServiceId ?? "")} aria-invalid={invalid("service_id")}><option value="">Chưa xác định — cần tư vấn thêm</option>{services.map((service) => <option key={service.id} value={service.id}>{service.name}</option>)}</select><FieldError id="service-error" errors={state.fieldErrors?.service_id} /></label>
      <label className="grid gap-2 text-sm font-semibold text-slate-700">Ngày mong muốn<input className={inputClass} type="date" name="preferred_date" defaultValue={value("preferred_date")} /></label>
      <label className="grid gap-2 text-sm font-semibold text-slate-700">Khung giờ mong muốn<input className={inputClass} name="preferred_time_slot" maxLength={200} defaultValue={value("preferred_time_slot")} /></label>
      <fieldset className="sm:col-span-2"><legend className="text-sm font-semibold text-slate-700">Hình thức tư vấn *</legend><div className="mt-3 flex flex-wrap gap-5"><label className="flex min-h-11 items-center gap-2"><input type="radio" name="consultation_format" value="online" defaultChecked={value("consultation_format", "online") === "online"} />Online</label><label className="flex min-h-11 items-center gap-2"><input type="radio" name="consultation_format" value="offline" defaultChecked={value("consultation_format") === "offline"} />Offline</label></div><FieldError id="format-error" errors={state.fieldErrors?.consultation_format} /></fieldset>
      <label className="grid gap-2 text-sm font-semibold text-slate-700 sm:col-span-2">Ghi chú<textarea className={`${inputClass} min-h-24 resize-y`} name="note" maxLength={5000} defaultValue={value("note")} /></label>
      <div className="sm:col-span-2"><label className="flex items-start gap-3 text-sm leading-6 text-slate-700"><input className="mt-1 size-4" type="checkbox" name="privacy_accepted" required defaultChecked={state.status !== "idle" ? value("privacy_accepted") === "true" : false} aria-invalid={invalid("privacy_accepted")} /><span>Tôi đồng ý để Vũ Thịnh sử dụng thông tin này nhằm liên hệ và xử lý yêu cầu tư vấn. *</span></label><FieldError id="privacy-error" errors={state.fieldErrors?.privacy_accepted} /></div>
      <button type="submit" className="button-primary sm:col-span-2" disabled={isPending}>{isPending ? "Đang gửi yêu cầu…" : "Gửi yêu cầu tư vấn"}</button>
    </fieldset>
  </form>;
}
