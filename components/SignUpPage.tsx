"use client";

import React, { useState } from "react";
import { LuCheck, LuEye } from "react-icons/lu";
import { FaApple, FaMeta, FaStar } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { RiEyeCloseLine } from "react-icons/ri";

const features = [
  "Effortlessly spider and map targets to uncover hidden security flaws",
  "Deliver high-quality, validated findings in hours, not weeks.",
  "Generate professional, enterprise-grade security reports automatically.",
];

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#080808] font-(family-name:--font-inter)">
      {/* ── Background Gradient Layer ── */}
      {/* Teal glow — top-left, very subtle */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-[5%] -top-[10%] h-150 w-150 rounded-full opacity-100"
        style={{
          background:
            "radial-gradient(circle, rgba(12,200,168,0.18) 0%, rgba(12,200,168,0.05) 40%, transparent 70%)",
        }}
      />
      {/* Bright teal-cyan hotspot — center-bottom */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[5%] left-[30%] h-125 w-125 rounded-full opacity-100"
        style={{
          background:
            "radial-gradient(circle, rgba(12,200,168,0.22) 0%, rgba(6,150,136,0.10) 45%, transparent 70%)",
        }}
      />
      {/* Warm amber/orange glow — bottom center-right */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-[15%] left-[25%] h-175 w-200 rounded-full opacity-100"
        style={{
          background:
            "radial-gradient(circle, rgba(234,138,30,0.30) 0%, rgba(180,83,9,0.18) 40%, transparent 70%)",
        }}
      />
      {/* Deep red glow — far bottom-right edge */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-[20%] -right-[5%] h-150 w-125 rounded-full opacity-100"
        style={{
          background:
            "radial-gradient(circle, rgba(185,28,28,0.35) 0%, rgba(127,29,29,0.15) 45%, transparent 70%)",
        }}
      />

      {/* ── Logo — absolute top-left on all screens ── */}
      <div className="absolute left-5 top-5 z-20 flex items-center gap-2 sm:left-8 sm:top-8 lg:left-12 lg:top-10">
        <span className="block h-3.5 w-3.5 rounded-full border-[2.5px] border-[#0CC8A8] bg-[#0CC8A8] shadow-[0_0_6px_rgba(12,200,168,0.4)]" />
        <span className="text-lg font-bold tracking-tight text-white">aps</span>
      </div>

      {/* ── Main Content ── */}
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-335 items-center px-5 py-20 sm:px-8 lg:px-14">
        {/* ━━ Left Side — desktop only ━━ */}
        <div
          className="hidden shrink-0 pr-16 text-white lg:block"
          style={{ width: "520px" }}
        >
          {/* Spacer for logo above */}
          <div className="mb-0" />

          {/* Headline — "Expert level Cybersecurity" on ONE line */}
          <h1 className="whitespace-nowrap text-[2.15rem] font-semibold leading-[1.2] tracking-[-0.02em] xl:text-[2.4rem]">
            Expert level Cybersecurity
            <br />
            <span className="whitespace-nowrap">
              in <em className="font-bold italic text-[#0CC8A8]">hours</em> not
              weeks.
            </span>
          </h1>

          {/* Features */}
          <div className="mt-8">
            <p className="mb-4 text-[13px] font-bold text-gray-400/80">
              What&apos;s included
            </p>
            <ul className="space-y-3">
              {features.map((text) => (
                <li key={text} className="flex items-start gap-2.5">
                  <LuCheck
                    className="mt-0.75 shrink-0 text-[#0CC8A8]"
                    size={15}
                    strokeWidth={3}
                  />
                  <span className="text-[13.5px] leading-[1.55] text-gray-300/90">
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Trustpilot */}
          <div className="mt-24">
            <div className="mb-0.5 flex items-center gap-1.5">
              <FaStar className="text-[#00B67A]" size={13} />
              <span className="text-[13px] font-semibold text-white">
                Trustpilot
              </span>
            </div>
            <p className="text-[13px] text-gray-500">
              Rated <span className="font-bold text-white">4.5/5.0</span> (100k+
              reviews)
            </p>
          </div>
        </div>

        {/* ━━ Right Side — Form Card ━━ */}
        <div className="mx-auto w-full max-w-95 sm:max-w-100 lg:mx-0 lg:ml-auto">
          <div className="rounded-2xl bg-white px-6 py-7 shadow-2xl shadow-black/50 sm:rounded-[22px] sm:px-7 sm:py-8">
            {/* Header */}
            <div className="mb-5 text-center">
              <h2 className="text-[22px] font-bold text-gray-900 sm:text-2xl">
                Sign up
              </h2>
              <p className="mt-1 text-[13px] text-gray-500">
                Already have an account?{" "}
                <a
                  href="#"
                  className="font-medium text-[#0CC8A8] hover:underline"
                >
                  Log in
                </a>
              </p>
            </div>

            {/* Form */}
            <form
              className="flex flex-col gap-3"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="text"
                placeholder="First name*"
                className="h-10.5 w-full rounded-md border border-gray-200 bg-white px-3.5 text-[13px] text-gray-900 placeholder:text-gray-400 outline-none transition focus:border-[#0CC8A8] focus:ring-2 focus:ring-[#0CC8A8]/20"
              />
              <input
                type="text"
                placeholder="Last name*"
                className="h-10.5 w-full rounded-md border border-gray-200 bg-white px-3.5 text-[13px] text-gray-900 placeholder:text-gray-400 outline-none transition focus:border-[#0CC8A8] focus:ring-2 focus:ring-[#0CC8A8]/20"
              />
              <input
                type="email"
                placeholder="Email address*"
                className="h-10.5 w-full rounded-md border border-gray-200 bg-white px-3.5 text-[13px] text-gray-900 placeholder:text-gray-400 outline-none transition focus:border-[#0CC8A8] focus:ring-2 focus:ring-[#0CC8A8]/20"
              />

              {/* Password */}
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password (8+ characters)*"
                  className="h-10.5 w-full rounded-md border border-gray-200 bg-white px-3.5 pr-10 text-[13px] text-gray-900 placeholder:text-gray-400 outline-none transition focus:border-[#0CC8A8] focus:ring-2 focus:ring-[#0CC8A8]/20"
                />
                <button
                  type="button"
                  tabIndex={-1}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 transition-colors hover:text-gray-600 group"
                  title={showPassword ? "Hide password" : "Show password"}
                >
                  {!showPassword ? (
                    <RiEyeCloseLine size={15} />
                  ) : (
                    <LuEye size={15} />
                  )}
                </button>
              </div>

              {/* Terms */}
              <label className="flex cursor-pointer items-start gap-2 pt-0.5">
                <input
                  type="checkbox"
                  className="mt-0.75 h-3.5 w-3.5 shrink-0 rounded border-gray-300 accent-[#0CC8A8] focus:ring-[#0CC8A8]"
                />
                <span className="text-[11px] leading-normal text-gray-500">
                  I agree to Aps&apos;s{" "}
                  <a
                    href="#"
                    className="font-medium text-blue-600 underline hover:text-gray-900"
                  >
                    Terms &amp; Conditions
                  </a>{" "}
                  and acknowledge the{" "}
                  <a
                    href="#"
                    className="font-medium text-blue-600 underline hover:text-gray-900"
                  >
                    Privacy Policy
                  </a>
                </span>
              </label>

              {/* Submit */}
              <button
                type="submit"
                className="mt-1 h-10.5 w-full rounded-full bg-[#0CC8A8] text-[13px] font-bold text-white shadow-lg shadow-[#0CC8A8]/20 transition-colors hover:bg-[#0ab899] active:bg-[#099e85]"
              >
                Create account
              </button>
            </form>

            {/* Social Logins */}
            <div className="mt-3.5 grid grid-cols-3 gap-2.5">
              <button
                aria-label="Sign up with Apple"
                className="flex h-10.5 items-center justify-center rounded-full bg-black text-white transition-opacity hover:opacity-80"
              >
                <FaApple size={18} />
              </button>
              <button
                aria-label="Sign up with Google"
                className="flex h-10.5 items-center justify-center rounded-full border border-gray-100 bg-[#F5F5F5] transition-colors hover:bg-gray-200"
              >
                <FcGoogle size={18} />
              </button>
              <button
                aria-label="Sign up with Meta"
                className="flex h-10.5 items-center justify-center rounded-full bg-[#3084f3] text-white transition-opacity hover:opacity-80"
              >
                <FaMeta size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
