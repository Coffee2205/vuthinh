"use client";
export default function BlogError({ reset }: { reset: () => void }) {
  return (
    <main className="mx-auto max-w-3xl px-4 py-24 text-center">
      <h1 className="text-3xl font-bold text-slate-950">Chưa thể tải Blog</h1>
      <p className="mt-4 text-slate-600">
        Dữ liệu đang tạm thời gián đoạn. Vui lòng thử lại sau.
      </p>
      <button type="button" onClick={reset} className="button-primary mt-6">
        Thử lại
      </button>
    </main>
  );
}
