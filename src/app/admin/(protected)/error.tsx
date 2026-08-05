"use client";
export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <section className="rounded-xl border border-red-200 bg-red-50 p-6">
      <h1 className="text-xl font-bold text-red-900">Không thể tải dữ liệu</h1>
      <p className="mt-2 text-red-800">
        Phiên có thể đã hết hạn hoặc database từ chối truy cập.
      </p>
      <button
        onClick={reset}
        className="mt-4 min-h-11 rounded-lg bg-red-800 px-4 font-semibold text-white"
      >
        Thử lại
      </button>
    </section>
  );
}
