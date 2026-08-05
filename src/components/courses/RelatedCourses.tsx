import { Container } from "@/components/common/Container";
import { CourseGrid } from "@/components/courses/CourseGrid";
import type { Course } from "@/types/course";
export function RelatedCourses({ courses }: { courses: Course[] }) {
  if (!courses.length) return null;
  return (
    <section
      className="bg-slate-50 py-14 sm:py-18"
      aria-labelledby="related-courses"
    >
      <Container>
        <h2 id="related-courses" className="text-3xl font-bold text-slate-950">
          Khóa học liên quan
        </h2>
        <div className="mt-7">
          <CourseGrid courses={courses} />
        </div>
      </Container>
    </section>
  );
}
