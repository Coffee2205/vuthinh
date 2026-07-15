import { Container } from "@/components/common/Container";
import { coreValuesContent } from "@/data/about";

export function CoreValuesSection() {
  return (
    <section
      className="bg-white py-16 sm:py-20 lg:py-24"
      aria-labelledby="core-values-heading"
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-brand-blue">
            {coreValuesContent.eyebrow}
          </p>
          <h2
            id="core-values-heading"
            className="mt-4 text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl"
          >
            {coreValuesContent.title}
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            {coreValuesContent.description}
          </p>
        </div>

        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4">
          {coreValuesContent.values.map((value, index) => (
            <li
              key={value.title}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-7"
            >
              <span
                className="inline-flex size-10 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-brand-blue"
                aria-hidden="true"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 text-xl font-bold text-slate-950">{value.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{value.description}</p>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-center text-sm leading-6 text-slate-500">
          {coreValuesContent.note}
        </p>
      </Container>
    </section>
  );
}
