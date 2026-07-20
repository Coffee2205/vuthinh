import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/common/JsonLd";
import { ExpertProfile } from "@/components/expert/ExpertProfile";
import { absoluteUrl, createPageMetadata } from "@/lib/seo";
import { getExpertProfileBySlug } from "@/services/expert.service";

const fallbackMetadata: Metadata = createPageMetadata({ title: "Chuyên gia Vũ Thịnh", description: "Tư vấn đánh giá năng lực, xây dựng và theo dõi lộ trình học tập cá nhân.", path: "/expert", type: "profile" });
export async function generateMetadata(): Promise<Metadata> {
  try { const expert = await getExpertProfileBySlug("vu-thinh"); return expert ? createPageMetadata({ title: `Chuyên gia ${expert.full_name}`, description: expert.short_bio ?? String(fallbackMetadata.description), path: "/expert", type: "profile", image: expert.avatar_url ? { url: expert.avatar_url, alt: `Chân dung ${expert.full_name}` } : null }) : fallbackMetadata; }
  catch { return fallbackMetadata; }
}

export default async function ExpertPage() {
  const expert = await getExpertProfileBySlug("vu-thinh");
  if (!expert) notFound();
  const structuredData = { "@context": "https://schema.org", "@type": "Person", "@id": `${absoluteUrl("/expert")}#person`, name: expert.full_name, url: absoluteUrl("/expert"), jobTitle: expert.professional_title, description: expert.short_bio || expert.biography || undefined, image: expert.avatar_url || undefined, knowsAbout: expert.expert_specializations.map((item) => item.name), knowsLanguage: expert.languages };
  return <main><JsonLd data={structuredData} /><ExpertProfile expert={expert} /></main>;
}
