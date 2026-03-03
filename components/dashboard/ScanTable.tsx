"use client";

import React, { useState } from "react";
import {
  Search,
  SlidersHorizontal,
  Columns3,
  Plus,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

type Status = "Completed" | "Scheduled" | "Failed";

interface ScanRow {
  name: string;
  type: string;
  status: Status;
  progress: number;
  vulnerabilities: {
    critical: number;
    high: number;
    medium: number;
    low: number;
  };
  lastScan: string;
}

const scansData: ScanRow[] = [
  {
    name: "Web App Servers",
    type: "Greybox",
    status: "Completed",
    progress: 100,
    vulnerabilities: { critical: 5, high: 12, medium: 23, low: 18 },
    lastScan: "4d ago",
  },
  {
    name: "Web App Servers",
    type: "Greybox",
    status: "Completed",
    progress: 100,
    vulnerabilities: { critical: 5, high: 12, medium: 23, low: 18 },
    lastScan: "4d ago",
  },
  {
    name: "Web App Servers",
    type: "Greybox",
    status: "Completed",
    progress: 100,
    vulnerabilities: { critical: 5, high: 12, medium: 23, low: 18 },
    lastScan: "4d ago",
  },
  {
    name: "Web App Servers",
    type: "Greybox",
    status: "Completed",
    progress: 100,
    vulnerabilities: { critical: 5, high: 12, medium: 23, low: 18 },
    lastScan: "4d ago",
  },
  {
    name: "Web App Servers",
    type: "Greybox",
    status: "Completed",
    progress: 100,
    vulnerabilities: { critical: 5, high: 12, medium: 23, low: 18 },
    lastScan: "4d ago",
  },
  {
    name: "Web App Servers",
    type: "Greybox",
    status: "Completed",
    progress: 100,
    vulnerabilities: { critical: 5, high: 12, medium: 23, low: 18 },
    lastScan: "4d ago",
  },
  {
    name: "Web App Servers",
    type: "Greybox",
    status: "Completed",
    progress: 100,
    vulnerabilities: { critical: 5, high: 12, medium: 23, low: 18 },
    lastScan: "4d ago",
  },
  {
    name: "Web App Servers",
    type: "Greybox",
    status: "Scheduled",
    progress: 100,
    vulnerabilities: { critical: 5, high: 12, medium: 0, low: 0 },
    lastScan: "4d ago",
  },
  {
    name: "Web App Servers",
    type: "Greybox",
    status: "Scheduled",
    progress: 100,
    vulnerabilities: { critical: 5, high: 12, medium: 0, low: 0 },
    lastScan: "4d ago",
  },
  {
    name: "IoT Devices",
    type: "Blackbox",
    status: "Failed",
    progress: 10,
    vulnerabilities: { critical: 2, high: 4, medium: 8, low: 1 },
    lastScan: "3d ago",
  },
  {
    name: "Temp Data",
    type: "Blackbox",
    status: "Failed",
    progress: 10,
    vulnerabilities: { critical: 2, high: 4, medium: 8, low: 1 },
    lastScan: "3d ago",
  },
];

const statusConfig: Record<Status, { bg: string; dot: string }> = {
  Completed: {
    bg: "bg-emerald-50 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-400",
    dot: "bg-emerald-500",
  },
  Scheduled: {
    bg: "bg-gray-100 text-gray-500 dark:bg-white/10 dark:text-gray-400",
    dot: "bg-gray-400",
  },
  Failed: {
    bg: "bg-red-50 text-red-600 dark:bg-red-500/15 dark:text-red-400",
    dot: "bg-red-500",
  },
};

const vulnLabels = ["Critical", "High", "Medium", "Low"];

function ProgressBar({ value, status }: { value: number; status: Status }) {
  const barColor = status === "Failed" ? "bg-red-500" : "bg-[#0CC8A8]";
  return (
    <div className="flex items-center gap-3">
      <div className="h-2 w-28 overflow-hidden rounded-full bg-gray-100 dark:bg-white/10">
        <div
          className={`h-full rounded-full transition-all duration-700 ease-out ${barColor}`}
          style={{ width: `${value}%` }}
        />
      </div>
      <span className="text-[12px] font-medium tabular-nums text-gray-600 dark:text-gray-400">
        {value}%
      </span>
    </div>
  );
}

/* ─── Tooltip Badge ─── */
function VulnBadges({
  vulns,
}: {
  vulns: { critical: number; high: number; medium: number; low: number };
}) {
  const items = [
    {
      value: vulns.critical,
      bg: "bg-[#ef4444] hover:bg-[#dc2626]",
      label: vulnLabels[0],
    },
    {
      value: vulns.high,
      bg: "bg-[#f59e0b] hover:bg-[#d97706]",
      label: vulnLabels[1],
    },
    {
      value: vulns.medium,
      bg: "bg-[#22c55e] hover:bg-[#16a34a]",
      label: vulnLabels[2],
    },
    {
      value: vulns.low,
      bg: "bg-[#3b82f6] hover:bg-[#2563eb]",
      label: vulnLabels[3],
    },
  ];

  return (
    <div className="flex items-center gap-1.5">
      {items
        .filter((item) => item.value > 0)
        .map((item, i) => (
          <div key={i} className="group/badge relative">
            <span
              className={`flex h-6 min-w-6 cursor-default items-center justify-center rounded-md px-1.5 text-[11px] font-bold text-white transition-all duration-200 ${item.bg} group-hover/badge:scale-110`}
            >
              {item.value}
            </span>
            <span className="pointer-events-none absolute bottom-full left-1/2 z-50 mb-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-gray-900 px-2 py-1 text-[10px] font-medium text-white opacity-0 shadow-lg transition-all duration-200 group-hover/badge:opacity-100 dark:bg-gray-100 dark:text-gray-900">
              {item.label}: {item.value}
              <span className="absolute left-1/2 top-full -translate-x-1/2 border-4 border-transparent border-t-gray-900 dark:border-t-gray-100" />
            </span>
          </div>
        ))}
    </div>
  );
}

/* ─── Table Action Tooltip ─── */
function ActionTip({
  text,
  children,
}: {
  text: string;
  children: React.ReactNode;
}) {
  return (
    <div className="group/tip relative inline-flex">
      {children}
      <span className="pointer-events-none absolute bottom-full left-1/2 z-50 mb-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-gray-900 px-2.5 py-1.5 text-[11px] font-medium text-white opacity-0 shadow-lg transition-all duration-200 group-hover/tip:opacity-100 dark:bg-gray-100 dark:text-gray-900">
        {text}
        <span className="absolute left-1/2 top-full -translate-x-1/2 border-4 border-transparent border-t-gray-900 dark:border-t-gray-100" />
      </span>
    </div>
  );
}

export default function ScanTable() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredScans = scansData.filter(
    (scan) =>
      scan.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      scan.type.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="rounded-xl border border-gray-100 bg-white transition-colors duration-300 dark:border-white/10 dark:bg-[#0f1419]">
      {/* Search & Actions */}
      <div className="flex flex-col gap-3 border-b border-gray-100 p-4 dark:border-white/10 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search
            size={15}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 transition-colors"
          />
          <input
            type="text"
            placeholder="Search scans by name or type..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="h-10 w-full rounded-lg border border-gray-200 bg-white pl-9 pr-4 text-[13px] text-gray-900 placeholder:text-gray-400 outline-none transition-all duration-200 focus:border-[#0CC8A8] focus:ring-2 focus:ring-[#0CC8A8]/20 dark:border-white/10 dark:bg-[#0a0f14] dark:text-white dark:placeholder:text-gray-500 dark:focus:border-[#0CC8A8]"
          />
        </div>
        <div className="flex items-center gap-2">
          <ActionTip text="Filter results">
            <button className="flex items-center gap-2 rounded-lg border border-gray-200 px-3.5 py-2 text-[13px] font-medium text-gray-600 transition-all duration-200 hover:bg-gray-50 hover:shadow-sm active:scale-[0.97] dark:border-white/10 dark:text-gray-400 dark:hover:bg-white/5">
              <SlidersHorizontal size={14} />
              <span className="hidden sm:inline">Filter</span>
            </button>
          </ActionTip>
          <ActionTip text="Toggle columns">
            <button className="flex items-center gap-2 rounded-lg border border-gray-200 px-3.5 py-2 text-[13px] font-medium text-gray-600 transition-all duration-200 hover:bg-gray-50 hover:shadow-sm active:scale-[0.97] dark:border-white/10 dark:text-gray-400 dark:hover:bg-white/5">
              <Columns3 size={14} />
              <span className="hidden sm:inline">Column</span>
            </button>
          </ActionTip>
          <ActionTip text="Create new scan">
            <button className="flex items-center gap-2 rounded-lg bg-[#0CC8A8] px-3.5 py-2 text-[13px] font-bold text-white shadow-md shadow-[#0CC8A8]/20 transition-all duration-200 hover:bg-[#0ab899] hover:shadow-lg hover:shadow-[#0CC8A8]/30 active:scale-[0.97]">
              <Plus size={14} strokeWidth={3} />
              <span className="hidden sm:inline">New scan</span>
            </button>
          </ActionTip>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-195">
          <thead>
            <tr className="border-b border-gray-100 dark:border-white/10">
              <th className="px-5 py-3 text-left text-[12px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500">
                Scan Name
              </th>
              <th className="px-4 py-3 text-left text-[12px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500">
                Type
              </th>
              <th className="px-4 py-3 text-left text-[12px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500">
                Status
              </th>
              <th className="px-4 py-3 text-left text-[12px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500">
                Progress
              </th>
              <th className="px-4 py-3 text-left text-[12px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500">
                Vulnerability
              </th>
              <th className="px-4 py-3 text-right text-[12px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500">
                Last Scan
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredScans.map((scan, i) => {
              const cfg = statusConfig[scan.status];
              return (
                <tr
                  key={i}
                  className="group cursor-pointer border-b border-gray-50 transition-colors duration-150 last:border-0 hover:bg-gray-50/70 dark:border-white/5 dark:hover:bg-white/3"
                >
                  <td className="px-5 py-3.5 text-[13px] font-semibold text-gray-900 dark:text-white">
                    {scan.name}
                  </td>
                  <td className="px-4 py-3.5 text-[13px] text-gray-500 dark:text-gray-400">
                    {scan.type}
                  </td>
                  <td className="px-4 py-3.5">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold ${cfg.bg}`}
                    >
                      <span className={`h-1.5 w-1.5 rounded-full ${cfg.dot}`} />
                      {scan.status}
                    </span>
                  </td>
                  <td className="px-4 py-3.5">
                    <ProgressBar value={scan.progress} status={scan.status} />
                  </td>
                  <td className="px-4 py-3.5">
                    <VulnBadges vulns={scan.vulnerabilities} />
                  </td>
                  <td className="px-4 py-3.5 text-right text-[12px] text-gray-500 dark:text-gray-400">
                    {scan.lastScan}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between border-t border-gray-100 px-5 py-3 dark:border-white/10">
        <p className="text-[12px] text-gray-500 dark:text-gray-400">
          Showing {filteredScans.length} of 100 Scans
        </p>
        <div className="flex items-center gap-1">
          <ActionTip text="Previous page">
            <button className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 text-gray-400 transition-all duration-200 hover:bg-gray-50 hover:text-gray-600 active:scale-95 dark:border-white/10 dark:hover:bg-white/5 dark:hover:text-gray-300">
              <ChevronLeft size={15} />
            </button>
          </ActionTip>
          <ActionTip text="Next page">
            <button className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 text-gray-400 transition-all duration-200 hover:bg-gray-50 hover:text-gray-600 active:scale-95 dark:border-white/10 dark:hover:bg-white/5 dark:hover:text-gray-300">
              <ChevronRight size={15} />
            </button>
          </ActionTip>
        </div>
      </div>
    </div>
  );
}
