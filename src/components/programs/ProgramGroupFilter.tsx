"use client";

import { useState } from "react";
import { ProgramGrid } from "@/components/programs/ProgramGrid";
import type { ProgramCategory } from "@/types/course";

const filters = [
  { label: "Tất cả", value: "all" },
  { label: "Tiếng Trung", value: "chinese" },
  { label: "Năng lực sống", value: "life" },
  { label: "Phát triển con người", value: "human" },
] as const;

export function ProgramGroupFilter({ programs }: { programs: ProgramCategory[] }) {
  const [activeFilter, setActiveFilter] = useState("all");
  const visiblePrograms = programs.filter((program) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "chinese") return program.isCore;
    if (activeFilter === "life") return ["ky-nang-song", "quan-tri-cam-xuc"].includes(program.slug);
    return program.slug === "gia-tri-song-va-hanh-phuc";
  });

  return (
    <div className="mt-10 lg:mt-12">
      <div
        className="flex flex-wrap gap-3"
        role="group"
        aria-label="Lọc nhóm chương trình"
      >
        {filters.map((filter) => {
          const isActive = activeFilter === filter.value;

          return (
            <button
              key={filter.value}
              type="button"
              aria-pressed={isActive}
              onClick={() => setActiveFilter(filter.value)}
              className={`min-h-11 rounded-full border px-5 py-2 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue ${
                isActive
                  ? "border-brand-blue bg-brand-blue text-white"
                  : "border-slate-300 bg-white text-slate-700 hover:border-brand-blue hover:text-brand-blue"
              }`}
            >
              {filter.label}
            </button>
          );
        })}
      </div>

      <p className="mt-5 text-sm text-slate-600" role="status" aria-live="polite">
        Hiển thị {visiblePrograms.length} nhóm chương trình
      </p>

      <div className="mt-5"><ProgramGrid programs={visiblePrograms} /></div>
    </div>
  );
}
