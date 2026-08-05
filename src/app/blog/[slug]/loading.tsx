export default function BlogPostLoading() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-20" aria-busy="true">
      <span className="sr-only">Đang tải bài viết</span>
      <div className="mx-auto h-12 w-4/5 animate-pulse rounded bg-slate-200" />
      <div className="mt-10 h-96 animate-pulse rounded-3xl bg-slate-100" />
    </main>
  );
}
