import { Container } from "@/components/common/Container";
import { parentTestimonialsContent } from "@/data/home";

export function ParentTestimonialsSection() {
  return (
    <section
      className="section-soft-gradient py-16 sm:py-20 lg:py-24"
      aria-labelledby="parent-testimonials-heading"
    >
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-brand-blue">
              {parentTestimonialsContent.eyebrow}
            </p>
            <h2
              id="parent-testimonials-heading"
              className="mt-4 text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl"
            >
              {parentTestimonialsContent.title}
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              {parentTestimonialsContent.description}
            </p>
          </div>

          <div className="rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-8 sm:p-10">
            <div
              className="grid size-14 place-items-center rounded-2xl bg-blue-100 text-2xl text-brand-blue"
              aria-hidden="true"
            >
              “ ”
            </div>
            <h3 className="mt-6 text-xl font-bold text-slate-950">
              {parentTestimonialsContent.status}
            </h3>
            <p className="mt-3 leading-7 text-slate-600">
              {parentTestimonialsContent.note}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
