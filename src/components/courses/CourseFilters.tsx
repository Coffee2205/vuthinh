import type { CourseSort, ProgramCategory } from "@/types/course";
export function CourseFilters({
  programs,
  activeProgram,
  activeSort,
}: {
  programs: ProgramCategory[];
  activeProgram?: string;
  activeSort?: CourseSort;
}) {
  return (
    <form
      action="/courses"
      className="grid gap-4 rounded-2xl border border-slate-200 bg-white p-4 sm:grid-cols-[1fr_1fr_auto] sm:items-end"
      aria-label="Lọc và sắp xếp khóa học"
    >
      <label className="grid gap-2 text-sm font-semibold text-slate-700">
        Chương trình
        <select
          name="program"
          defaultValue={activeProgram ?? ""}
          className="min-h-11 rounded-lg border border-slate-300 bg-white px-3 font-normal focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-blue-100"
        >
          <option value="">Tất cả chương trình</option>
          {programs.map((program) => (
            <option key={program.id} value={program.slug}>
              {program.name}
            </option>
          ))}
        </select>
      </label>
      <label className="grid gap-2 text-sm font-semibold text-slate-700">
        Sắp xếp
        <select
          name="sort"
          defaultValue={activeSort ?? "default"}
          className="min-h-11 rounded-lg border border-slate-300 bg-white px-3 font-normal focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-blue-100"
        >
          <option value="default">Mặc định</option>
          <option value="newest">Mới nhất</option>
          <option value="price-asc">Giá thấp đến cao</option>
          <option value="price-desc">Giá cao đến thấp</option>
        </select>
      </label>
      <button className="button-primary" type="submit">
        Áp dụng
      </button>
    </form>
  );
}
