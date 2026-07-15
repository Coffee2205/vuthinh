import type { Metadata } from "next";
import { AboutIntroduction } from "@/components/about/AboutIntroduction";

export const metadata: Metadata = {
  title: "Giới thiệu | Vũ Thịnh",
  description:
    "Tìm hiểu định hướng hệ sinh thái giáo dục gia đình Vũ Thịnh với tiếng Trung là trọng tâm.",
};

export default function AboutPage() {
  return <AboutIntroduction />;
}
