import Image from "next/image";
import Link from "next/link";
import { CoursePrice } from "@/components/courses/CoursePrice";
import type { Course } from "@/types/course";
import { shouldBypassImageOptimization } from "@/lib/supabase/storage";

const formats = {
  online: "Online",
  offline: "Offline",
  hybrid: "Kết hợp",
} as const;
export function CourseCard({ course }: { course: Course }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-blue-100 via-white to-emerald-100">
        {course.thumbnailUrl ? (
          <Image
            src={course.thumbnailUrl}
            alt={`Ảnh khóa học ${course.title}`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover"
            unoptimized={shouldBypassImageOptimization(course.thumbnailUrl)}
          />
        ) : (
          <div className="grid h-full place-items-center p-6 text-center">
            <span className="text-sm font-bold uppercase tracking-[0.16em] text-brand-blue">
              Vũ Thịnh · Khóa học
            </span>
          </div>
        )}
        {course.discountPercent != null && course.discountPercent > 0 && (
          <span className="absolute right-3 top-3 rounded-full bg-amber-300 px-3 py-1 text-xs font-extrabold text-slate-900">
            -{course.discountPercent}%
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="text-xs font-bold uppercase tracking-[0.12em] text-brand-blue">
          {course.category.program.name}
        </p>
        <h2 className="mt-3 text-xl font-bold leading-snug text-slate-950">
          <Link
            href={`/courses/${course.slug}`}
            className="rounded-sm hover:text-brand-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
          >
            {course.title}
          </Link>
        </h2>
        <dl className="mt-4 grid grid-cols-2 gap-3 text-sm">
          <div>
            <dt className="text-slate-500">Cấp độ</dt>
            <dd className="mt-1 font-semibold text-slate-800">
              {course.levelLabel}
            </dd>
          </div>
          <div>
            <dt className="text-slate-500">Số buổi</dt>
            <dd className="mt-1 font-semibold text-slate-800">
              {course.sessionCount} buổi
            </dd>
          </div>
          <div>
            <dt className="text-slate-500">Mỗi buổi</dt>
            <dd className="mt-1 font-semibold text-slate-800">
              {course.sessionDurationMinutes
                ? `${course.sessionDurationMinutes} phút`
                : "Liên hệ"}
            </dd>
          </div>
          <div>
            <dt className="text-slate-500">Hình thức</dt>
            <dd className="mt-1 font-semibold text-slate-800">
              {formats[course.studyFormat]}
            </dd>
          </div>
        </dl>
        <p className="mt-5 line-clamp-3 leading-7 text-slate-600">
          {course.shortDescription}
        </p>
        <div className="mt-auto pt-5">
          <CoursePrice course={course} />
          <div className="mt-5 grid gap-2 sm:grid-cols-2">
            <Link href={`/courses/${course.slug}`} className="button-primary">
              Xem chi tiết
            </Link>
            <Link
              href={`/trial-registration?course=${course.slug}&type=course`}
              className="inline-flex min-h-11 items-center justify-center rounded-lg border border-brand-blue px-4 py-2 text-center text-sm font-semibold text-brand-blue hover:bg-blue-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
            >
              Đăng ký học
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
