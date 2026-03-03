"use client";

import React, { useState } from "react";
import { ChevronDown, X, RefreshCw } from "lucide-react";
import FindingLog from "@/components/scans/FindingLog";

/* ─── Log entry data ─── */
interface LogEntry {
  time: string;
  text: string;
  highlights?: { text: string; type: "link" | "code" | "warning" | "error" }[];
}

const activityLog: LogEntry[] = [
  {
    time: "09:00:00",
    text: "I'll begin a systematic penetration test on helpdesk.democorp.com. Let me start with reconnaissance and enumeration.",
    highlights: [{ text: "helpdesk.democorp.com", type: "link" }],
  },
  {
    time: "09:01:00",
    text: "Good! target is online. Now let me perform port scanning to identify running services.",
  },
  {
    time: "09:02:00",
    text: "Excellent reconnaissance results:\n    - helpdesk.democorp.com: Apache httpd 2.4.65 on port 80 (web server)\nLet me probe the web server on target first to understand its structure.",
    highlights: [{ text: "helpdesk.democorp.com", type: "link" }],
  },
  {
    time: "09:03:00",
    text: 'Great! I found a login page for a Help Desk Platform. I can see a useful comment: "TODO: Delete the testing account (test:test)". Let me test this credential. The login redirects to /password/test. Let me follow that path and explore it.',
    highlights: [
      {
        text: '"TODO: Delete the testing account (test:test)"',
        type: "warning",
      },
      { text: "/password/test", type: "code" },
    ],
  },
  {
    time: "09:04:00",
    text: "The POST method is not allowed on /password/test. Let me check what the JavaScript does - it posts to '#' which means the current page. Let me try a different approach.",
  },
  {
    time: "09:05:00",
    text: "It redirects back to /password/test. Let me check if there's an /api endpoint or look for other paths. Let me also try exploring with the test:test password directly on other endpoints.",
    highlights: [{ text: "test:test", type: "code" }],
  },
  {
    time: "09:06:00",
    text: "Great! I can access the dashboard using the 'X-UserId: 10032' header. The dashboard shows \"Welcome, John Doe\". This suggests an **IDOR vulnerability** - I can access any user's dashboard by just changing the X-UserId header. Let me explore more of the application...",
    highlights: [
      { text: "'X-UserId: 10032'", type: "error" },
      { text: "**IDOR vulnerability**", type: "warning" },
    ],
  },
];

/* ─── Render log text with highlighted segments ─── */
function renderLogText(entry: LogEntry) {
  const text = entry.text;
  if (!entry.highlights?.length) {
    return <span className="whitespace-pre-wrap">{text}</span>;
  }

  const parts: React.ReactNode[] = [];
  let remaining = text;
  let key = 0;

  for (const hl of entry.highlights) {
    const idx = remaining.indexOf(hl.text);
    if (idx === -1) continue;

    // Text before highlight
    if (idx > 0) {
      parts.push(
        <span key={key++} className="whitespace-pre-wrap">
          {remaining.slice(0, idx)}
        </span>,
      );
    }

    // Highlighted text
    const colorClass =
      hl.type === "link"
        ? "text-[#0CC8A8] underline decoration-[#0CC8A8]/30"
        : hl.type === "code"
          ? "rounded bg-gray-700/50 px-1.5 py-0.5 font-mono text-amber-300 dark:bg-white/10"
          : hl.type === "error"
            ? "rounded bg-red-500/20 px-1.5 py-0.5 font-mono text-red-400"
            : "text-amber-400 italic";

    parts.push(
      <span key={key++} className={colorClass}>
        {hl.text}
      </span>,
    );

    remaining = remaining.slice(idx + hl.text.length);
  }

  if (remaining) {
    parts.push(
      <span key={key++} className="whitespace-pre-wrap">
        {remaining}
      </span>,
    );
  }

  return <>{parts}</>;
}

export default function LiveConsole() {
  const [activeTab, setActiveTab] = useState<"activity" | "verification">(
    "activity",
  );
  const [collapsed, setCollapsed] = useState(false);
  const [closed, setClosed] = useState(false);

  if (closed) return null;

  return (
    <div className="flex flex-col overflow-hidden rounded-xl border border-gray-200/60 bg-white transition-colors duration-300 dark:border-white/5 dark:bg-[#0f1419]">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-200/60 px-4 py-3 sm:px-5 dark:border-white/5">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-500 shadow-sm shadow-emerald-500/50" />
            <span className="text-sm font-semibold text-gray-900 dark:text-white">
              Live Scan Console
            </span>
          </div>
          {/* Running badge */}
          <span className="flex items-center gap-1.5 rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-[11px] font-medium text-gray-500 dark:border-white/10 dark:bg-white/5 dark:text-gray-400">
            <RefreshCw size={10} className="animate-spin" />
            Running...
          </span>
        </div>

        {/* Collapse / Close */}
        <div className="flex items-center gap-1">
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="rounded-md p-1.5 text-gray-400 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-white/5 dark:hover:text-gray-300"
            aria-label="Toggle collapse"
          >
            <ChevronDown
              size={16}
              className={`transition-transform duration-200 ${collapsed ? "rotate-180" : ""}`}
            />
          </button>
          <button
            onClick={() => setClosed(true)}
            className="rounded-md p-1.5 text-gray-400 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-white/5 dark:hover:text-gray-300"
            aria-label="Close console"
          >
            <X size={16} />
          </button>
        </div>
      </div>

      {/* Body */}
      {!collapsed && (
        <div className="flex flex-col lg:flex-row">
          {/* Left — Activity Log */}
          <div className="flex flex-1 flex-col border-b border-gray-200/60 lg:border-b-0 lg:border-r dark:border-white/5">
            {/* Tabs */}
            <div className="flex gap-4 border-b border-gray-200/60 px-4 sm:px-5 dark:border-white/5">
              <button
                onClick={() => setActiveTab("activity")}
                className={`relative py-3 text-[13px] font-medium transition-colors duration-200 ${
                  activeTab === "activity"
                    ? "text-[#0CC8A8]"
                    : "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                }`}
              >
                Activity Log
                {activeTab === "activity" && (
                  <span className="absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-[#0CC8A8]" />
                )}
              </button>
              <button
                onClick={() => setActiveTab("verification")}
                className={`relative py-3 text-[13px] font-medium transition-colors duration-200 ${
                  activeTab === "verification"
                    ? "text-[#0CC8A8]"
                    : "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                }`}
              >
                Verification Loops
                {activeTab === "verification" && (
                  <span className="absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-[#0CC8A8]" />
                )}
              </button>
            </div>

            {/* Log content */}
            <div className="max-h-96 overflow-y-auto p-4 font-mono text-[12px] leading-relaxed text-gray-300 sm:p-5 sm:text-[12.5px] dark:text-gray-400">
              {activeTab === "activity" ? (
                <div className="space-y-5">
                  {activityLog.map((entry) => (
                    <div key={entry.time}>
                      <span className="mr-2 text-gray-500 dark:text-gray-600">
                        [{entry.time}]
                      </span>
                      <span className="text-gray-700 dark:text-gray-300">
                        {renderLogText(entry)}
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex h-40 items-center justify-center text-gray-400 dark:text-gray-500">
                  No verification loops recorded yet.
                </div>
              )}
            </div>
          </div>

          {/* Right — Finding Log */}
          <div className="w-full shrink-0 lg:w-80 xl:w-96">
            <FindingLog />
          </div>
        </div>
      )}
    </div>
  );
}
