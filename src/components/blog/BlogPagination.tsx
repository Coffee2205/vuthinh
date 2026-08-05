import Link from "next/link";

function pageHref(page: number, category?: string) {
  const params = new URLSearchParams();
  if (category) params.set("category", category);
  if (page > 1) params.set("page", String(page));
  const query = params.toString();
  return query ? `/blog?${query}` : "/blog";
}

export function BlogPagination({
  page,
  totalPages,
  category,
}: {
  page: number;
  totalPages: number;
  category?: string;
}) {
  if (totalPages <= 1) return null;

  return (
    <nav
      className="mt-10 flex items-center justify-between gap-4"
      aria-label="Phân trang bài viết"
    >
      <Link
        href={pageHref(page - 1, category)}
        aria-disabled={page <= 1}
        className={`inline-flex min-h-11 items-center rounded-lg border border-slate-300 bg-white px-4 font-semibold text-slate-700 ${page <= 1 ? "pointer-events-none opacity-50" : "hover:border-brand-blue hover:text-brand-blue"}`}
      >
        Trang trước
      </Link>
      <span className="text-center text-sm font-medium text-slate-600">
        Trang {page} / {totalPages}
      </span>
      <Link
        href={pageHref(page + 1, category)}
        aria-disabled={page >= totalPages}
        className={`inline-flex min-h-11 items-center rounded-lg border border-slate-300 bg-white px-4 font-semibold text-slate-700 ${page >= totalPages ? "pointer-events-none opacity-50" : "hover:border-brand-blue hover:text-brand-blue"}`}
      >
        Trang sau
      </Link>
    </nav>
  );
}
