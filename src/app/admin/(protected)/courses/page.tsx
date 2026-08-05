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
  const d = await getAdminRows("courses", { ...p, searchColumn: "title" });
  return (
    <AdminList
      title="Khóa học"
      {...d}
      {...p}
      statuses={["draft", "published", "archived"]}
      createHref="/admin/courses/new"
      columns={[
        {
          key: "title",
          label: "Tên",
          format: (v, r) => (
            <Link
              className="font-semibold text-brand-blue"
              href={`/admin/courses/${r.id}`}
            >
              {String(v)}
            </Link>
          ),
        },
        { key: "level_label", label: "Cấp độ" },
        { key: "session_count", label: "Số buổi" },
        { key: "price", label: "Giá" },
        { key: "status", label: "Trạng thái" },
        {
          key: "is_featured",
          label: "Featured",
          format: (v) => (v ? "Có" : "Không"),
        },
        { key: "updated_at", label: "Cập nhật", format: dateCell },
      ]}
    />
  );
}
