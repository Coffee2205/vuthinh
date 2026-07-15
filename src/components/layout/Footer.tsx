import Link from "next/link";
import { Container } from "@/components/common/Container";
import { Logo } from "@/components/common/Logo";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <Container className="grid gap-8 py-10 sm:grid-cols-2 lg:grid-cols-3">
        <div><Logo /><p className="mt-3 max-w-sm text-sm leading-6 text-slate-600">Hệ sinh thái giáo dục gia đình kết hợp ngôn ngữ, kỹ năng sống và phát triển con người.</p></div>
        <div><h2 className="font-semibold text-slate-900">Liên kết nhanh</h2><div className="mt-3 flex flex-col gap-2 text-sm text-slate-600"><Link className="hover:text-brand-blue" href="/programs">Chương trình học</Link><Link className="hover:text-brand-blue" href="/expert">Chuyên gia</Link><Link className="hover:text-brand-blue" href="/contact">Liên hệ</Link></div></div>
        <div><h2 className="font-semibold text-slate-900">Chính sách</h2><div className="mt-3 flex flex-col gap-2 text-sm text-slate-600"><Link className="hover:text-brand-blue" href="/privacy-policy">Chính sách bảo mật</Link><Link className="hover:text-brand-blue" href="/terms">Điều khoản sử dụng</Link></div></div>
      </Container>
      <div className="border-t border-slate-200 py-5 text-center text-sm text-slate-500">© {new Date().getFullYear()} Vũ Thịnh. Tất cả quyền được bảo lưu.</div>
    </footer>
  );
}
