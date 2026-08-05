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
  const d = await getAdminRows("blog_posts", { ...p, searchColumn: "title" });
  return (
    <AdminList
      title="Bài viết"
      {...d}
      {...p}
      statuses={["draft", "published", "archived"]}
      createHref="/admin/posts/new"
      columns={[
        {
          key: "title",
          label: "Tiêu đề",
          format: (v, r) => (
            <Link
              className="font-semibold text-brand-blue"
              href={`/admin/posts/${r.id}`}
            >
              {String(v)}
            </Link>
          ),
        },
        { key: "status", label: "Trạng thái" },
        {
          key: "is_featured",
          label: "Featured",
          format: (v) => (v ? "Có" : "Không"),
        },
        { key: "published_at", label: "Ngày đăng", format: dateCell },
        { key: "updated_at", label: "Cập nhật", format: dateCell },
      ]}
    />
  );
}
