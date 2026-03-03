"use client";

import React from "react";
import { ShieldX, AlertTriangle, ShieldAlert, SearchCheck } from "lucide-react";

interface SeverityCardData {
  label: string;
  count: number;
  change: string;
  direction: "up" | "down";
  icon: React.ReactNode;
  iconBg: string;
  iconRing: string;
  changeColor: string;
}

const cards: SeverityCardData[] = [
  {
    label: "Critical Severity",
    count: 86,
    change: "+2% increase from yesterday",
    direction: "up",
    icon: <ShieldX size={18} className="text-white" />,
    iconBg: "bg-[#ef4444]",
    iconRing: "ring-[#ef4444]/20",
    changeColor: "text-[#ef4444]",
  },
  {
    label: "High Severity",
    count: 16,
    change: "+0.9% increase from yesterday",
    direction: "up",
    icon: <AlertTriangle size={18} className="text-white" />,
    iconBg: "bg-[#f59e0b]",
    iconRing: "ring-[#f59e0b]/20",
    changeColor: "text-[#f59e0b]",
  },
  {
    label: "Medium Severity",
    count: 26,
    change: "-0.9% decrease from yesterday",
    direction: "down",
    icon: <ShieldAlert size={18} className="text-white" />,
    iconBg: "bg-[#f59e0b]",
    iconRing: "ring-[#f59e0b]/20",
    changeColor: "text-[#22c55e]",
  },
  {
    label: "Low Severity",
    count: 16,
    change: "+0.9% increase from yesterday",
    direction: "up",
    icon: <SearchCheck size={18} className="text-white" />,
    iconBg: "bg-[#3b82f6]",
    iconRing: "ring-[#3b82f6]/20",
    changeColor: "text-[#3b82f6]",
  },
];

export default function SeverityCards() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => (
        <div
          key={card.label}
          className="group cursor-default rounded-xl border border-gray-100 bg-white px-5 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg dark:border-white/10 dark:bg-[#0f1419] dark:hover:border-white/20 dark:hover:shadow-black/30"
        >
          <div className="flex items-center justify-between">
            <p className="text-[13px] font-medium text-gray-500 dark:text-gray-400">
              {card.label}
            </p>
            <div
              className={`flex h-9 w-9 items-center justify-center rounded-full ${card.iconBg} ring-4 ${card.iconRing} transition-all duration-300 group-hover:scale-110 group-hover:ring-8`}
            >
              {card.icon}
            </div>
          </div>
          <p className="mt-2 text-3xl font-bold text-gray-900 transition-colors dark:text-white">
            {card.count}
          </p>
          <p className={`mt-1 text-[11px] font-medium ${card.changeColor}`}>
            {card.direction === "up" ? "↑" : "↓"} {card.change}
          </p>
        </div>
      ))}
    </div>
  );
}
