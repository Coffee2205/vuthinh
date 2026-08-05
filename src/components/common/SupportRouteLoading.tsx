export function SupportRouteLoading() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-20" aria-busy="true">
      <span className="sr-only">Đang tải nội dung</span>
      <div className="h-12 max-w-xl animate-pulse rounded bg-slate-200" />
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        <div className="h-64 animate-pulse rounded-2xl bg-slate-100" />
        <div className="h-64 animate-pulse rounded-2xl bg-slate-100" />
      </div>
    </main>
  );
}
