import { Container } from "@/components/common/Container";
import { trustContent } from "@/data/home";

export function TrustSection() {
  return (
    <section className="section-soft-gradient py-16 sm:py-20 lg:py-24" aria-labelledby="trust-heading">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
          <div className="max-w-xl lg:sticky lg:top-8 lg:self-start">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-brand-green">
              {trustContent.eyebrow}
            </p>
            <h2 id="trust-heading" className="mt-4 text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl">
              {trustContent.title}
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              {trustContent.description}
            </p>
            <div className="mt-8 h-1 w-20 rounded-full bg-brand-yellow" aria-hidden="true" />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {trustContent.principles.map((principle) => (
              <article
                key={principle.number}
                className="group rounded-2xl border border-slate-200 bg-slate-50/70 p-6 transition-colors hover:border-blue-200 hover:bg-brand-blue-soft sm:p-7"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="text-sm font-bold tracking-wider text-brand-blue">
                    {principle.number}
                  </span>
                  <span className="size-2 rounded-full bg-brand-green transition-transform group-hover:scale-150" aria-hidden="true" />
                </div>
                <h3 className="mt-7 text-xl font-bold leading-7 text-slate-950">
                  {principle.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-slate-600">
                  {principle.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
