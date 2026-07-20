import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { AdminLoginForm } from "@/components/admin/AdminLoginForm";
import { getCurrentAdmin } from "@/services/admin/auth.service";

export const metadata: Metadata = { title: "Đăng nhập quản trị", alternates: { canonical: "/admin/login" }, robots: { index: false, follow: false } };
export default async function AdminLoginPage() {
  if (await getCurrentAdmin()) redirect("/admin");
  return <main className="admin-root flex min-h-[75vh] items-center justify-center bg-slate-100 px-4 py-12"><section className="w-full max-w-md rounded-2xl bg-white p-7 shadow-sm"><p className="text-sm font-bold uppercase tracking-wider text-brand-blue">Vũ Thịnh</p><h1 className="mt-2 text-3xl font-bold">Đăng nhập quản trị</h1><p className="mt-2 text-sm text-slate-600">Không có chức năng đăng ký công khai.</p><AdminLoginForm /></section></main>;
}
