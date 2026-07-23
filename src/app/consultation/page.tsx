import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { Container } from "@/components/common/Container";
import { ConsultationForm } from "@/components/consultation/ConsultationForm";
import { ConsultationServiceCard } from "@/components/expert/ConsultationServiceCard";
import { createPageMetadata } from "@/lib/seo";
import { getExpertProfileBySlug } from "@/services/expert.service";

export const metadata: Metadata = createPageMetadata({ title: "Đăng ký tư vấn với giảng viên", description: "Đăng ký đánh giá năng lực và xây dựng lộ trình học tập cùng giảng viên Huỳnh Anh Ngữ (Vũ Thịnh).", path: "/consultation" });

export default async function ConsultationPage({ searchParams }: { searchParams: Promise<{ service?: string }> }) {
  const [{ service: serviceSlug }, expert] = await Promise.all([searchParams, getExpertProfileBySlug("vu-thinh")]);
  if (!expert) notFound();
  const selectedService = expert.consultation_services.find((service) => service.slug === serviceSlug);
  return <main className="bg-slate-50 py-10 sm:py-14 lg:py-18"><Container><Breadcrumbs items={[{ label: "Trang chủ", href: "/" }, { label: "Giảng viên", href: "/expert" }, { label: "Đăng ký tư vấn" }]} /><div className="mt-7 max-w-3xl"><p className="text-sm font-bold uppercase tracking-[0.14em] text-brand-blue">Tư vấn lộ trình học tập</p><h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">Đăng ký tư vấn với giảng viên</h1><p className="mt-5 text-lg leading-8 text-slate-600">Chia sẻ nhu cầu để cùng giảng viên {expert.full_name} làm rõ điểm xuất phát, mục tiêu và hướng học phù hợp.</p></div>
    {expert.consultation_services.length > 0 && <section className="mt-10" aria-labelledby="available-services"><h2 id="available-services" className="text-2xl font-bold text-slate-950">Dịch vụ đang mở</h2><ul className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{expert.consultation_services.map((service) => <li key={service.id}><ConsultationServiceCard service={service} compact /></li>)}</ul></section>}
    <div className="mt-10 grid gap-8 lg:grid-cols-[.7fr_1.3fr] lg:items-start"><aside className="rounded-2xl bg-brand-blue p-6 text-white"><p className="text-sm font-bold uppercase tracking-wider text-blue-100">Giảng viên tư vấn</p><h2 className="mt-3 text-2xl font-bold">{expert.full_name}</h2><p className="mt-2 text-blue-100">{expert.professional_title}</p>{selectedService ? <div className="mt-6 rounded-xl bg-white/10 p-4"><p className="text-sm text-blue-100">Dịch vụ đã chọn</p><p className="mt-1 font-bold">{selectedService.name}</p></div> : serviceSlug ? <p className="mt-6 rounded-xl bg-amber-200 p-4 text-sm text-amber-950">Dịch vụ trong đường dẫn không tồn tại hoặc đã ngừng hoạt động. Vui lòng chọn lại.</p> : null}</aside><ConsultationForm expert={expert} services={expert.consultation_services} selectedServiceId={selectedService?.id} /></div></Container></main>;
}
