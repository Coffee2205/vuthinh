import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/common/JsonLd";
import { CourseDetailHero } from "@/components/courses/CourseDetailHero";
import { CourseDetails } from "@/components/courses/CourseDetails";
import { RelatedCourses } from "@/components/courses/RelatedCourses";
import { getCourseBySlug, getRelatedCourses } from "@/services/course.service";
import { absoluteUrl, createPageMetadata, siteConfig } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const course = await getCourseBySlug(slug);
  if (!course)
    return {
      title: "Không tìm thấy khóa học",
      robots: { index: false, follow: false },
    };
  return createPageMetadata({
    title: course.title,
    description: course.shortDescription,
    path: `/courses/${course.slug}`,
    image: course.thumbnailUrl
      ? { url: course.thumbnailUrl, alt: `Ảnh khóa học ${course.title}` }
      : null,
  });
}

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = await getCourseBySlug(slug);
  if (!course) notFound();
  const related = await getRelatedCourses(course.id, course.category.id);
  const courseMode =
    course.studyFormat === "hybrid"
      ? "Blended"
      : course.studyFormat === "online"
        ? "Online"
        : "Onsite";
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    "@id": `${absoluteUrl(`/courses/${course.slug}`)}#course`,
    name: course.title,
    description: course.shortDescription,
    url: absoluteUrl(`/courses/${course.slug}`),
    inLanguage: "vi",
    provider: {
      "@type": "EducationalOrganization",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      url: siteConfig.url,
    },
    educationalLevel: course.levelLabel,
    image: course.thumbnailUrl || undefined,
    offers:
      course.price != null
        ? {
            "@type": "Offer",
            price: course.price,
            priceCurrency: course.currency,
            availability: "https://schema.org/InStock",
            url: absoluteUrl(
              `/trial-registration?course=${course.slug}&type=course`,
            ),
          }
        : undefined,
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode,
      courseWorkload: course.durationText || undefined,
    },
  };

  return (
    <main>
      <JsonLd data={structuredData} />
      <CourseDetailHero course={course} />
      <CourseDetails course={course} />
      <RelatedCourses courses={related} />
    </main>
  );
}
