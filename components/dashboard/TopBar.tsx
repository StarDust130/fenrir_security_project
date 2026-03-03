"use client";

import React from "react";
import { FileText, Square, Settings2, ChevronRight, Menu } from "lucide-react";
import { triggerOpenSidebar } from "./Sidebar";

/* ─── Tooltip ─── */
function Tip({ text, children }: { text: string; children: React.ReactNode }) {
  return (
    <div className="group/tip relative inline-flex">
      {children}
      <span className="pointer-events-none absolute left-1/2 top-full z-50 mt-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-gray-900 px-2.5 py-1.5 text-[11px] font-medium text-white opacity-0 shadow-lg transition-all duration-200 group-hover/tip:opacity-100 dark:bg-gray-100 dark:text-gray-900">
        {text}
        <span className="absolute bottom-full left-1/2 -translate-x-1/2 border-4 border-transparent border-b-gray-900 dark:border-b-gray-100" />
      </span>
    </div>
  );
}

export default function TopBar() {
  return (
    <header className="flex items-center justify-between border-b border-gray-200 bg-white px-3 py-2.5 transition-colors duration-300 sm:px-5 sm:py-3 dark:border-white/10 dark:bg-[#0f1419]">
      {/* Left: hamburger (mobile) + breadcrumb */}
      <div className="flex items-center gap-2">
        {/* Mobile hamburger — inside the header */}
        <button
          onClick={triggerOpenSidebar}
          className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-600 transition-all duration-200 hover:bg-gray-100 active:scale-95 lg:hidden dark:text-gray-300 dark:hover:bg-white/5"
          aria-label="Open menu"
        >
          <Menu size={20} />
        </button>

        {/* Breadcrumb */}
        <div className="flex items-center gap-1.5 text-sm">
          <span className="font-semibold text-gray-900 dark:text-white">
            Scan
          </span>
          <Settings2
            size={14}
            className="hidden text-gray-400 sm:block dark:text-gray-500"
          />
          <ChevronRight
            size={12}
            className="text-gray-300 dark:text-gray-600"
          />
          <span className="hidden text-gray-500 sm:inline dark:text-gray-400">
            Private Assets
          </span>
          <ChevronRight
            size={12}
            className="hidden text-gray-300 sm:inline dark:text-gray-600"
          />
          <span className="font-medium text-[#0CC8A8]">New Scan</span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-1.5 sm:gap-2">
        <Tip text="Export Report">
          <button className="flex h-9 items-center gap-2 rounded-lg border border-gray-200 bg-white px-2.5 text-[13px] font-medium text-gray-700 transition-all duration-200 hover:bg-gray-50 hover:shadow-sm active:scale-[0.97] sm:px-4 dark:border-white/10 dark:bg-transparent dark:text-gray-300 dark:hover:bg-white/5">
            <FileText size={14} />
            <span className="hidden sm:inline">Export Report</span>
          </button>
        </Tip>
        <Tip text="Stop Scan">
          <button className="flex h-9 items-center gap-2 rounded-lg bg-[#ef4444] px-2.5 text-[13px] font-medium text-white transition-all duration-200 hover:bg-[#dc2626] hover:shadow-md hover:shadow-red-500/20 active:scale-[0.97] sm:px-4">
            <Square size={12} fill="currentColor" />
            <span className="hidden sm:inline">Stop Scan</span>
          </button>
        </Tip>
      </div>
    </header>
  );
}
