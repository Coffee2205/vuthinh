import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/common/Container";
import { ResourceCard } from "@/components/resources/ResourceCard";
import { getPublishedResources } from "@/services/resource.service";

export const metadata: Metadata = { title: "Tài liệu miễn phí | Vũ Thịnh", description: "Tài liệu học tiếng Trung và phương pháp học tập được chia sẻ bởi Vũ Thịnh.", alternates: { canonical: "/resources" } };
export const dynamic = "force-dynamic";

export default async function ResourcesPage() {
  const resources = await getPublishedResources();
  return <main><section className="bg-gradient-to-b from-white to-amber-50 py-16 sm:py-20"><Container><div className="max-w-3xl"><p className="text-sm font-bold uppercase tracking-[.14em] text-brand-green">Thư viện học tập</p><h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">Tài liệu miễn phí</h1><p className="mt-6 text-lg leading-8 text-slate-600">Tài liệu hỗ trợ học tiếng Trung, xây dựng thói quen và tìm hiểu phương pháp học phù hợp.</p></div></Container></section>
    <section className="py-14 sm:py-16" aria-labelledby="resource-list-heading"><Container><div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between"><div><h2 id="resource-list-heading" className="text-3xl font-bold text-slate-950">Danh sách tài liệu</h2><p className="mt-2 text-slate-600">Chỉ hiển thị tài liệu đã xuất bản và có quyền chia sẻ.</p></div>{resources.length > 0 && <p className="text-sm font-semibold text-slate-500">{resources.length} tài liệu</p>}</div>{resources.length ? <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{resources.map((resource) => <ResourceCard key={resource.id} resource={resource} />)}</div> : <div className="mt-8 rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-8"><h3 className="text-xl font-bold text-slate-950">Tài liệu đang được cập nhật</h3><p className="mt-3 max-w-2xl leading-7 text-slate-600">Chưa có tài liệu đã xuất bản với link hợp lệ. Bạn có thể xem Blog hoặc khám phá các khóa học hiện có.</p><div className="mt-6 flex flex-wrap gap-3"><Link href="/blog" className="button-primary">Xem Blog</Link><Link href="/courses" className="inline-flex min-h-11 items-center rounded-lg border border-brand-blue px-5 py-2 font-semibold text-brand-blue">Xem khóa học</Link></div></div>}</Container></section></main>;
}
