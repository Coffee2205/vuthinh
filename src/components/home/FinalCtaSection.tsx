import Link from "next/link";
import { Container } from "@/components/common/Container";
import { finalCtaContent } from "@/data/home";

export function FinalCtaSection() {
  return (
    <section
      className="bg-slate-950 py-16 text-white sm:py-20"
      aria-labelledby="final-cta-heading"
    >
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-brand-blue px-6 py-12 text-center sm:px-10 sm:py-16">
          <div
            className="absolute -right-16 -top-20 size-56 rounded-full bg-white/10"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-24 -left-16 size-64 rounded-full bg-brand-yellow/20"
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-blue-100">
              {finalCtaContent.eyebrow}
            </p>
            <h2
              id="final-cta-heading"
              className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl"
            >
              {finalCtaContent.title}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-blue-50">
              {finalCtaContent.description}
            </p>
            <Link
              href={finalCtaContent.action.href}
              className="mt-8 inline-flex min-h-11 items-center justify-center rounded-xl bg-white px-7 py-3 font-bold text-brand-blue hover:bg-blue-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              {finalCtaContent.action.label}
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
