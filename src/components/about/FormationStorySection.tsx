import { Container } from "@/components/common/Container";
import { formationStoryContent } from "@/data/about";

export function FormationStorySection() {
  return (
    <section
      className="bg-slate-50 py-16 sm:py-20 lg:py-24"
      aria-labelledby="formation-story-heading"
    >
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-brand-green">
              {formationStoryContent.eyebrow}
            </p>
            <h2
              id="formation-story-heading"
              className="mt-4 text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl"
            >
              {formationStoryContent.title}
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              {formationStoryContent.description}
            </p>
          </div>

          <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-7 sm:p-10">
            <div
              className="grid size-14 place-items-center rounded-2xl bg-green-100 text-xl font-bold text-brand-green"
              aria-hidden="true"
            >
              ＊
            </div>
            <h3 className="mt-6 text-xl font-bold text-slate-950">
              {formationStoryContent.status}
            </h3>
            <p className="mt-3 leading-7 text-slate-600">{formationStoryContent.note}</p>
            <ul className="mt-6 grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
              {formationStoryContent.requiredInformation.map((item) => (
                <li key={item} className="rounded-xl bg-slate-50 px-4 py-3">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
