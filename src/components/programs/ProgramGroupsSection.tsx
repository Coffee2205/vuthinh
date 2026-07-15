import { Container } from "@/components/common/Container";
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

        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3">
          {programGroupsContent.groups.map((group, index) => (
            <li
              key={group.title}
              className={`rounded-2xl border p-6 sm:p-7 ${
                group.area === "Tiếng Trung"
                  ? "border-blue-200 bg-blue-50"
                  : "border-slate-200 bg-white"
              }`}
            >
              <div className="flex items-center justify-between gap-4">
                <span className="text-sm font-bold uppercase tracking-[0.12em] text-brand-blue">
                  {group.area}
                </span>
                <span className="text-sm font-bold text-slate-400" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h2 className="mt-5 text-xl font-bold text-slate-950">{group.title}</h2>
              <p className="mt-3 leading-7 text-slate-600">{group.description}</p>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-sm leading-6 text-slate-500">{programGroupsContent.note}</p>
      </Container>
    </section>
  );
}
