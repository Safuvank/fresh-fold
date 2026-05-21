"use client";

import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useVerifyOtp } from "../hooks/useVerifyOtp";
import { ShieldCheck, ArrowRight, ArrowLeft } from "lucide-react";

const Logo = ({ className = "text-white" }: { className?: string }) => (
  <div className={`flex items-center gap-2.5 ${className}`}>
    <div
      className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 shadow-sm ${
        className.includes("text-white")
          ? "bg-white/20 backdrop-blur-md text-white"
          : "bg-blue-600 text-white"
      }`}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 8h16M4 12h16M4 16h16" />
      </svg>
    </div>

    <span className="text-2xl font-extrabold tracking-tight">FreshFold</span>
  </div>
);

export default function VerifyOtpForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email") || "";

  const [otp, setOtp] = useState("");
  const { mutate, isPending } = useVerifyOtp();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!otp) return;

    mutate(
      {
        email,
        otp,
      },
      {
        onSuccess: () => {
          console.log("OTP VERIFIED");

          router.push(
            `/auth/reset-password?email=${encodeURIComponent(email)}`,
          );
        },

        onError: (error: any) => {
          console.log("VERIFY OTP ERROR:", error.response?.data);
        },
      },
    );
  };

  return (
    <div className="w-full max-w-md animate-in fade-in slide-in-from-right-4 duration-500">
      {/* Mobile viewport Logo handling */}
      <div className="lg:hidden mb-12 flex justify-center">
        <Logo className="text-slate-900" />
      </div>

      {/* Header Block */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-2 tracking-tight">
          Verify Security Code
        </h2>
        <p className="text-slate-500 font-medium text-sm leading-relaxed">
          We sent a 6-digit one-time password to{" "}
          <span className="font-semibold text-slate-800 break-all">
            {email || "your email"}
          </span>
          .
        </p>
      </div>

      {/* Main Form Layer */}
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="space-y-1.5">
          <label className="text-sm font-semibold text-slate-700">
            One-Time Password (OTP)
          </label>

          <div className="relative">
            <ShieldCheck className="absolute left-4 top-3.5 h-5 w-5 text-slate-400 z-10" />
            <input
              type="text"
              maxLength={6}
              required
              placeholder="000000"
              value={otp}
              onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))} // Restricts input to digits only
              className="w-full pl-11 pr-4 py-3.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all text-slate-900 font-bold text-center tracking-[10px] text-xl bg-slate-50/50 focus:bg-white placeholder:tracking-normal placeholder:font-normal placeholder:text-slate-300"
            />
          </div>
        </div>

        {/* Action Button */}
        <button
          type="submit"
          disabled={isPending || otp.length < 6}
          className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold text-base hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 mt-6 shadow-lg shadow-blue-600/20 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none"
        >
          {isPending ? "Verifying..." : "Verify OTP"}
          {!isPending && <ArrowRight className="h-5 w-5" />}
        </button>
      </form>

      {/* Navigation Footer Controls */}
      <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm font-medium">
        <a
          href="/auth/login"
          className="inline-flex items-center gap-1.5 font-bold text-slate-400 hover:text-blue-600 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Sign In
        </a>

        <button
          type="button"
          disabled={isPending}
          className="font-bold text-blue-600 hover:text-blue-700 transition-colors disabled:opacity-50"
          onClick={() =>
            alert("A new OTP code has been dispatched to your email address.")
          }
        >
          Resend Code
        </button>
      </div>
    </div>
  );
}
