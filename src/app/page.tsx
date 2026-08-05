import { ExpertSection } from "@/components/home/ExpertSection";
import { FinalCtaSection } from "@/components/home/FinalCtaSection";
import { HeroSection } from "@/components/home/HeroSection";
import { ProgramsSection } from "@/components/home/ProgramsSection";
import { TrustSection } from "@/components/home/TrustSection";
import { TrialRegistrationSection } from "@/components/home/TrialRegistrationSection";
import { siteConfig } from "@/lib/seo";
import { getPublicSiteSettings } from "@/services/support.service";

export const metadata: Metadata = {
  title: { absolute: siteConfig.title },
  description: siteConfig.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: "/",
    type: "website",
    siteName: siteConfig.name,
    locale: "vi_VN",
    images: [{ url: siteConfig.socialImage, alt: `Logo ${siteConfig.name}` }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.socialImage],
  },
};

function text(value: unknown) {
  return typeof value === "string" && value.trim() ? value.trim() : undefined;
}
function webUrl(value: unknown) {
  const candidate = text(value);
  if (!candidate) return undefined;
  try {
    const url = new URL(candidate);
    return url.protocol === "https:" || url.protocol === "http:"
      ? candidate
      : undefined;
  } catch {
    return undefined;
  }
}

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ "trial-submitted"?: string }>;
}) {
  const [params, settings] = await Promise.all([
    searchParams,
    getPublicSiteSettings(),
  ]);
  const organizationName = text(settings.organization.name) || siteConfig.name;
  const organizationDescription =
    text(settings.organization.tagline) || siteConfig.description;
  const sameAs = [
    settings.contact.facebook_url,
    settings.contact.youtube_url,
    settings.contact.zalo_url,
  ]
    .map(webUrl)
    .filter((value): value is string => Boolean(value));
  const homeStructuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        "@id": `${siteConfig.url}/#organization`,
        name: organizationName,
        url: siteConfig.url,
        logo: new URL(siteConfig.socialImage, siteConfig.url).toString(),
        description: organizationDescription,
        email: text(settings.contact.email),
        telephone: text(settings.contact.phone),
        address: text(settings.contact.address),
        sameAs: sameAs.length ? sameAs : undefined,
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: organizationName,
        description: organizationDescription,
        inLanguage: "vi-VN",
        publisher: { "@id": `${siteConfig.url}/#organization` },
      },
    ],
  };
  return (
    <>
      <JsonLd data={homeStructuredData} />
      <HeroSection />
      <TrustSection />
      <ProgramsSection />
      <ExpertSection />
      <TrialRegistrationSection submitted={params["trial-submitted"] === "1"} />
      <FinalCtaSection />
    </>
  );
}
import type { Metadata } from "next";
import { JsonLd } from "@/components/common/JsonLd";
