import type { Metadata } from "next";

export const siteConfig = {
  name: "Vũ Thịnh",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://vuthinh.io.vn").replace(/\/$/, ""),
  title: "Vũ Thịnh | Hệ sinh thái giáo dục gia đình",
  description:
    "Vũ Thịnh đồng hành cùng gia đình qua chương trình tiếng Trung, kỹ năng sống và phát triển nội tâm.",
  mark: "/images/brand/vu-thinh-mark-transparent.png",
  wordmark: "/images/brand/vu-thinh-wordmark-transparent.png",
  socialImage: "/images/brand/vu-thinh-wordmark-white.png",
} as const;

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  image?: { url: string; alt: string } | null;
  type?: "website" | "article" | "profile";
};

export function createPageMetadata({
  title,
  description,
  path,
  image,
  type = "website",
}: PageMetadataOptions): Metadata {
  const socialImage = image ?? {
    url: siteConfig.socialImage,
    alt: `Logo ${siteConfig.name}`,
  };

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      url: path,
      siteName: siteConfig.name,
      locale: "vi_VN",
      type,
      images: [socialImage],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.name}`,
      description,
      images: [socialImage.url],
    },
  };
}

export function absoluteUrl(path: string) {
  return new URL(path, `${siteConfig.url}/`).toString();
}
