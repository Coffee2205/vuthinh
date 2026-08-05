import type { Metadata } from "next";

export const siteConfig = {
  name: "Vũ Thịnh",
  organizationName: "Vũ Thịnh Education",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://vuthinh.io.vn").replace(
    /\/$/,
    "",
  ),
  title: "Vũ Thịnh – Giáo dục tiếng Trung và phát triển bản thân",
  description:
    "Vũ Thịnh Education cung cấp chương trình tiếng Trung, luyện thi HSK, kỹ năng sống, quản lý cảm xúc và tư vấn học tập phù hợp cho từng gia đình.",
  mark: "/images/brand/vu-thinh-logo-color.png",
  wordmark: "/images/brand/vu-thinh-logo-color.png",
  socialImage: "/images/brand/vu-thinh-logo-color.png",
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
