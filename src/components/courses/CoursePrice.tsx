import type { Course } from "@/types/course";

const formatter = new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND", maximumFractionDigits: 0 });
export function CoursePrice({ course, large = false }: { course: Pick<Course, "price" | "originalPrice" | "priceDisplay">; large?: boolean }) {
  const current = course.price != null ? formatter.format(course.price) : course.priceDisplay || "Liên hệ";
  return <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1"><strong className={large ? "text-3xl text-brand-blue" : "text-xl text-brand-blue"}>{current}</strong>{course.price != null && course.originalPrice != null && course.originalPrice > course.price && <del className="text-sm text-slate-500">{formatter.format(course.originalPrice)}</del>}</div>;
}
