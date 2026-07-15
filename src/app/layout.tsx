import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import "./globals.css";

const beVietnamPro = Be_Vietnam_Pro({ variable: "--font-be-vietnam-pro", subsets: ["latin", "vietnamese"], weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: { default: "Vũ Thịnh | Hệ sinh thái giáo dục gia đình", template: "%s | Vũ Thịnh" },
  description: "Chương trình tiếng Trung, kỹ năng sống và phát triển nội tâm dành cho gia đình.",
  openGraph: { type: "website", locale: "vi_VN", siteName: "Vũ Thịnh", title: "Vũ Thịnh | Hệ sinh thái giáo dục gia đình", description: "Chương trình tiếng Trung, kỹ năng sống và phát triển nội tâm dành cho gia đình." },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="vi" className={`${beVietnamPro.variable} h-full antialiased`}><body className="flex min-h-full flex-col"><Header /><main className="flex flex-1 flex-col">{children}</main><Footer /></body></html>;
}
