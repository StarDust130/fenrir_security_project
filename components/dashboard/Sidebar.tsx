"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
  X,
} from "lucide-react";

/* ─── Event emitter so TopBar can open mobile sidebar ─── */
let openSidebarCallbacks: Array<() => void> = [];
export function triggerOpenSidebar() {
  openSidebarCallbacks.forEach((cb) => cb());
}

const mainNav = [
  { label: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
  { label: "Projects", icon: FolderKanban, href: "/projects" },
  { label: "Scans", icon: Radar, href: "/scans" },
  { label: "Schedule", icon: CalendarClock, href: "/schedule" },
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
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  /* Listen for TopBar hamburger clicks */
  useEffect(() => {
    const cb = () => setMobileOpen(true);
    openSidebarCallbacks.push(cb);
    return () => {
      openSidebarCallbacks = openSidebarCallbacks.filter((c) => c !== cb);
    };
  }, []);

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
        {mainNav.map((item) => {
          const isActive = pathname.startsWith(item.href);
          return (
            <Tip key={item.label} text={item.label}>
              <Link
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`group flex items-center gap-3 rounded-lg px-3 py-2.5 text-[13.5px] font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-[#0CC8A8] text-white shadow-md shadow-[#0CC8A8]/25"
                    : "text-gray-500 hover:bg-gray-100 hover:text-gray-800 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-200"
                }`}
              >
                <item.icon
                  size={18}
                  strokeWidth={isActive ? 2.2 : 1.8}
                  className={`transition-transform duration-200 ${!isActive ? "group-hover:scale-110" : ""}`}
                />
                {item.label}
              </Link>
            </Tip>
          );
        })}

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

      {/* ─── Theme Toggle — animated gradient card ─── */}
      <div className="px-3 pb-2">
        <button
          onClick={toggleTheme}
          className="group relative flex w-full cursor-pointer items-center gap-3 overflow-hidden rounded-xl p-3 transition-all duration-500 hover:scale-[1.02] active:scale-[0.98]"
          style={{
            background:
              theme === "dark"
                ? "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)"
                : "linear-gradient(135deg, #fef9c3 0%, #fde68a 50%, #fbbf24 100%)",
          }}
        >
          {/* Animated shimmer on hover */}
          <div
            className={`absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${
              theme === "dark"
                ? "bg-linear-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20"
                : "bg-linear-to-r from-amber-300/30 via-orange-300/30 to-yellow-300/30"
            }`}
          />

          {/* Icon with rotation animation */}
          <div className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-white/15 backdrop-blur-sm">
            <Sun
              size={20}
              strokeWidth={2}
              className={`absolute transition-all duration-500 ease-[cubic-bezier(0.68,-0.55,0.27,1.55)] ${
                theme === "light"
                  ? "rotate-0 scale-100 opacity-100 text-amber-600"
                  : "rotate-360 scale-0 opacity-0 text-amber-400"
              }`}
            />
            <Moon
              size={20}
              strokeWidth={2}
              className={`absolute transition-all duration-500 ease-[cubic-bezier(0.68,-0.55,0.27,1.55)] ${
                theme === "dark"
                  ? "rotate-0 scale-100 opacity-100 text-indigo-300"
                  : "-rotate-360 scale-0 opacity-0 text-indigo-600"
              }`}
            />
          </div>

          {/* Label + subtitle */}
          <div className="relative flex flex-col items-start">
            <span
              className={`text-[12px] font-bold leading-tight transition-colors duration-300 ${
                theme === "dark" ? "text-indigo-200" : "text-amber-800"
              }`}
            >
              {theme === "dark" ? "Dark Mode" : "Light Mode"}
            </span>
            <span
              className={`flex items-center gap-1 text-[10px] leading-tight transition-colors duration-300 ${
                theme === "dark" ? "text-indigo-400/70" : "text-amber-600/70"
              }`}
            ></span>
          </div>

          {/* Decorative dots */}
          <div className="absolute right-3 top-2">
            <div
              className={`h-1 w-1 rounded-full transition-all duration-700 ${
                theme === "dark"
                  ? "bg-white/40 shadow-[4px_6px_0_0_rgba(255,255,255,0.2),8px_2px_0_0_rgba(255,255,255,0.15),-2px_8px_0_0_rgba(255,255,255,0.1)]"
                  : "bg-orange-400/50 shadow-[4px_6px_0_0_rgba(251,191,36,0.3),8px_2px_0_0_rgba(251,191,36,0.2),-2px_8px_0_0_rgba(251,191,36,0.15)]"
              }`}
            />
          </div>
          <div className="absolute bottom-2 right-6">
            <div
              className={`h-0.5 w-0.5 rounded-full transition-all duration-700 ${
                theme === "dark" ? "bg-white/25" : "bg-orange-300/40"
              }`}
            />
          </div>
        </button>
      </div>

      {/* User Card */}
      <div className="border-t border-gray-200 p-3 dark:border-white/10">
        <Tip text="Account settings">
          <button className="group flex w-full items-center gap-3 rounded-lg px-2 py-2 transition-all duration-200 hover:bg-gray-100 dark:hover:bg-white/5">
            <div className="flex h-10 w-10 overflow-hidden rounded-full shadow-md">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://api.dicebear.com/7.x/lorelei/svg?seed=noobmaster69"
                alt="Profile"
                className="h-full w-full object-cover rounded-full"
              />
              
            </div>
            <div className="flex-1 text-left">
              <p className="text-[12px] font-medium leading-tight text-gray-700 dark:text-gray-300">
                noobmaster69@lol.dev
              </p>
              <p className="text-[11px] text-gray-400 dark:text-gray-500">
                Bug Slayer 🐛⚔️
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
