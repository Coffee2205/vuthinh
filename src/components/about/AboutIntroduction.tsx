import { Container } from "@/components/common/Container";
import { aboutIntroductionContent } from "@/data/about";

export function AboutIntroduction() {
  return (
    <section
        className="overflow-hidden bg-white py-16 sm:py-20 lg:py-24"
        aria-labelledby="about-introduction-heading"
      >
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-brand-blue">
                {aboutIntroductionContent.eyebrow}
              </p>
              <h1
                id="about-introduction-heading"
                className="mt-4 text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl"
              >
                {aboutIntroductionContent.title}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                {aboutIntroductionContent.description}
              </p>
              <blockquote className="mt-8 border-l-4 border-brand-yellow pl-5 text-xl font-semibold leading-8 text-slate-900">
                {aboutIntroductionContent.statement}
              </blockquote>
            </div>

            <div className="rounded-3xl bg-blue-50 p-6 sm:p-8">
              <div className="rounded-2xl bg-brand-blue p-6 text-white sm:p-8">
                <p className="text-sm font-bold uppercase tracking-[0.12em] text-blue-100">
                  {aboutIntroductionContent.focus.label}
                </p>
                <h2 className="mt-3 text-3xl font-bold">
                  {aboutIntroductionContent.focus.title}
                </h2>
                <p className="mt-4 leading-7 text-blue-50">
                  {aboutIntroductionContent.focus.description}
                </p>
              </div>
              <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                {aboutIntroductionContent.supportingAreas.map((area) => (
                  <article key={area.title} className="rounded-2xl border border-blue-100 bg-white p-5">
                    <h2 className="font-bold text-slate-950">{area.title}</h2>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{area.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
          <p className="mt-10 rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-5 py-4 text-sm leading-6 text-slate-600">
            {aboutIntroductionContent.note}
          </p>
        </Container>
    </section>
  );
}
