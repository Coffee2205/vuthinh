import Link from "next/link";
import type { ResourceCategory } from "@/types/resource";
export function ResourceCategoryFilter({
  categories,
  activeSlug,
}: {
  categories: ResourceCategory[];
  activeSlug?: string;
}) {
  return (
    <nav
      aria-label="Lọc tài liệu theo danh mục"
      className="flex flex-wrap gap-2"
    >
      <Link
        href="/resources"
        aria-current={!activeSlug ? "page" : undefined}
        className={`inline-flex min-h-11 items-center rounded-full border px-4 py-2 text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue ${!activeSlug ? "border-brand-blue bg-brand-blue text-white" : "border-slate-300 bg-white text-slate-700"}`}
      >
        Tất cả
      </Link>
      {categories.map((category) => (
        <Link
          key={category.id}
          href={`/resources?category=${category.slug}`}
          aria-current={activeSlug === category.slug ? "page" : undefined}
          className={`inline-flex min-h-11 items-center rounded-full border px-4 py-2 text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue ${activeSlug === category.slug ? "border-brand-blue bg-brand-blue text-white" : "border-slate-300 bg-white text-slate-700"}`}
        >
          {category.name}
        </Link>
      ))}
    </nav>
  );
}
