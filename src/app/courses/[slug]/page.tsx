import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CourseDetailHero } from "@/components/courses/CourseDetailHero";
import { CourseDetails } from "@/components/courses/CourseDetails";
import { RelatedCourses } from "@/components/courses/RelatedCourses";
import { getCourseBySlug, getRelatedCourses } from "@/services/course.service";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const course = await getCourseBySlug(slug); if (!course) return { title: "Không tìm thấy khóa học | Vũ Thịnh" }; const url = `/courses/${course.slug}`; return { title: `${course.title} | Vũ Thịnh`, description: course.shortDescription, alternates: { canonical: url }, openGraph: { title: course.title, description: course.shortDescription, url, type: "website", ...(course.thumbnailUrl ? { images: [{ url: course.thumbnailUrl, alt: `Ảnh khóa học ${course.title}` }] } : {}) } }; }
export default async function CourseDetailPage({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const course = await getCourseBySlug(slug); if (!course) notFound(); const related = await getRelatedCourses(course.id, course.category.id); return <main><CourseDetailHero course={course} /><CourseDetails course={course} /><RelatedCourses courses={related} /></main>; }
