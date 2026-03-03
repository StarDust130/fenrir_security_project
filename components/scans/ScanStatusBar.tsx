"use client";

import React from "react";

interface StatusItem {
  label: string;
  value: string | number;
  color?: string;
}

const leftItems: StatusItem[] = [
  { label: "Sub-Agents", value: 0 },
  { label: "Parallel Executions", value: 2 },
  { label: "Operations", value: 1 },
];

const rightItems: StatusItem[] = [
  { label: "Critical", value: 0, color: "text-red-500" },
  { label: "High", value: 0, color: "text-orange-500" },
  { label: "Medium", value: 0, color: "text-amber-500" },
  { label: "Low", value: 0, color: "text-emerald-500" },
];

export default function ScanStatusBar() {
  return (
    <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-1 border-t border-gray-200/60 bg-white px-4 py-2 text-[11px] transition-colors duration-300 sm:px-5 dark:border-white/5 dark:bg-[#0f1419]">
      {/* Left stats */}
      <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
        {leftItems.map((item) => (
          <span key={item.label} className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#0CC8A8]" />
            <span className="font-medium text-gray-500 dark:text-gray-400">
              {item.label}:
            </span>
            <span className="font-semibold text-gray-700 dark:text-gray-300">
              {item.value}
            </span>
          </span>
        ))}
      </div>

      {/* Right severity counts */}
      <div className="flex items-center gap-x-4">
        {rightItems.map((item) => (
          <span key={item.label} className="flex items-center gap-1">
            <span className="font-medium text-gray-400 dark:text-gray-500">
              {item.label}:
            </span>
            <span className={`font-bold ${item.color}`}>{item.value}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
