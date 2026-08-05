import { Container } from "@/components/common/Container";
import { learningJourneyContent } from "@/data/home";

export function LearningJourneySection() {
  return (
    <section
      className="overflow-hidden bg-brand-yellow/35 py-16 sm:py-20 lg:py-24"
      aria-labelledby="journey-heading"
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-brand-blue">
            {learningJourneyContent.eyebrow}
          </p>
          <h2
            id="journey-heading"
            className="mt-4 text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl"
          >
            {learningJourneyContent.title}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            {learningJourneyContent.description}
          </p>
        </div>

        <ol className="relative mt-12 grid gap-5 before:absolute before:left-[12.5%] before:right-[12.5%] before:top-7 before:hidden before:h-px before:bg-brand-blue/25 before:content-[''] md:grid-cols-2 lg:grid-cols-4 lg:before:block">
          {learningJourneyContent.steps.map((step) => (
            <li
              key={step.number}
              className="relative rounded-2xl border border-amber-200/80 bg-white p-6 shadow-sm sm:p-7"
            >
              <span className="relative z-10 grid size-14 place-items-center rounded-2xl bg-brand-blue text-sm font-bold tracking-wider text-white shadow-[0_10px_30px_-14px_rgba(23,105,170,0.8)]">
                {step.number}
              </span>
              <h3 className="mt-6 text-xl font-bold leading-7 text-slate-950">
                {step.title}
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                {step.description}
              </p>
            </li>
          ))}
        </ol>

        <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-6 text-slate-500">
          Việc tư vấn và xác nhận chương trình được thực hiện thủ công; Giai
          đoạn 1 chưa có lộ trình tự động.
        </p>
      </Container>
    </section>
  );
}
