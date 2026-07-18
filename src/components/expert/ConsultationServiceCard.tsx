import Link from "next/link";
import type { ConsultationService } from "@/types/expert";

const money = new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND", maximumFractionDigits: 0 });
const units: Record<string, string> = { session: "buổi", service: "dịch vụ", package: "gói" };

export function formatServicePrice(service: ConsultationService) {
  const unit = service.price_unit ? ` / ${units[service.price_unit] ?? service.price_unit}` : "";
  if (service.price != null) return `${money.format(service.price)}${unit}`;
  if (service.price_from != null && service.price_to != null) return `${money.format(service.price_from)}–${money.format(service.price_to)}${unit}`;
  if (service.price_from != null) return `Từ ${money.format(service.price_from)}${unit}`;
  return "Liên hệ";
}

export function ConsultationServiceCard({ service, compact = false }: { service: ConsultationService; compact?: boolean }) {
  const duration = service.duration_minutes_min && service.duration_minutes_max
    ? `${service.duration_minutes_min}–${service.duration_minutes_max} phút`
    : service.duration_minutes_min ? `Từ ${service.duration_minutes_min} phút` : null;
  return <article className={`flex h-full flex-col rounded-2xl border bg-white ${service.is_featured ? "border-brand-blue shadow-md" : "border-slate-200 shadow-sm"} ${compact ? "p-5" : "p-6 sm:p-7"}`}>
    <div className="flex items-start justify-between gap-3"><p className="text-xs font-bold uppercase tracking-[0.12em] text-brand-blue">Dịch vụ tư vấn</p>{service.is_featured && <span className="rounded-full bg-brand-yellow px-3 py-1 text-xs font-bold text-amber-900">Nổi bật</span>}</div>
    <h3 className="mt-3 text-xl font-bold text-slate-950">{service.name}</h3>
    {service.short_description && <p className="mt-3 leading-7 text-slate-600">{service.short_description}</p>}
    {!compact && service.description && <p className="mt-3 text-sm leading-6 text-slate-500">{service.description}</p>}
    <div className="mt-5 flex flex-wrap gap-2 text-sm">{duration && <span className="rounded-full bg-blue-50 px-3 py-1 font-semibold text-brand-blue">{duration}</span>}<span className="rounded-full bg-emerald-50 px-3 py-1 font-bold text-emerald-800">{formatServicePrice(service)}</span></div>
    {!compact && service.consultation_service_benefits.length > 0 && <ul className="mt-5 grid gap-2 text-sm leading-6 text-slate-700">{service.consultation_service_benefits.map((benefit) => <li key={benefit.id} className="flex gap-2"><span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-brand-green" aria-hidden="true" />{benefit.content}</li>)}</ul>}
    <Link href={`/consultation?service=${service.slug}`} className="button-primary mt-auto pt-3">Đăng ký dịch vụ<span className="sr-only"> {service.name}</span></Link>
  </article>;
}
