import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/common/Container";
import { heroContent } from "@/data/home";

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-blue-soft py-16 sm:py-20 lg:py-24">
      <Image
        src="/images/backgrounds/vietnam-china-trade-street-hero.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-[62%_center] lg:object-center"
        aria-hidden="true"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#241B2B]/95 via-[#3D3242]/82 to-[#3D3242]/20" aria-hidden="true" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#241B2B]/45 via-transparent to-black/10" aria-hidden="true" />

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
          <div className="max-w-3xl">
            <p className="inline-flex min-h-9 items-center rounded-full border border-white/25 bg-white/10 px-4 text-sm font-semibold text-brand-yellow shadow-sm backdrop-blur-sm">
              {heroContent.eyebrow}
            </p>
            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl lg:leading-[1.12]">
              {heroContent.title.prefix}{" "}
              <span className="text-brand-yellow">{heroContent.title.emphasis}</span>,{" "}
              {heroContent.title.suffix}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80 sm:text-xl sm:leading-9">
              {heroContent.description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href={heroContent.primaryAction.href} className="button-primary px-7">
                {heroContent.primaryAction.label}
                <span aria-hidden="true" className="ml-2">→</span>
              </Link>
              <Link
                href={heroContent.secondaryAction.href}
                className="inline-flex min-h-11 items-center justify-center rounded-lg border border-brand-blue bg-white px-7 py-2 text-sm font-semibold text-brand-blue transition-colors hover:bg-blue-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
              >
                {heroContent.secondaryAction.label}
              </Link>
            </div>
            <p className="mt-5 text-sm leading-6 text-white/65">
              Chọn chương trình phù hợp với độ tuổi, mục tiêu và nhịp học của bạn.
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-xl" aria-label="Các lĩnh vực giáo dục trọng tâm">
            <div className="absolute inset-5 -rotate-3 rounded-[2rem] bg-brand-blue/10" aria-hidden="true" />
            <div className="relative rounded-[2rem] border border-white/80 bg-white/90 p-5 shadow-[0_24px_70px_-35px_rgba(23,105,170,0.5)] backdrop-blur sm:p-7">
              <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                <div>
                  <p className="text-sm font-semibold text-slate-500">Hệ sinh thái giáo dục</p>
                  <p className="mt-1 text-xl font-bold text-slate-950">Trí tuệ · Ngôn ngữ · Kỹ năng sống</p>
                </div>
                <div className="grid size-14 shrink-0 place-items-center rounded-2xl bg-brand-blue text-2xl font-bold text-white" aria-hidden="true">
                  学
                </div>
              </div>

              <div className="mt-5 grid gap-4">
                {heroContent.focusAreas.map((area) => (
                  <article
                    key={area.title}
                    className={`rounded-2xl border p-5 ${
                      area.tone === "blue"
                        ? "border-blue-100 bg-blue-50"
                        : "border-emerald-100 bg-emerald-50"
                    }`}
                  >
                    <p className={`text-xs font-bold uppercase tracking-[0.14em] ${area.tone === "blue" ? "text-brand-blue" : "text-brand-green"}`}>
                      {area.label}
                    </p>
                    <h2 className="mt-2 text-xl font-bold text-slate-950">{area.title}</h2>
                    <p className="mt-1 text-sm leading-6 text-slate-600">{area.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
