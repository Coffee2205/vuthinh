import Link from "next/link";
import { Container } from "@/components/common/Container";
import { expertContent } from "@/data/home";

export function ExpertSection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24" aria-labelledby="expert-heading">
      <Container>
        <div className="grid overflow-hidden rounded-[2rem] border border-slate-200 bg-brand-blue-soft lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative grid min-h-80 place-items-center overflow-hidden bg-brand-blue p-8 sm:min-h-96">
            <div className="absolute -left-20 -top-20 size-64 rounded-full bg-white/10" aria-hidden="true" />
            <div className="absolute -bottom-24 -right-20 size-72 rounded-full bg-brand-yellow/20" aria-hidden="true" />
            <div className="relative text-center text-white">
              <div className="mx-auto grid size-28 place-items-center rounded-full border border-white/25 bg-white/10 text-4xl font-bold" aria-hidden="true">
                VT
              </div>
              <p className="mt-6 max-w-xs text-sm font-semibold leading-6 text-blue-50">
                {expertContent.status}
              </p>
              <p className="mt-2 max-w-sm text-xs leading-5 text-blue-100">
                {expertContent.note}
              </p>
            </div>
          </div>

          <div className="p-7 sm:p-10 lg:p-12">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-brand-green">
              {expertContent.eyebrow}
            </p>
            <h2 id="expert-heading" className="mt-4 text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl">
              {expertContent.title}
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">{expertContent.description}</p>
            <ul className="mt-7 flex flex-wrap gap-2" aria-label="Các hướng đồng hành">
              {expertContent.focusAreas.map((area) => (
                <li key={area} className="rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-semibold text-slate-700">
                  {area}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href={expertContent.consultationAction.href} className="button-primary px-6">
                {expertContent.consultationAction.label}
              </Link>
              <Link href={expertContent.profileAction.href} className="inline-flex min-h-11 items-center justify-center rounded-lg border border-brand-blue bg-white px-6 py-2 text-sm font-semibold text-brand-blue hover:bg-blue-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue">
                {expertContent.profileAction.label}
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
