"use client";

import React from "react";
import {
  Radar,
  Network,
  FlaskConical,
  ShieldCheck,
  FileText,
} from "lucide-react";

type StepStatus = "active" | "pending" | "completed";

interface Step {
  label: string;
  icon: React.ElementType;
  status: StepStatus;
}

const steps: Step[] = [
  { label: "Spidering", icon: Radar, status: "active" },
  { label: "Mapping", icon: Network, status: "pending" },
  { label: "Testing", icon: FlaskConical, status: "pending" },
  { label: "Validating", icon: ShieldCheck, status: "pending" },
  { label: "Reporting", icon: FileText, status: "pending" },
];

/* ─── Circular Progress ─── */
function CircularProgress({ value }: { value: number }) {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div className="relative flex h-24 w-24 items-center justify-center sm:h-28 sm:w-28">
      <svg
        className="-rotate-90"
        viewBox="0 0 100 100"
        width="100%"
        height="100%"
      >
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth="6"
          className="text-gray-200 dark:text-white/10"
        />
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          stroke="#0CC8A8"
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="transition-all duration-1000 ease-out"
        />
      </svg>
      <div className="absolute flex flex-col items-center">
        <span className="text-xl font-bold text-gray-900 sm:text-2xl dark:text-white">
          {value}%
        </span>
        <span className="text-[9px] font-medium text-[#0CC8A8] sm:text-[10px]">
          InProgress
        </span>
      </div>
    </div>
  );
}

/* ─── Pipeline Stepper ─── */
export default function ScanProgress() {
  return (
    <div className="rounded-xl border border-gray-200/60 bg-white p-4 transition-colors duration-300 sm:p-6 dark:border-white/5 dark:bg-[#0f1419]">
      <div className="flex flex-col items-center gap-6 lg:flex-row lg:gap-8">
        {/* Circular progress */}
        <div className="shrink-0">
          <CircularProgress value={0} />
        </div>

        {/* Pipeline — lines through icon centers */}
        <div className="relative flex w-full flex-1 items-start">
          {/* Continuous connector line behind icons */}
          <div className="pointer-events-none absolute left-0 right-0 top-6 flex items-center sm:top-7">
            {steps.map((step, i) => {
              if (i === steps.length - 1) return null;
              const isActive = step.status === "active";
              const isCompleted = step.status === "completed";
              // Each segment spans from center of step i to center of step i+1
              // With flex-1 columns, each center is at (i+0.5)/total * 100%
              const total = steps.length;
              const from = ((i + 0.5) / total) * 100;
              const to = ((i + 1.5) / total) * 100;
              return (
                <div
                  key={i}
                  className="absolute h-0.5"
                  style={{ left: `${from}%`, width: `${to - from}%` }}
                >
                  <div
                    className={`h-full w-full rounded-full transition-colors duration-300 ${
                      isActive || isCompleted
                        ? "bg-[#0CC8A8]"
                        : "bg-gray-200 dark:bg-white/10"
                    }`}
                  />
                </div>
              );
            })}
          </div>

          {/* Step columns */}
          {steps.map((step) => {
            const isActive = step.status === "active";
            const isCompleted = step.status === "completed";

            return (
              <div
                key={step.label}
                className="relative z-10 flex flex-1 flex-col items-center"
              >
                {/* Icon circle */}
                <div
                  className={`group relative flex h-12 w-12 items-center justify-center rounded-full transition-all duration-300 sm:h-14 sm:w-14 ${
                    isActive
                      ? "bg-[#0CC8A8] text-white shadow-lg shadow-[#0CC8A8]/30"
                      : isCompleted
                        ? "bg-[#0CC8A8]/20 text-[#0CC8A8] dark:bg-[#0CC8A8]/10"
                        : "bg-gray-100 text-gray-400 hover:scale-105 dark:bg-white/5 dark:text-gray-500"
                  }`}
                >
                  {isActive && (
                    <>
                      <span className="absolute inset-0 animate-ping rounded-full bg-[#0CC8A8]/20" />
                      <span className="absolute -inset-1 animate-pulse rounded-full border-2 border-[#0CC8A8]/30" />
                    </>
                  )}
                  <step.icon
                    size={20}
                    strokeWidth={isActive ? 2.2 : 1.5}
                    className="relative z-10"
                  />
                </div>

                {/* Label */}
                <span
                  className={`mt-2 text-[11px] font-medium transition-colors duration-200 sm:text-xs ${
                    isActive
                      ? "text-[#0CC8A8]"
                      : isCompleted
                        ? "text-gray-700 dark:text-gray-300"
                        : "text-gray-400 dark:text-gray-500"
                  }`}
                >
                  {step.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
