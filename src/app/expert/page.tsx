import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/common/JsonLd";
import { ExpertProfile } from "@/components/expert/ExpertProfile";
import { lecturerProfile } from "@/data/expert";
import { absoluteUrl, createPageMetadata } from "@/lib/seo";
import { getExpertProfileBySlug } from "@/services/expert.service";

const metadataDescription =
  "Thông tin giảng viên Huỳnh Anh Ngữ, tên thường gọi Vũ Thịnh, với kinh nghiệm giảng dạy, đào tạo, huấn luyện và chuyên môn tiếng Trung.";
const fallbackMetadata: Metadata = createPageMetadata({
  title: "Giảng viên Huỳnh Anh Ngữ (Vũ Thịnh)",
  description: metadataDescription,
  path: "/expert",
  type: "profile",
});

export async function generateMetadata(): Promise<Metadata> {
  try {
    const expert = await getExpertProfileBySlug("vu-thinh");
    return expert
      ? createPageMetadata({
          title: `Giảng viên ${lecturerProfile.fullName} (${lecturerProfile.alternateName})`,
          description: metadataDescription,
          path: "/expert",
          type: "profile",
          image: expert.avatar_url
            ? {
                url: expert.avatar_url,
                alt: `Chân dung giảng viên ${lecturerProfile.fullName}`,
              }
            : null,
        })
      : fallbackMetadata;
  } catch {
    return fallbackMetadata;
  }
}

export default async function ExpertPage() {
  const expert = await getExpertProfileBySlug("vu-thinh");
  if (!expert) notFound();
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${absoluteUrl("/expert")}#person`,
    name: expert.full_name,
    alternateName: lecturerProfile.alternateName,
    url: absoluteUrl("/expert"),
    jobTitle: lecturerProfile.jobTitle,
    description: expert.short_bio || expert.biography || undefined,
    image: expert.avatar_url || undefined,
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: lecturerProfile.education.institution,
    },
    knowsAbout: lecturerProfile.teachingAreas,
    knowsLanguage: expert.languages,
  };
  return (
    <main>
      <JsonLd data={structuredData} />
      <ExpertProfile expert={expert} />
    </main>
  );
}
