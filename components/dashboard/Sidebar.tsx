"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useTheme } from "./ThemeProvider";
import {
  LayoutDashboard,
  FolderKanban,
  Radar,
  CalendarClock,
  Bell,
  Settings,
  HelpCircle,
  ChevronRight,
  Sun,
  Moon,
  Menu,
  X,
} from "lucide-react";

const mainNav = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    active: true,
  },
  { label: "Projects", icon: FolderKanban, href: "/projects", active: false },
  { label: "Scans", icon: Radar, href: "/scans", active: false },
  { label: "Schedule", icon: CalendarClock, href: "/schedule", active: false },
];

const bottomNav = [
  { label: "Notifications", icon: Bell, href: "/notifications" },
  { label: "Settings", icon: Settings, href: "/settings" },
  { label: "Support", icon: HelpCircle, href: "/support" },
];

/* ─── Tooltip ─── */
function Tip({ text, children }: { text: string; children: React.ReactNode }) {
  return (
    <div className="group/tip relative">
      {children}
      <span className="pointer-events-none absolute left-full top-1/2 z-50 ml-3 -translate-y-1/2 whitespace-nowrap rounded-md bg-gray-900 px-2.5 py-1.5 text-[11px] font-medium text-white opacity-0 shadow-lg transition-all duration-200 group-hover/tip:opacity-100 dark:bg-gray-100 dark:text-gray-900">
        {text}
        <span className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-gray-900 dark:border-r-gray-100" />
      </span>
    </div>
  );
}

export default function Sidebar() {
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const sidebarContent = (
    <div className="flex h-full flex-col border-r border-gray-200/60 bg-white text-gray-800 transition-colors duration-300 dark:border-white/5 dark:bg-[#0f1419] dark:text-white">
      {/* Logo */}
      <div className="flex items-center gap-2.5 px-5 pt-5 pb-6">
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0CC8A8] shadow-md shadow-[#0CC8A8]/30">
          <span className="h-2.5 w-2.5 rounded-full bg-white dark:bg-[#0f1419]" />
        </span>
        <span className="text-lg font-bold tracking-tight">aps</span>
      </div>

      {/* Main Nav */}
      <nav className="flex-1 space-y-1 px-3">
        {mainNav.map((item) => (
          <Tip key={item.label} text={item.label}>
            <Link
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={`group flex items-center gap-3 rounded-lg px-3 py-2.5 text-[13.5px] font-medium transition-all duration-200 ${
                item.active
                  ? "bg-[#0CC8A8] text-white shadow-md shadow-[#0CC8A8]/25"
                  : "text-gray-500 hover:bg-gray-100 hover:text-gray-800 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-200"
              }`}
            >
              <item.icon
                size={18}
                strokeWidth={item.active ? 2.2 : 1.8}
                className={`transition-transform duration-200 ${!item.active ? "group-hover:scale-110" : ""}`}
              />
              {item.label}
            </Link>
          </Tip>
        ))}

        {/* Divider */}
        <div className="my-4 h-px bg-gray-200 dark:bg-white/10" />

        {bottomNav.map((item) => (
          <Tip key={item.label} text={item.label}>
            <Link
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-[13.5px] font-medium text-gray-500 transition-all duration-200 hover:bg-gray-100 hover:text-gray-800 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-200"
            >
              <item.icon
                size={18}
                strokeWidth={1.8}
                className="transition-transform duration-200 group-hover:scale-110"
              />
              {item.label}
            </Link>
          </Tip>
        ))}
      </nav>

      {/* Theme Toggle — pill slider */}
      <div className="px-3 pb-2">
        <Tip text={theme === "dark" ? "Switch to Light" : "Switch to Dark"}>
          <button
            onClick={toggleTheme}
            className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-[13.5px] font-medium text-gray-500 transition-all duration-200 hover:bg-gray-100 hover:text-gray-800 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-200"
          >
            {/* Pill track */}
            <div className="relative flex h-6 w-11 items-center rounded-full bg-gray-200 p-0.5 transition-colors duration-300 dark:bg-white/15">
              {/* Sliding knob */}
              <div
                className={`flex h-5 w-5 items-center justify-center rounded-full bg-white shadow transition-all duration-300 dark:bg-[#0CC8A8] ${
                  theme === "dark" ? "translate-x-5" : "translate-x-0"
                }`}
              >
                <Sun
                  size={12}
                  strokeWidth={2.5}
                  className={`absolute transition-all duration-300 ${
                    theme === "light"
                      ? "rotate-0 scale-100 opacity-100 text-amber-500"
                      : "-rotate-90 scale-0 opacity-0"
                  }`}
                />
                <Moon
                  size={12}
                  strokeWidth={2.5}
                  className={`absolute transition-all duration-300 ${
                    theme === "dark"
                      ? "rotate-0 scale-100 opacity-100 text-white"
                      : "rotate-90 scale-0 opacity-0"
                  }`}
                />
              </div>
            </div>
            <span className="text-[12.5px]">
              {theme === "dark" ? "Dark" : "Light"}
            </span>
          </button>
        </Tip>
      </div>

      {/* User Card */}
      <div className="border-t border-gray-200 p-3 dark:border-white/10">
        <Tip text="Account settings">
          <button className="group flex w-full items-center gap-3 rounded-lg px-2 py-2 transition-all duration-200 hover:bg-gray-100 dark:hover:bg-white/5">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-linear-to-br from-amber-500 to-rose-500 shadow-md shadow-amber-500/20">
              <span className="text-xs font-bold text-white">A</span>
            </div>
            <div className="flex-1 text-left">
              <p className="text-[12px] font-medium leading-tight text-gray-700 dark:text-gray-300">
                admin@edu.com
              </p>
              <p className="text-[11px] text-gray-400 dark:text-gray-500">
                Security Lead
              </p>
            </div>
            <ChevronRight
              size={14}
              className="text-gray-400 transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </button>
        </Tip>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile hamburger */}
      <button
        onClick={() => setMobileOpen(true)}
        className="fixed left-4 top-4 z-50 rounded-lg border border-gray-200 bg-white p-2 text-gray-700 shadow-lg transition-all duration-200 hover:bg-gray-50 active:scale-95 dark:border-white/10 dark:bg-[#0f1419] dark:text-white dark:hover:bg-white/5 lg:hidden"
        aria-label="Open menu"
      >
        <Menu size={20} />
      </button>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          mobileOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setMobileOpen(false)}
      />

      {/* Mobile sidebar */}
      <aside
        className={`fixed left-0 top-0 z-50 h-full w-55 shadow-2xl transition-transform duration-300 ease-out lg:hidden ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          onClick={() => setMobileOpen(false)}
          className="absolute right-3 top-4 z-10 rounded-md p-1 text-gray-400 transition-colors hover:text-gray-700 dark:hover:text-white"
          aria-label="Close menu"
        >
          <X size={18} />
        </button>
        {sidebarContent}
      </aside>

      {/* Desktop sidebar */}
      <aside className="hidden h-screen w-55 shrink-0 lg:block">
        {sidebarContent}
      </aside>
    </>
  );
}
