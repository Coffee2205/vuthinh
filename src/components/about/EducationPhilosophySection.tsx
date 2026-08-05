import { Container } from "@/components/common/Container";
import { educationPhilosophyContent } from "@/data/about";

export function EducationPhilosophySection() {
  return (
    <section
      className="bg-slate-950 py-16 text-white sm:py-20 lg:py-24"
      aria-labelledby="education-philosophy-heading"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-blue-300">
              {educationPhilosophyContent.eyebrow}
            </p>
            <h2
              id="education-philosophy-heading"
              className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl"
            >
              {educationPhilosophyContent.title}
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              {educationPhilosophyContent.description}
            </p>
          </div>

          <ol className="grid gap-5">
            {educationPhilosophyContent.principles.map((principle, index) => (
              <li
                key={principle.label}
                className="grid gap-4 rounded-2xl border border-slate-700 bg-slate-900 p-6 sm:grid-cols-[auto_1fr] sm:gap-6 sm:p-7"
              >
                <span
                  className="flex size-11 items-center justify-center rounded-full bg-blue-500/15 text-sm font-bold text-blue-300"
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.12em] text-blue-300">
                    {principle.label}
                  </p>
                  <h3 className="mt-2 text-xl font-bold">{principle.title}</h3>
                  <p className="mt-3 leading-7 text-slate-300">
                    {principle.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <p className="mt-8 text-sm leading-6 text-slate-400">
          {educationPhilosophyContent.note}
        </p>
      </Container>
    </section>
  );
}
