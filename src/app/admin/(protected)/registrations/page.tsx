import { RequestTable } from "@/components/admin/RequestTable";
import { parseAdminParams } from "@/lib/admin-page";
import { getAdminRows } from "@/services/admin/admin-data.service";
const courseStatuses = [
  "new",
  "contacted",
  "qualified",
  "enrolled",
  "cancelled",
  "archived",
] as const;
const trialStatuses = [
  "new",
  "contacted",
  "scheduled",
  "attended",
  "converted",
  "cancelled",
  "no_show",
] as const;
export default async function Page({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | undefined>>;
}) {
  const p = await parseAdminParams(searchParams);
  const [courses, trials] = await Promise.all([
    getAdminRows("course_registrations", { ...p, searchColumn: "full_name" }),
    getAdminRows("trial_registrations", { ...p, searchColumn: "full_name" }),
  ]);
  return (
    <>
      <h1 className="text-3xl font-bold">Đăng ký học</h1>
      <form className="mt-6 flex gap-3 rounded-xl border bg-white p-4">
        <input
          name="q"
          defaultValue={p.q}
          placeholder="Tên người đăng ký…"
          className="min-h-11 flex-1 rounded-lg border px-3"
        />
        <button className="rounded-lg border px-4 font-semibold">Tìm</button>
      </form>
      <section className="mt-7">
        <h2 className="mb-3 text-xl font-bold">
          Đăng ký khóa học ({courses.count})
        </h2>
        <RequestTable
          rows={courses.rows}
          kind="course"
          statuses={courseStatuses}
        />
      </section>
      <section className="mt-9">
        <h2 className="mb-3 text-xl font-bold">
          Đăng ký học thử ({trials.count})
        </h2>
        <RequestTable
          rows={trials.rows}
          kind="trial"
          statuses={trialStatuses}
        />
      </section>
    </>
  );
}
