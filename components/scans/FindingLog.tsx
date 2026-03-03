"use client";

import React from "react";

type Severity = "Critical" | "High" | "Medium";

interface Finding {
  severity: Severity;
  title: string;
  endpoint: string;
  description: string;
  time: string;
}

const findings: Finding[] = [
  {
    severity: "Critical",
    title: "SQL Injection in Authentication Endpoint",
    endpoint: "/api/users/profile",
    description:
      "Time-based blind SQL injection confirmed on user-controlled input during authentication flow. Exploitation allows database-level access.",
    time: "18:45:23",
  },
  {
    severity: "High",
    title: "Unauthorized Access to User Metadata",
    endpoint: "/api/auth/login",
    description:
      "Authenticated low-privilege user was able to access metadata of other users. Access control checks were missing.",
    time: "18:45:23",
  },
  {
    severity: "Medium",
    title: "Broken Authentication Rate Limiting",
    endpoint: "/api/search",
    description:
      "No effective rate limiting detected on login attempts. Automated brute-force attempts possible.",
    time: "18:45:23",
  },
];

const severityConfig: Record<
  Severity,
  { bg: string; text: string; border: string; dot: string }
> = {
  Critical: {
    bg: "bg-red-500/10",
    text: "bg-red-500 text-white",
    border: "border-red-500/20 hover:border-red-500/40",
    dot: "bg-red-500",
  },
  High: {
    bg: "bg-orange-500/10",
    text: "bg-orange-500 text-white",
    border: "border-orange-500/20 hover:border-orange-500/40",
    dot: "bg-orange-500",
  },
  Medium: {
    bg: "bg-amber-500/10",
    text: "bg-amber-500 text-white",
    border: "border-amber-500/20 hover:border-amber-500/40",
    dot: "bg-amber-500",
  },
};

function FindingCard({ finding }: { finding: Finding }) {
  const config = severityConfig[finding.severity];

  return (
    <div
      className={`group rounded-lg border p-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md sm:p-4 ${config.border} ${config.bg}`}
    >
      {/* Header: badge + time */}
      <div className="mb-2 flex items-center justify-between">
        <span
          className={`rounded-md px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${config.text}`}
        >
          {finding.severity}
        </span>
        <span className="text-[10px] font-medium text-gray-400 dark:text-gray-500">
          {finding.time}
        </span>
      </div>

      {/* Title */}
      <h4 className="mb-1 text-[12.5px] font-semibold leading-snug text-gray-900 transition-colors duration-200 group-hover:text-gray-700 dark:text-white dark:group-hover:text-gray-200">
        {finding.title}
      </h4>

      {/* Endpoint */}
      <p className="mb-2 font-mono text-[11px] text-[#0CC8A8]">
        {finding.endpoint}
      </p>

      {/* Description */}
      <p className="text-[11px] leading-relaxed text-gray-500 dark:text-gray-400">
        {finding.description}
      </p>
    </div>
  );
}

export default function FindingLog() {
  return (
    <div className="flex h-full flex-col">
      {/* Header */}
      <div className="border-b border-gray-200/60 px-4 py-3 dark:border-white/5">
        <h3 className="text-[13px] font-semibold text-gray-900 dark:text-white">
          Finding Log
        </h3>
      </div>

      {/* Cards */}
      <div className="flex-1 space-y-3 overflow-y-auto p-4">
        {findings.map((finding, i) => (
          <FindingCard key={i} finding={finding} />
        ))}
      </div>
    </div>
  );
}
