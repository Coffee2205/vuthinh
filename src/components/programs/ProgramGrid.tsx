import { ProgramCard } from "@/components/programs/ProgramCard";
import type { ProgramCategory } from "@/types/course";

export function ProgramGrid({ programs }: { programs: ProgramCategory[] }) {
  return <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{programs.map((program) => <li key={program.id}><ProgramCard program={program} /></li>)}</ul>;
}
