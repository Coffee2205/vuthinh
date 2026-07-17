import { Container } from "@/components/common/Container";
import { expertProfileContent } from "@/data/expert";

export function ExpertProfileSection() {
  return (
    <section
      className="bg-gradient-to-b from-brand-blue-soft to-white py-16 sm:py-20 lg:py-24"
      aria-labelledby="expert-profile-heading"
    >
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-brand-blue">
              {expertProfileContent.eyebrow}
            </p>
            <h1
              id="expert-profile-heading"
              className="mt-4 text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl"
            >
              {expertProfileContent.title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              {expertProfileContent.description}
            </p>
            <p className="mt-6 rounded-2xl border border-blue-100 bg-white/80 px-5 py-4 text-sm leading-6 text-slate-700">
              {expertProfileContent.supportingNote}
            </p>
          </div>

          <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-7 shadow-sm sm:p-10">
            <div
              className="grid size-16 place-items-center rounded-2xl bg-blue-100 text-2xl font-bold text-brand-blue"
              aria-hidden="true"
            >
              VT
            </div>
            <h2 className="mt-6 text-2xl font-bold text-slate-950">
              {expertProfileContent.status}
            </h2>
            <p className="mt-3 leading-7 text-slate-600">{expertProfileContent.note}</p>
            <h3 className="mt-7 text-sm font-bold uppercase tracking-[0.12em] text-slate-800">
              Thông tin cần xác nhận
            </h3>
            <ul className="mt-4 grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
              {expertProfileContent.requiredInformation.map((item) => (
                <li key={item} className="rounded-xl bg-slate-50 px-4 py-3 leading-6">
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
