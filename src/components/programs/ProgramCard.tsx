import Link from "next/link";
import type { ProgramCategory } from "@/types/course";

export function ProgramCard({ program }: { program: ProgramCategory }) {
  return <article className={`flex h-full flex-col rounded-2xl border p-6 sm:p-7 ${program.isCore ? "border-blue-200 bg-blue-50" : "border-slate-200 bg-white"}`}>
    <div className="flex items-center justify-between gap-4"><span className={`grid size-11 place-items-center rounded-xl text-lg font-bold ${program.isCore ? "bg-brand-blue text-white" : "bg-emerald-100 text-brand-green"}`} aria-hidden="true">{program.displayOrder.toString().padStart(2, "0")}</span>{program.isCore && <span className="rounded-full bg-white px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-blue">Trọng tâm</span>}</div>
    <h2 className="mt-5 text-xl font-bold text-slate-950">{program.name}</h2>
    <p className="mt-3 leading-7 text-slate-600">{program.shortDescription}</p>
    {program.targetAudience && <p className="mt-4 text-sm text-slate-600"><strong className="text-slate-800">Phù hợp:</strong> {program.targetAudience}</p>}
    <p className="mt-2 text-sm font-semibold text-brand-blue">{program.courseCount > 0 ? `${program.courseCount} khóa học hiện có` : "Chưa có khóa học được công bố"}</p>
    <Link href={`/courses?program=${program.slug}`} className="mt-auto pt-6 text-sm font-bold text-brand-blue underline decoration-blue-200 underline-offset-4 hover:text-brand-blue-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue">Xem khóa học<span className="sr-only"> thuộc {program.name}</span></Link>
  </article>;
}
