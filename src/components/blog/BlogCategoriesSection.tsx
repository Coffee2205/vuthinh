import { Container } from "@/components/common/Container";
import { blogCategoriesContent } from "@/data/blog";

export function BlogCategoriesSection() {
  return (
    <section
      className="bg-gradient-to-b from-white to-brand-blue-soft py-16 sm:py-20 lg:py-24"
      aria-labelledby="blog-categories-heading"
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-brand-green">
            {blogCategoriesContent.eyebrow}
          </p>
          <h1
            id="blog-categories-heading"
            className="mt-4 text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl"
          >
            {blogCategoriesContent.title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            {blogCategoriesContent.description}
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-4xl rounded-3xl border border-dashed border-slate-300 bg-white p-7 shadow-sm sm:p-10">
          <div
            className="grid size-14 place-items-center rounded-2xl bg-green-100 text-xl font-bold text-brand-green"
            aria-hidden="true"
          >
            文
          </div>
          <h2 className="mt-6 text-2xl font-bold text-slate-950">
            {blogCategoriesContent.status}
          </h2>
          <p className="mt-3 leading-7 text-slate-600">{blogCategoriesContent.note}</p>
          <h3 className="mt-7 text-sm font-bold uppercase tracking-[0.12em] text-slate-800">
            Thông tin cần xác nhận
          </h3>
          <ul className="mt-4 grid gap-3 text-sm text-slate-700 sm:grid-cols-2 lg:grid-cols-3">
            {blogCategoriesContent.requiredInformation.map((item) => (
              <li key={item} className="rounded-xl bg-slate-50 px-4 py-3 leading-6">
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 rounded-2xl bg-brand-yellow px-5 py-4 text-sm leading-6 text-slate-800">
            {blogCategoriesContent.directionNote}
          </p>
        </div>
      </Container>
    </section>
  );
}
