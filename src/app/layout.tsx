import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { siteConfig } from "@/lib/seo";
import "./globals.css";

const beVietnamPro = Be_Vietnam_Pro({ variable: "--font-be-vietnam-pro", subsets: ["latin", "vietnamese"], weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  title: { default: siteConfig.title, template: `%s | ${siteConfig.name}` },
  description: siteConfig.description,
  alternates: { canonical: "/" },
  creator: siteConfig.name,
  publisher: siteConfig.organizationName,
  robots: { index: true, follow: true },
  openGraph: { type: "website", locale: "vi_VN", siteName: siteConfig.name, title: siteConfig.title, description: siteConfig.description, url: "/", images: [{ url: siteConfig.socialImage, alt: `Logo ${siteConfig.name}` }] },
  twitter: { card: "summary_large_image", title: siteConfig.title, description: siteConfig.description, images: [siteConfig.socialImage] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="vi" className={`${beVietnamPro.variable} h-full antialiased`}><body className="flex min-h-full flex-col"><Header /><div className="flex flex-1 flex-col">{children}</div><Footer /></body></html>;
}
