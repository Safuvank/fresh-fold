// "use client";

// import { useState } from "react";

// import {
//   useRouter,
//   useSearchParams,
// } from "next/navigation";

// import { useResetPassword } from "../hooks/useResetPassword";

// export default function ResetPasswordForm() {
//   const router = useRouter();

//   const searchParams = useSearchParams();

//   const email = searchParams.get("email") || "";

//   const [password, setPassword] = useState("");

//   const [confirmPassword, setConfirmPassword] =
//     useState("");

//   const { mutate, isPending } =
//     useResetPassword();

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     if (password !== confirmPassword) {
//       return alert("Passwords do not match");
//     }

//     mutate(
//       {
//         email,
//         password,
//       },
//       {
//         onSuccess: () => {
//           router.push("/login");
//         },
//       }
//     );
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="space-y-4"
//     >
//       <input
//         type="password"
//         placeholder="New password"
//         value={password}
//         onChange={(e) =>
//           setPassword(e.target.value)
//         }
//         className="w-full border p-3 rounded"
//       />

//       <input
//         type="password"
//         placeholder="Confirm password"
//         value={confirmPassword}
//         onChange={(e) =>
//           setConfirmPassword(e.target.value)
//         }
//         className="w-full border p-3 rounded"
//       />

//       <button
//         disabled={isPending}
//         className="bg-black text-white px-4 py-3 rounded w-full"
//       >
//         Reset Password
//       </button>
//     </form>
//   );
// }




"use client";

import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useResetPassword } from "../hooks/useResetPassword";
import { Lock, Eye, EyeOff, ArrowRight, ArrowLeft } from "lucide-react";

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

export default function ResetPasswordForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email") || "";

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  
  // Independent visibility toggles for each password field
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { mutate, isPending } = useResetPassword();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      return alert("Passwords do not match");
    }

    mutate(
      {
        email,
        password,
      },
      {
        onSuccess: () => {
          router.push("/auth/login");
        },
      }
    );
  };

  return (
    <div className="w-full max-w-md animate-in fade-in slide-in-from-right-4 duration-500">
      {/* Mobile view Logo alignment */}
      <div className="lg:hidden mb-12 flex justify-center">
        <Logo className="text-slate-900" />
      </div>

      {/* Header Block */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-2 tracking-tight">
          Reset Password
        </h2>
        <p className="text-slate-500 font-medium text-sm">
          Please enter and confirm your new secure password below.
        </p>
      </div>

      <form className="space-y-4" onSubmit={handleSubmit}>
        
        {/* Field 1: New Password */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <label className="text-sm font-semibold text-slate-700">
              New Password
            </label>
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="text-sm font-semibold text-slate-500 hover:text-slate-800 transition-colors flex items-center gap-1"
            >
              {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          <div className="relative">
            <Lock className="absolute left-4 top-3.5 h-5 w-5 text-slate-400" />
            <input
              type={showPassword ? "text" : "password"}
              required
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-11 pr-4 py-3.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all text-slate-900 font-medium bg-slate-50/50 focus:bg-white"
            />
          </div>
        </div>

        {/* Field 2: Confirm Password */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <label className="text-sm font-semibold text-slate-700">
              Confirm New Password
            </label>
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="text-sm font-semibold text-slate-500 hover:text-slate-800 transition-colors flex items-center gap-1"
            >
              {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              {showConfirmPassword ? "Hide" : "Show"}
            </button>
          </div>

          <div className="relative">
            <Lock className="absolute left-4 top-3.5 h-5 w-5 text-slate-400" />
            <input
              type={showConfirmPassword ? "text" : "password"}
              required
              placeholder="••••••••"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full pl-11 pr-4 py-3.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all text-slate-900 font-medium bg-slate-50/50 focus:bg-white"
            />
          </div>
        </div>

        {/* Main Submit Action Control */}
        <button
          type="submit"
          disabled={isPending || !password || !confirmPassword}
          className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold text-base hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 mt-6 shadow-lg shadow-blue-600/20 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none"
        >
          {isPending ? "Updating Password..." : "Update Password"}
          {!isPending && <ArrowRight className="h-5 w-5" />}
        </button>
      </form>

      {/* Fallback Navigation Utility Footer Link */}
      <p className="mt-8 text-center text-sm font-medium text-slate-600">
        <a
          href="/auth/login"
          className="inline-flex items-center gap-1.5 font-bold text-slate-400 hover:text-blue-600 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Cancel and Back to Sign In
        </a>
      </p>
    </div>
  );
}