"use client";

import React from "react";
import {
  Box,
  Globe,
  Clock,
  KeyRound,
  FileText,
  ClipboardList,
} from "lucide-react";

interface InfoItem {
  label: string;
  value: string;
  icon: React.ElementType;
  highlight?: boolean;
}

const items: InfoItem[] = [
  { label: "Scan Type", value: "Grey Box", icon: Box },
  { label: "Targets", value: "google.com", icon: Globe },
  { label: "Started At", value: "Nov 22, 09:00AM", icon: Clock },
  { label: "Credentials", value: "2 Active", icon: KeyRound },
  { label: "Files", value: "Control.pdf", icon: FileText },
  {
    label: "Checklists",
    value: "40/350",
    icon: ClipboardList,
    highlight: true,
  },
];

export default function ScanInfoBar() {
  return (
    <div className="grid grid-cols-2 gap-3 rounded-xl border border-gray-200/60 bg-white px-4 py-3 transition-colors duration-300 sm:grid-cols-3 lg:flex lg:items-center lg:justify-between lg:gap-6 lg:px-6 lg:py-4 dark:border-white/5 dark:bg-[#0f1419]">
      {items.map((item) => (
        <div
          key={item.label}
          className="group flex flex-col gap-0.5 transition-all duration-200"
        >
          <span className="flex items-center gap-1.5 text-[11px] font-medium text-gray-400 transition-colors duration-200 group-hover:text-[#0CC8A8] dark:text-gray-500">
            <item.icon
              size={12}
              strokeWidth={1.8}
              className="transition-transform duration-200 group-hover:scale-110"
            />
            {item.label}
          </span>
          <span
            className={`text-[13px] font-semibold transition-colors duration-200 ${
              item.highlight
                ? "text-[#0CC8A8]"
                : "text-gray-800 dark:text-gray-200"
            }`}
          >
            {item.value}
          </span>
        </div>
      ))}
    </div>
  );
}
