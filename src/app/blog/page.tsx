import type { Metadata } from "next";
import { BlogCategoriesSection } from "@/components/blog/BlogCategoriesSection";

export const metadata: Metadata = {
  title: "Blog | Vũ Thịnh",
  description:
    "Góc chia sẻ kiến thức tiếng Trung, kỹ năng sống và phát triển con người của Vũ Thịnh.",
};

export default function BlogPage() {
  return (
    <main>
      <BlogCategoriesSection />
    </main>
  );
}
