import Link from "next/link";
import { Container } from "@/components/common/Container";
import { programsContent } from "@/data/home";

export function ProgramsSection() {
  return (
    <section className="bg-slate-950 py-16 text-white sm:py-20 lg:py-24" aria-labelledby="programs-heading">
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-blue-300">
              {programsContent.eyebrow}
            </p>
            <h2 id="programs-heading" className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              {programsContent.title}
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              {programsContent.description}
            </p>
          </div>
          <Link
            href={programsContent.action.href}
            className="inline-flex min-h-11 shrink-0 items-center justify-center self-start rounded-lg border border-white/30 px-5 py-2 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white hover:text-slate-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white lg:self-auto"
          >
            {programsContent.action.label}
            <span className="ml-2" aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {programsContent.groups.map((group) => (
            <article
              key={group.key}
              className={
                group.featured
                  ? "relative overflow-hidden rounded-3xl border border-blue-300/30 bg-brand-blue p-6 shadow-[0_24px_70px_-40px_rgba(96,165,250,0.8)] sm:p-8 lg:row-span-2"
                  : "rounded-3xl border border-white/10 bg-white/[0.06] p-6 sm:p-8"
              }
            >
              {group.featured && (
                <div className="absolute -right-16 -top-16 size-52 rounded-full bg-white/10" aria-hidden="true" />
              )}
              <div className="relative flex items-start justify-between gap-5">
                <div>
                  <p className={`text-xs font-bold uppercase tracking-[0.14em] ${group.featured ? "text-blue-100" : "text-emerald-300"}`}>
                    {group.label}
                  </p>
                  <h3 className="mt-3 text-2xl font-bold sm:text-3xl">{group.title}</h3>
                </div>
                <span
                  className={`grid size-14 shrink-0 place-items-center rounded-2xl text-2xl font-bold ${group.featured ? "bg-white text-brand-blue" : "bg-white/10 text-white"}`}
                  aria-hidden="true"
                >
                  {group.symbol}
                </span>
              </div>
              <p className={`relative mt-5 max-w-xl leading-7 ${group.featured ? "text-blue-50" : "text-slate-300"}`}>
                {group.description}
              </p>
              <ul className="relative mt-7 flex flex-wrap gap-2" aria-label={`Các hướng học ${group.title}`}>
                {group.topics.map((topic) => (
                  <li
                    key={topic}
                    className={`rounded-full border px-3 py-1.5 text-sm font-medium ${
                      group.featured
                        ? "border-white/25 bg-white/10 text-white"
                        : "border-white/10 bg-white/[0.06] text-slate-200"
                    }`}
                  >
                    {topic}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
