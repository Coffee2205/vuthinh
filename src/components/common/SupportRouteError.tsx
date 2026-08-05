"use client";
export function SupportRouteError({ reset }: { reset: () => void }) {
  return (
    <main className="mx-auto max-w-3xl px-4 py-24 text-center">
      <h1 className="text-3xl font-bold">Chưa thể tải trang</h1>
      <p className="mt-4 text-slate-600">
        Dữ liệu đang tạm thời gián đoạn. Vui lòng thử lại sau.
      </p>
      <button onClick={reset} className="button-primary mt-6">
        Thử lại
      </button>
    </main>
  );
}
