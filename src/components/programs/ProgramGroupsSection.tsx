import { Container } from "@/components/common/Container";
import { ProgramGroupFilter } from "@/components/programs/ProgramGroupFilter";
import type { ProgramCategory } from "@/types/course";

export function ProgramGroupsSection({ programs }: { programs: ProgramCategory[] }) {
  return (
    <section
      className="bg-slate-50 py-16 sm:py-20 lg:py-24"
      aria-labelledby="program-groups-heading"
    >
      <Container>
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-brand-blue">
            Chương trình đào tạo
          </p>
          <h1
            id="program-groups-heading"
            className="mt-4 text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl"
          >
            Khám phá các hướng học tại Vũ Thịnh
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Tiếng Trung là trọng tâm, bên cạnh các chương trình bổ trợ về kỹ năng,
            cảm xúc và giá trị sống dành cho gia đình.
          </p>
        </div>

        <ProgramGroupFilter programs={programs} />
      </Container>
    </section>
  );
}
