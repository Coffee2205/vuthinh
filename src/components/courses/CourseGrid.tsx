import { CourseCard } from "@/components/courses/CourseCard";
import type { Course } from "@/types/course";
export function CourseGrid({ courses }: { courses: Course[] }) {
  return (
    <ul className="grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {courses.map((course) => (
        <li key={course.id}>
          <CourseCard course={course} />
        </li>
      ))}
    </ul>
  );
}
