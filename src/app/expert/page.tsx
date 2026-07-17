import type { Metadata } from "next";
import { ExpertProfileSection } from "@/components/expert/ExpertProfileSection";

export const metadata: Metadata = {
  title: "Chuyên gia | Vũ Thịnh",
  description:
    "Trang hồ sơ chuyên gia đồng hành của hệ sinh thái giáo dục gia đình Vũ Thịnh.",
};

export default function ExpertPage() {
  return (
    <main>
      <ExpertProfileSection />
    </main>
  );
}
