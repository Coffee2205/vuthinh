import Link from "next/link";
export function CourseEmptyState() {
  return (
    <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-14 text-center">
      <h2 className="text-2xl font-bold text-slate-950">
        Chưa có khóa học phù hợp
      </h2>
      <p className="mx-auto mt-3 max-w-xl leading-7 text-slate-600">
        Hãy chọn chương trình khác hoặc xem lại toàn bộ danh sách khóa học đang
        được công bố.
      </p>
      <Link href="/courses" className="button-primary mt-6">
        Xem tất cả khóa học
      </Link>
    </div>
  );
}
