import type { Metadata } from "next";
import { ProgramGroupsSection } from "@/components/programs/ProgramGroupsSection";
import { getActivePrograms } from "@/services/course.service";

export const metadata: Metadata = {
  title: "Chương trình đào tạo | Vũ Thịnh",
  description:
    "Khám phá các nhóm chương trình tiếng Trung, kỹ năng sống, quản trị cảm xúc và phát triển con người tại Vũ Thịnh.",
};

export default async function ProgramsPage() {
  const programs = await getActivePrograms();
  return (
    <main>
      <ProgramGroupsSection programs={programs} />
    </main>
  );
}
