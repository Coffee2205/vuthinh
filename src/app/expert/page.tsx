import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ExpertProfile } from "@/components/expert/ExpertProfile";
import { getExpertProfileBySlug } from "@/services/expert.service";

const fallbackMetadata: Metadata = { title: "Chuyên gia Vũ Thịnh", description: "Tư vấn đánh giá năng lực, xây dựng và theo dõi lộ trình học tập cá nhân." };
export async function generateMetadata(): Promise<Metadata> {
  try { const expert = await getExpertProfileBySlug("vu-thinh"); return expert ? { title: `Chuyên gia ${expert.full_name}`, description: expert.short_bio ?? fallbackMetadata.description, alternates: { canonical: "/expert" }, openGraph: { title: `Chuyên gia ${expert.full_name}`, description: expert.short_bio ?? fallbackMetadata.description ?? "", url: "/expert", type: "profile" } } : fallbackMetadata; }
  catch { return fallbackMetadata; }
}

export default async function ExpertPage() {
  const expert = await getExpertProfileBySlug("vu-thinh");
  if (!expert) notFound();
  return <main><ExpertProfile expert={expert} /></main>;
}
