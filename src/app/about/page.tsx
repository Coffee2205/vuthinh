import type { Metadata } from "next";
import { AboutIntroduction } from "@/components/about/AboutIntroduction";
import { FormationStorySection } from "@/components/about/FormationStorySection";
import { VisionSection } from "@/components/about/VisionSection";

export const metadata: Metadata = {
  title: "Giới thiệu | Vũ Thịnh",
  description:
    "Tìm hiểu định hướng hệ sinh thái giáo dục gia đình Vũ Thịnh với tiếng Trung là trọng tâm.",
};

export default function AboutPage() {
  return (
    <main>
      <AboutIntroduction />
      <FormationStorySection />
      <VisionSection />
    </main>
  );
}
