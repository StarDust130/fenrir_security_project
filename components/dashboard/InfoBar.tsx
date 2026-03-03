"use client";

import React from "react";
import {
  Clock,
  Building2,
  User,
  Activity,
  CalendarCheck,
  RefreshCw,
  XCircle,
} from "lucide-react";

const infoItems = [
  { label: "Org:", value: "Project X", icon: Building2 },
  { label: "Owner:", value: "Nammagiri", icon: User },
  { label: "Total Scans:", value: "100", icon: Activity },
  { label: "Scheduled:", value: "1000", icon: CalendarCheck },
  { label: "Rescans:", value: "100", icon: RefreshCw },
  { label: "Failed Scans:", value: "100", icon: XCircle },
];

export default function InfoBar() {
  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-2 rounded-xl border border-gray-100 bg-white px-4 py-3 text-[13px] transition-colors duration-300 sm:px-5 dark:border-white/10 dark:bg-[#0f1419]">
      {infoItems.map((item, i) => (
        <React.Fragment key={item.label}>
          <div className="group flex items-center gap-1.5 transition-colors duration-200 hover:text-[#0CC8A8]">
            <item.icon
              size={12}
              className="hidden text-gray-400 transition-colors group-hover:text-[#0CC8A8] sm:block dark:text-gray-500"
            />
            <span className="text-gray-500 dark:text-gray-400">
              {item.label}
            </span>
            <span className="font-semibold text-gray-900 dark:text-white">
              {item.value}
            </span>
          </div>
          {i < infoItems.length - 1 && (
            <div className="hidden h-4 w-px bg-gray-200 sm:block dark:bg-white/10" />
          )}
        </React.Fragment>
      ))}
      <div className="ml-auto flex items-center gap-1.5 text-gray-400 dark:text-gray-500">
        <Clock size={13} className="animate-pulse" />
        <span className="text-[12px]">10 mins ago</span>
      </div>
    </div>
  );
}
