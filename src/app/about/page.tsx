import type { Metadata } from "next";
import { AboutIntroduction } from "@/components/about/AboutIntroduction";
import { AboutCtaSection } from "@/components/about/AboutCtaSection";
import { CoreValuesSection } from "@/components/about/CoreValuesSection";
import { EducationPhilosophySection } from "@/components/about/EducationPhilosophySection";
import { FormationStorySection } from "@/components/about/FormationStorySection";
import { MissionSection } from "@/components/about/MissionSection";
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
      <MissionSection />
      <CoreValuesSection />
      <EducationPhilosophySection />
      <AboutCtaSection />
    </main>
  );
}
