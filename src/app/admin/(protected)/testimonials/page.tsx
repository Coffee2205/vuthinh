import Link from "next/link";
import { AdminList } from "@/components/admin/AdminList";
import { dateCell, parseAdminParams } from "@/lib/admin-page";
import { getAdminRows } from "@/services/admin/admin-data.service";
export default async function Page({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | undefined>>;
}) {
  const p = await parseAdminParams(searchParams);
  const d = await getAdminRows("success_stories", {
    ...p,
    searchColumn: "title",
  });
  return (
    <AdminList
      title="Cảm nhận"
      {...d}
      {...p}
      statuses={["draft", "published", "archived"]}
      createHref="/admin/testimonials/new"
      columns={[
        {
          key: "student_name",
          label: "Tên hiển thị",
          format: (v, r) => (
            <Link
              className="font-semibold text-brand-blue"
              href={`/admin/testimonials/${r.id}`}
            >
              {String(v ?? "Chưa đặt")}
            </Link>
          ),
        },
        { key: "title", label: "Tiêu đề" },
        {
          key: "consent_confirmed",
          label: "Consent",
          format: (v) => (v ? "Đã xác nhận" : "Chưa xác nhận"),
        },
        { key: "status", label: "Trạng thái" },
        { key: "published_at", label: "Ngày đăng", format: dateCell },
      ]}
    />
  );
}
