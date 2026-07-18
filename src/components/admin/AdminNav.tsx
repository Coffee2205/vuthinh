"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
const links=[['/admin','Dashboard'],['/admin/courses','Khóa học'],['/admin/posts','Bài viết'],['/admin/resources','Tài liệu'],['/admin/testimonials','Cảm nhận'],['/admin/faqs','FAQ'],['/admin/registrations','Đăng ký học'],['/admin/consultations','Yêu cầu tư vấn']] as const;
export function AdminNav(){const pathname=usePathname();return <nav aria-label="Điều hướng quản trị" className="space-y-1">{links.map(([href,label])=>{const active=href==='/admin'?pathname===href:pathname.startsWith(href);return <Link key={href} href={href} className={`block min-h-11 rounded-lg px-3 py-2.5 text-sm font-semibold ${active?'bg-blue-50 text-brand-blue':'text-slate-700 hover:bg-slate-100'}`} aria-current={active?'page':undefined}>{label}</Link>})}</nav>}
