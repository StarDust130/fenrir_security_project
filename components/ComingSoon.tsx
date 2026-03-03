"use client";

import React from "react";
import { Construction, ArrowLeft, Sparkles, Wrench } from "lucide-react";
import Link from "next/link";

export default function ComingSoon({ pageName }: { pageName: string }) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center p-6">
      <div className="relative flex flex-col items-center text-center">
        {/* Decorative glow ring */}
        <div className="pointer-events-none absolute -inset-24 rounded-full bg-[#0CC8A8]/5 blur-3xl" />
        <div className="pointer-events-none absolute -inset-12 rounded-full bg-[#0CC8A8]/3 blur-2xl" />

        {/* Animated icon cluster */}
        <div className="group relative mb-8">
          {/* Outer pulse */}
          <div className="absolute -inset-4 animate-pulse rounded-3xl bg-[#0CC8A8]/5" />
          <div className="absolute -inset-6 animate-[pulse_3s_ease-in-out_infinite] rounded-3xl bg-[#0CC8A8]/3" />

          {/* Main icon */}
          <div className="relative flex h-24 w-24 items-center justify-center rounded-2xl bg-linear-to-br from-[#0CC8A8] to-[#0AA892] shadow-2xl shadow-[#0CC8A8]/25 transition-all duration-700 hover:rotate-3 hover:scale-110 hover:shadow-[#0CC8A8]/40 sm:h-28 sm:w-28">
            <Construction
              size={44}
              strokeWidth={1.4}
              className="text-white transition-transform duration-700 group-hover:-rotate-12 group-hover:scale-110"
            />
          </div>

          {/* Floating sparkles */}
          <Sparkles
            size={18}
            className="absolute -right-4 -top-3 animate-bounce text-[#0CC8A8]"
            style={{ animationDelay: "0.2s", animationDuration: "2s" }}
          />
          <Sparkles
            size={14}
            className="absolute -left-3 top-1 animate-bounce text-amber-400/70"
            style={{ animationDelay: "0.8s", animationDuration: "2.5s" }}
          />
          <Wrench
            size={14}
            className="absolute -bottom-1 -right-2 animate-bounce text-purple-400/60"
            style={{ animationDelay: "1.2s", animationDuration: "3s" }}
          />
          <Sparkles
            size={10}
            className="absolute -left-1 -bottom-2 animate-bounce text-rose-400/50"
            style={{ animationDelay: "0.5s", animationDuration: "2.2s" }}
          />
        </div>

        {/* Title with gradient */}
        <h1 className="relative mb-3 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
          Coming{" "}
          <span className="bg-linear-to-r from-[#0CC8A8] to-[#0AA892] bg-clip-text text-transparent">
            Soon
          </span>
        </h1>

        {/* Page name badge */}
        <div className="relative mb-5 inline-flex items-center gap-2 rounded-full border border-[#0CC8A8]/20 bg-[#0CC8A8]/5 px-5 py-2 backdrop-blur-sm">
          <span className="h-2 w-2 animate-pulse rounded-full bg-[#0CC8A8] shadow-sm shadow-[#0CC8A8]/50" />
          <span className="text-sm font-semibold text-[#0CC8A8]">
            {pageName}
          </span>
        </div>

        {/* Description */}
        <p className="relative mb-10 max-w-md text-[14px] leading-relaxed text-gray-500 dark:text-gray-400">
          We&apos;re crafting something extraordinary. This feature is under
          active development and will be available soon.
        </p>

        {/* Back button */}
        <Link
          href="/dashboard"
          className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-xl bg-gray-900 px-6 py-3 text-[13px] font-semibold text-white shadow-xl shadow-gray-900/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl active:scale-[0.97] dark:bg-white dark:text-gray-900 dark:shadow-white/10"
        >
          {/* Hover shimmer */}
          <div className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full dark:via-gray-900/10" />
          <ArrowLeft
            size={15}
            className="relative transition-transform duration-200 group-hover:-translate-x-1"
          />
          <span className="relative">Back to Dashboard</span>
        </Link>

        {/* Loading dots */}
        <div className="pointer-events-none mt-12 flex items-center gap-2">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#0CC8A8]/40"
              style={{ animationDelay: `${i * 0.15}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
