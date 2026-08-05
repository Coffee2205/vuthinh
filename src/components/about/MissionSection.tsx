import { Container } from "@/components/common/Container";
import { missionContent } from "@/data/about";

export function MissionSection() {
  return (
    <section
      className="bg-blue-50 py-16 sm:py-20 lg:py-24"
      aria-labelledby="mission-heading"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-brand-blue">
              {missionContent.eyebrow}
            </p>
            <h2
              id="mission-heading"
              className="mt-4 text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl"
            >
              {missionContent.title}
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              {missionContent.description}
            </p>
          </div>

          <ol className="grid gap-5 sm:grid-cols-2">
            {missionContent.responsibilities.map((responsibility, index) => (
              <li
                key={responsibility.title}
                className="rounded-2xl border border-blue-100 bg-white p-6 sm:p-7"
              >
                <span
                  className="text-sm font-bold text-brand-blue"
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-xl font-bold text-slate-950">
                  {responsibility.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  {responsibility.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
        <p className="mt-8 text-sm leading-6 text-slate-500">
          {missionContent.note}
        </p>
      </Container>
    </section>
  );
}
