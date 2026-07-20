import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { Container } from "@/components/common/Container";
import { CourseEmptyState } from "@/components/courses/CourseEmptyState";
import { CourseFilters } from "@/components/courses/CourseFilters";
import { CourseGrid } from "@/components/courses/CourseGrid";
import { getActivePrograms, getPublishedCourses } from "@/services/course.service";
import type { CourseSort } from "@/types/course";

export const metadata: Metadata = { title: "Các khóa học", description: "Khám phá các khóa học tiếng Trung và chương trình phát triển năng lực tại Vũ Thịnh.", alternates: { canonical: "/courses" }, openGraph: { title: "Các khóa học | Vũ Thịnh", description: "Chọn khóa học phù hợp với mục tiêu học tập của bạn và gia đình.", url: "/courses", type: "website" } };
const sorts: CourseSort[] = ["default", "newest", "price-asc", "price-desc"];
export default async function CoursesPage({ searchParams }: { searchParams: Promise<{ program?: string; sort?: string }> }) {
  const params = await searchParams; const sort = sorts.includes(params.sort as CourseSort) ? params.sort as CourseSort : "default";
  const [programs, courses] = await Promise.all([getActivePrograms(), getPublishedCourses({ program: params.program, sort })]);
  return <main><section className="bg-slate-50 py-12 sm:py-16 lg:py-20"><Container><Breadcrumbs items={[{ label: "Trang chủ", href: "/" }, { label: "Khóa học" }]} /><div className="mt-7 max-w-3xl"><p className="text-sm font-bold uppercase tracking-[0.14em] text-brand-blue">Học tập có định hướng</p><h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">Các khóa học</h1><p className="mt-5 text-lg leading-8 text-slate-600">Thông tin rõ ràng về cấp độ, thời lượng, hình thức và học phí để gia đình dễ dàng trao đổi trước khi lựa chọn.</p></div><div className="mt-8"><CourseFilters programs={programs} activeProgram={params.program} activeSort={sort} /></div><p className="mt-6 text-sm text-slate-600" role="status">Tìm thấy {courses.length} khóa học</p><div className="mt-5">{courses.length ? <CourseGrid courses={courses} /> : <CourseEmptyState />}</div></Container></section></main>;
}
