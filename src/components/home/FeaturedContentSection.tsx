import Link from "next/link";
import { Container } from "@/components/common/Container";
import { featuredContent } from "@/data/home";

export function FeaturedContentSection() {
  return (
    <section
      className="bg-slate-50 py-16 sm:py-20 lg:py-24"
      aria-labelledby="featured-content-heading"
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-brand-green">
            {featuredContent.eyebrow}
          </p>
          <h2
            id="featured-content-heading"
            className="mt-4 text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl"
          >
            {featuredContent.title}
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            {featuredContent.description}
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-3xl gap-6">
          {featuredContent.channels.map((channel) => (
            <article
              key={channel.title}
              className="flex min-h-72 flex-col rounded-3xl border border-dashed border-slate-300 bg-white p-7 sm:p-9"
            >
              <div
                className="grid size-14 place-items-center rounded-2xl bg-brand-yellow text-xl font-bold text-slate-900"
                aria-hidden="true"
              >
                {channel.symbol}
              </div>
              <h3 className="mt-6 text-2xl font-bold text-slate-950">
                {channel.title}
              </h3>
              <p className="mt-3 flex-1 leading-7 text-slate-600">
                {channel.status}
              </p>
              <Link
                href={channel.action.href}
                className="mt-7 inline-flex min-h-11 w-fit items-center justify-center rounded-lg border border-brand-blue px-5 py-2 text-sm font-semibold text-brand-blue hover:bg-blue-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
              >
                {channel.action.label}
              </Link>
            </article>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-6 text-slate-500">
          {featuredContent.note}
        </p>
      </Container>
    </section>
  );
}
