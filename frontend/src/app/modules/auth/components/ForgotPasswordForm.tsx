

"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useForgotPassword } from "../hooks/useForgotPassword";
import { Mail, ArrowRight, ArrowLeft } from "lucide-react";

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

export default function ForgotPasswordForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const { mutate, isPending } = useForgotPassword();

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!email) return;

//     mutate(email, {
//       onSuccess: () => {
//         router.push(`/verify-otp?email=${encodeURIComponent(email)}`);
//       },
//     });
//   };


const handleSubmit = (
  e: React.FormEvent
) => {
  e.preventDefault();

  if (!email) return;

  console.log("Sending OTP...");

  mutate(email, {
    onSuccess: (data) => {
      console.log(
        "OTP Success",
        data
      );

      router.push(
        `/auth/verify-otp?email=${encodeURIComponent(
          email
        )}`
      );
    },

    onError: (error) => {
      console.log(
        "OTP Error",
        error
      );
    },
  });
};

  return (
    <div className="w-full max-w-md animate-in fade-in slide-in-from-right-4 duration-500">
      {/* Mobile Logo Viewport handling */}
      <div className="lg:hidden mb-12 flex justify-center">
        <Logo className="text-slate-900" />
      </div>

      {/* Header Block */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-2 tracking-tight">
          Forgot Password?
        </h2>
        <p className="text-slate-500 font-medium text-sm">
          Enter your email address and we&apos;ll send you a secure OTP code.
        </p>
      </div>

      {/* Main Interactive Form Layer */}
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="space-y-1.5">
          <label className="text-sm font-semibold text-slate-700">
            Email address
          </label>

          <div className="relative">
            <Mail className="absolute left-4 top-3.5 h-5 w-5 text-slate-400" />
            <input
              type="email"
              required
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-11 pr-4 py-3.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all text-slate-900 font-medium bg-slate-50/50 focus:bg-white"
            />
          </div>
        </div>

        {/* Primary Action Control Button */}
        <button
          type="submit"
          disabled={isPending || !email}
          className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold text-base hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 mt-6 shadow-lg shadow-blue-600/20 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none"
        >
          {isPending ? "Sending OTP..." : "Send OTP"}
          {!isPending && <ArrowRight className="h-5 w-5" />}
        </button>
      </form>

      {/* Return to Login Trigger Link */}
      <p className="mt-8 text-center text-sm font-medium text-slate-600">
        <a
          href="/auth/login"
          className="inline-flex items-center gap-1.5 font-bold text-slate-400 hover:text-blue-600 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Sign In
        </a>
      </p>
    </div>
  );
}