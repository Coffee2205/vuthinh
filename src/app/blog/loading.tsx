export default function BlogLoading() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-20" aria-busy="true">
      <span className="sr-only">Đang tải blog</span>
      <div className="h-12 max-w-2xl animate-pulse rounded bg-slate-200" />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="h-96 animate-pulse rounded-2xl bg-slate-100"
          />
        ))}
      </div>
    </main>
  );
}
