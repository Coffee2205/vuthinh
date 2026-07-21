import type { MetadataRoute } from "next";
import { getPublishedBlogPosts } from "@/services/blog.service";
import { getPublishedCourses } from "@/services/course.service";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://vuthinh.io.vn").replace(/\/$/, "");

const staticPaths = [
  "",
  "/about",
  "/courses",
  "/expert",
  "/consultation",
  "/blog",
  "/success-stories",
  "/faq",
  "/careers",
  "/contact",
  "/trial-registration",
  "/privacy",
  "/terms",
] as const;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const entries: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${siteUrl}${path}`,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));

  const [courses, posts] = await Promise.allSettled([
    getPublishedCourses(),
    getPublishedBlogPosts(),
  ]);

  if (courses.status === "fulfilled") {
    entries.push(...courses.value.map((course) => ({
      url: `${siteUrl}/courses/${course.slug}`,
      lastModified: course.publishedAt ?? undefined,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })));
  }

  if (posts.status === "fulfilled") {
    entries.push(...posts.value.map((post) => ({
      url: `${siteUrl}/blog/${post.slug}`,
      lastModified: post.updated_at,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })));
  }

  return entries;
}
