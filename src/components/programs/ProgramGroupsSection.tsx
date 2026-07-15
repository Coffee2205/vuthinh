import { Container } from "@/components/common/Container";
import { ProgramGroupFilter } from "@/components/programs/ProgramGroupFilter";
import { programGroupsContent } from "@/data/programs";

export function ProgramGroupsSection() {
  return (
    <section
      className="bg-slate-50 py-16 sm:py-20 lg:py-24"
      aria-labelledby="program-groups-heading"
    >
      <Container>
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-brand-blue">
            {programGroupsContent.eyebrow}
          </p>
          <h1
            id="program-groups-heading"
            className="mt-4 text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl"
          >
            {programGroupsContent.title}
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            {programGroupsContent.description}
          </p>
        </div>

        <ProgramGroupFilter />

        <p className="mt-8 text-sm leading-6 text-slate-500">{programGroupsContent.note}</p>
      </Container>
    </section>
  );
}
