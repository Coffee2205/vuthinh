import Link from "next/link";
import { Container } from "@/components/common/Container";
import { aboutCtaContent } from "@/data/about";

export function AboutCtaSection() {
  return (
    <section
      className="bg-white py-16 sm:py-20 lg:py-24"
      aria-labelledby="about-cta-heading"
    >
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-blue-50 px-6 py-12 text-center sm:px-10 sm:py-16">
          <div
            className="absolute -right-16 -top-20 size-56 rounded-full bg-brand-blue/10"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-24 -left-16 size-64 rounded-full bg-brand-yellow/25"
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-brand-blue">
              {aboutCtaContent.eyebrow}
            </p>
            <h2
              id="about-cta-heading"
              className="mt-4 text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl"
            >
              {aboutCtaContent.title}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              {aboutCtaContent.description}
            </p>
            <Link
              href={aboutCtaContent.action.href}
              className="button-primary mt-8 px-7"
            >
              {aboutCtaContent.action.label}
            </Link>
            <p className="mt-5 text-sm leading-6 text-slate-500">
              {aboutCtaContent.note}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
