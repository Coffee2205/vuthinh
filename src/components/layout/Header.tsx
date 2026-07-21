import Link from "next/link";
import { Container } from "@/components/common/Container";
import { Logo } from "@/components/common/Logo";

const navigation = [
  { href: "/", label: "Trang chủ" },
  { href: "/about", label: "Giới thiệu" },
  { href: "/courses", label: "Khóa học" },
  { href: "/expert", label: "Chuyên gia" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Liên hệ" },
];

const linkStyles = "rounded-md px-2 py-2 text-sm font-medium text-white/85 transition-colors hover:bg-white/10 hover:text-brand-yellow focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-yellow";

export function Header() {
  return (
    <header className="border-b border-white/10 bg-[#3D3242] shadow-sm">
      <Container className="flex min-h-20 items-center justify-between gap-6 [&>a]:text-brand-yellow">
        <Logo />
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Điều hướng chính">
          {navigation.map((item) => <Link key={item.href} href={item.href} className={linkStyles}>{item.label}</Link>)}
          <Link href="/trial-registration" className="button-primary ml-2">Đăng ký học thử</Link>
        </nav>
        <details className="group relative lg:hidden">
          <summary className="flex min-h-11 cursor-pointer list-none items-center rounded-lg border border-white/25 px-3 font-medium text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-yellow [&::-webkit-details-marker]:hidden">
            <span className="group-open:hidden">Menu</span><span className="hidden group-open:inline">Đóng</span>
          </summary>
          <nav className="absolute right-0 top-14 z-50 flex w-72 flex-col rounded-xl border border-white/10 bg-[#3D3242] p-3 shadow-lg" aria-label="Điều hướng trên di động">
            {navigation.map((item) => <Link key={item.href} href={item.href} className={linkStyles}>{item.label}</Link>)}
            <Link href="/trial-registration" className="button-primary mt-2">Đăng ký học thử</Link>
          </nav>
        </details>
      </Container>
    </header>
  );
}
