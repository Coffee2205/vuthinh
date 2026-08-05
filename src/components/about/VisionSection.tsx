import { Container } from "@/components/common/Container";
import { visionContent } from "@/data/about";

export function VisionSection() {
  return (
    <section
      className="bg-white py-16 sm:py-20 lg:py-24"
      aria-labelledby="vision-heading"
    >
      <Container>
        <div className="rounded-3xl bg-slate-950 px-6 py-12 text-white sm:px-10 sm:py-16 lg:px-14">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-brand-yellow">
              {visionContent.eyebrow}
            </p>
            <h2
              id="vision-heading"
              className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl"
            >
              {visionContent.title}
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              {visionContent.description}
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {visionContent.directions.map((direction) => (
              <article
                key={direction.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <p className="text-sm font-bold text-brand-yellow">
                  {direction.label}
                </p>
                <h3 className="mt-3 text-xl font-bold">{direction.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {direction.description}
                </p>
              </article>
            ))}
          </div>

          <p className="mt-8 text-sm leading-6 text-slate-400">
            {visionContent.note}
          </p>
        </div>
      </Container>
    </section>
  );
}
