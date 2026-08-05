import Link from "next/link";
import { Container } from "@/components/common/Container";
import { studentOutcomesContent } from "@/data/home";

export function StudentOutcomesSection() {
  return (
    <section
      className="bg-slate-50 py-16 sm:py-20 lg:py-24"
      aria-labelledby="outcomes-heading"
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-brand-green">
            {studentOutcomesContent.eyebrow}
          </p>
          <h2
            id="outcomes-heading"
            className="mt-4 text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl"
          >
            {studentOutcomesContent.title}
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            {studentOutcomesContent.description}
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-4xl rounded-3xl border border-dashed border-slate-300 bg-white p-8 text-center sm:p-12">
          <div
            className="mx-auto grid size-16 place-items-center rounded-2xl bg-brand-yellow text-2xl"
            aria-hidden="true"
          >
            ✓
          </div>
          <h3 className="mt-6 text-xl font-bold text-slate-950">
            {studentOutcomesContent.status}
          </h3>
          <p className="mx-auto mt-3 max-w-2xl leading-7 text-slate-600">
            {studentOutcomesContent.note}
          </p>
          <Link
            href={studentOutcomesContent.action.href}
            className="mt-7 inline-flex min-h-11 items-center justify-center rounded-lg border border-brand-blue px-6 py-2 text-sm font-semibold text-brand-blue hover:bg-blue-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
          >
            {studentOutcomesContent.action.label}
          </Link>
        </div>
      </Container>
    </section>
  );
}
