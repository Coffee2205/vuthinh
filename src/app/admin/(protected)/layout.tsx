import type { Metadata } from "next";
import { AdminNav } from "@/components/admin/AdminNav";
import { requireAdmin } from "@/services/admin/auth.service";
import { logoutAction } from "./actions";

export const metadata: Metadata = {
  alternates: { canonical: "/admin" },
  robots: { index: false, follow: false },
};
export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const admin = await requireAdmin();
  return (
    <div className="admin-root min-h-screen bg-slate-100 lg:grid lg:grid-cols-[260px_1fr]">
      <aside className="hidden border-r bg-white p-5 lg:block">
        <p className="mb-6 text-xl font-bold">Vũ Thịnh Admin</p>
        <AdminNav />
      </aside>
      <div>
        <header className="sticky top-0 z-20 flex min-h-16 items-center justify-between border-b bg-white px-4 sm:px-7">
          <details className="relative lg:hidden">
            <summary className="cursor-pointer list-none rounded-lg border px-3 py-2 font-semibold">
              Menu
            </summary>
            <div className="absolute left-0 top-12 w-64 rounded-xl border bg-white p-3 shadow-lg">
              <AdminNav />
            </div>
          </details>
          <div className="ml-auto flex items-center gap-3">
            <span className="hidden text-sm text-slate-600 sm:inline">
              {admin.name}
            </span>
            <form action={logoutAction}>
              <button className="min-h-11 rounded-lg border px-4 text-sm font-semibold hover:bg-slate-50">
                Đăng xuất
              </button>
            </form>
          </div>
        </header>
        <main className="p-4 sm:p-7">{children}</main>
      </div>
    </div>
  );
}
