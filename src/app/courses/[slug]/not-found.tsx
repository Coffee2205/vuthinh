import Link from "next/link";
export default function CourseNotFound() {
  return (
    <main className="grid min-h-[60vh] place-items-center bg-slate-50 px-4 py-16 text-center">
      <div>
        <p className="text-sm font-bold uppercase tracking-wider text-brand-blue">
          404 · Khóa học
        </p>
        <h1 className="mt-3 text-3xl font-bold text-slate-950 sm:text-4xl">
          Không tìm thấy khóa học
        </h1>
        <p className="mt-4 text-slate-600">
          Khóa học có thể chưa được công bố hoặc đường dẫn không còn hiệu lực.
        </p>
        <Link href="/courses" className="button-primary mt-7">
          Xem các khóa học
        </Link>
      </div>
    </main>
  );
}
