import type { MetadataRoute } from "next";
import { getPublishedBlogPosts } from "@/services/blog.service";
import { getPublishedCourses } from "@/services/course.service";
import { getPublishedResources } from "@/services/resource.service";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://vuthinh.io.vn").replace(/\/$/, "");

const staticPaths = [
  "",
  "/about",
  "/programs",
  "/courses",
  "/expert",
  "/consultation",
  "/blog",
  "/resources",
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

  const [courses, posts, resources] = await Promise.allSettled([
    getPublishedCourses(),
    getPublishedBlogPosts(),
    getPublishedResources(),
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

  if (resources.status === "fulfilled") {
    entries.push(...resources.value.map((resource) => ({
      url: `${siteUrl}/resources/${resource.slug}`,
      lastModified: resource.updated_at,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })));
  }

  return entries;
}
