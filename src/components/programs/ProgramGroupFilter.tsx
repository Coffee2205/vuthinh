"use client";

import { useState } from "react";
import { programGroupFilters, programGroupsContent } from "@/data/programs";

export function ProgramGroupFilter() {
  const [activeFilter, setActiveFilter] = useState("all");
  const visibleGroups = programGroupsContent.groups.filter(
    (group) => activeFilter === "all" || group.area === activeFilter,
  );

  return (
    <div className="mt-10 lg:mt-12">
      <div
        className="flex flex-wrap gap-3"
        role="group"
        aria-label="Lọc nhóm chương trình"
      >
        {programGroupFilters.map((filter) => {
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
        Hiển thị {visibleGroups.length} nhóm chương trình
      </p>

      <ul className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visibleGroups.map((group, index) => (
          <li
            key={group.title}
            className={`rounded-2xl border p-6 sm:p-7 ${
              group.area === "Tiếng Trung"
                ? "border-blue-200 bg-blue-50"
                : "border-slate-200 bg-white"
            }`}
          >
            <div className="flex items-center justify-between gap-4">
              <span className="text-sm font-bold uppercase tracking-[0.12em] text-brand-blue">
                {group.area}
              </span>
              <span className="text-sm font-bold text-slate-400" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
            <h2 className="mt-5 text-xl font-bold text-slate-950">{group.title}</h2>
            <p className="mt-3 leading-7 text-slate-600">{group.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
