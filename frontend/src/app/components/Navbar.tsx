"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  Sparkles,
  Menu,
  X,
  Shirt,
  History,
  LayoutDashboard,
  LogOut,
} from "lucide-react";
import Link from "next/link";

import { useAuthStore } from "../modules/auth/store/auth.store";
import { useRouter } from "next/navigation";

function Navbar() {
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);
  const router = useRouter();

  // --- UI Visibility States ---
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  // --- Close profile dropdown when clicking outside ---
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsProfileDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleBooking = () => {
    setIsMobileSidebarOpen(false);
    if (user) {
      router.push("/booking");
    } else {
      router.push("/auth/login?redirect=/booking");
    }
  };

  return (
    <>
      <nav className="sticky top-0 z-50 w-full border-b border-slate-200/60 bg-white/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-8 py-4">
          {/* LEFT: Logo / Brand */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center transition-transform group-hover:scale-105">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-black tracking-tight text-slate-900 uppercase">
              FreshFold<span className="text-blue-600">.</span>
            </span>
          </Link>

          {/* MIDDLE: Minimal Desktop Navigation Items */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/#pricing"
              className="text-sm font-semibold text-slate-600 hover:text-blue-600 tracking-wide transition-colors"
            >
              Services &amp; Pricing
            </Link>
            <Link
              href="/#how-it-works"
              className="text-sm font-semibold text-slate-600 hover:text-blue-600 tracking-wide transition-colors"
            >
              How it Works
            </Link>
          </div>

          {/* RIGHT: User Authentication & Profile Block */}
          <div className="hidden md:flex items-center gap-4">
            {user ? (
              <div className="relative" ref={dropdownRef}>
                {/* Clean Avatar Circle trigger */}
                <button
                  onClick={() =>
                    setIsProfileDropdownOpen(!isProfileDropdownOpen)
                  }
                  className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm shadow-sm hover:ring-4 hover:ring-blue-50 transition-all outline-none"
                >
                  {user.name.charAt(0).toUpperCase()}
                </button>

                {/* Dropdown Menu Overlay */}
                {isProfileDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-white border border-slate-200 rounded-2xl shadow-xl py-2 z-50 animate-in fade-in slide-in-from-top-3 duration-200">
                    <div className="px-4 py-2 border-b border-slate-100 mb-1">
                      <p className="text-xs text-slate-400 font-medium">
                        Signed in as
                      </p>
                      <p className="text-sm font-bold text-slate-800 truncate">
                        {user.name}
                      </p>
                    </div>

                    <Link
                      href="/dashboard"
                      onClick={() => setIsProfileDropdownOpen(false)}
                      className="flex items-center gap-2.5 px-4 py-2.5 text-sm font-semibold text-slate-600 hover:text-blue-600 hover:bg-slate-50 transition"
                    >
                      <LayoutDashboard className="w-4 h-4" />
                      Dashboard
                    </Link>

                    <Link
                      href="/dashboard/orders"
                      onClick={() => setIsProfileDropdownOpen(false)}
                      className="flex items-center gap-2.5 px-4 py-2.5 text-sm font-semibold text-slate-600 hover:text-blue-600 hover:bg-slate-50 transition"
                    >
                      <History className="w-4 h-4" />
                      Order History
                    </Link>

                    <button
                      onClick={() => {
                        setIsProfileDropdownOpen(false);
                        logout();
                      }}
                      className="w-full flex items-center gap-2.5 px-4 py-2.5 text-sm font-semibold text-red-600 hover:bg-red-50 transition text-left mt-1 border-t border-slate-100 pt-2"
                    >
                      <LogOut className="w-4 h-4" />
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link
                href="/auth/login"
                className="px-4 py-2 text-sm font-bold text-slate-700 hover:text-blue-600 tracking-wide transition-colors"
              >
                Sign In
              </Link>
            )}

            <button
              onClick={handleBooking}
              className="text-sm font-bold bg-slate-950 text-white px-5 py-2.5 rounded-xl hover:bg-slate-800 transition-all shadow-sm tracking-wide active:scale-[0.98]"
            >
              Book a Pickup
            </button>
          </div>

          {/* MOBILE: 3-Line Sidebar Menu Trigger Button */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={() => setIsMobileSidebarOpen(true)}
              className="p-2 text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-xl transition"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6 stroke-[2.5]" />
            </button>
          </div>
        </div>
      </nav>

      {/* --- RESPONSIVE MOBILE SIDEBAR DRAWERS --- */}
      {isMobileSidebarOpen && (
        <div className="fixed inset-0 z-50 flex md:hidden">
          {/* Backdrop Blur Layer */}
          <div
            className="fixed inset-0 bg-slate-950/40 backdrop-blur-sm transition-opacity"
            onClick={() => setIsMobileSidebarOpen(false)}
          />

          {/* Drawer Sidebar Frame */}
          <div className="relative flex flex-col w-full max-w-xs bg-white h-full p-6 shadow-2xl ml-auto animate-in slide-in-from-right duration-300">
            {/* Drawer Top Row Controls */}
            <div className="flex items-center justify-between pb-6 border-b border-slate-100">
              <span className="text-lg font-black text-slate-900 tracking-tight uppercase">
                Menu<span className="text-blue-600">.</span>
              </span>
              <button
                onClick={() => setIsMobileSidebarOpen(false)}
                className="p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-xl transition"
              >
                <X className="w-5 h-5 stroke-[2.5]" />
              </button>
            </div>

            {/* Drawer Links Navigation Loop */}
            <div className="flex-1 py-6 flex flex-col justify-between">
              <div className="space-y-4">
                {/* User Identity Banner inside the mobile view */}
                {user && (
                  <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-2xl mb-4">
                    <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm shrink-0">
                      {user.name.charAt(0).toUpperCase()}
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-slate-400 font-medium">
                        Logged in as
                      </p>
                      <p className="text-sm font-bold text-slate-800 truncate">
                        {user.name}
                      </p>
                    </div>
                  </div>
                )}

                <Link
                  href="/dashboard"
                  onClick={() => setIsMobileSidebarOpen(false)}
                  className="flex items-center gap-3 px-3 py-2.5 text-base font-bold text-slate-700 hover:text-blue-600 transition"
                >
                  Dashboard
                </Link>
                <Link
                  href="/#order-history"
                  onClick={() => setIsMobileSidebarOpen(false)}
                  className="flex items-center gap-3 px-3 py-2.5 text-base font-bold text-slate-700 hover:text-blue-600 transition"
                >
                  Order History
                </Link>
                <Link
                  href="/#pricing"
                  onClick={() => setIsMobileSidebarOpen(false)}
                  className="flex items-center gap-3 px-3 py-2.5 text-base font-bold text-slate-700 hover:text-blue-600 transition"
                >
                  Services &amp; Pricing
                </Link>
                <Link
                  href="/#how-it-works"
                  onClick={() => setIsMobileSidebarOpen(false)}
                  className="flex items-center gap-3 px-3 py-2.5 text-base font-bold text-slate-700 hover:text-blue-600 transition"
                >
                  How it Works
                </Link>
              </div>

              {/* Lower Actions Module */}
              <div className="space-y-3 pt-6 border-t border-slate-100">
                {!user ? (
                  <Link
                    href="/auth/login"
                    onClick={() => setIsMobileSidebarOpen(false)}
                    className="w-full flex items-center justify-center font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 py-3 rounded-xl text-sm transition"
                  >
                    Sign In
                  </Link>
                ) : (
                  <button
                    onClick={() => {
                      setIsMobileSidebarOpen(false);
                      logout();
                    }}
                    className="w-full flex items-center justify-center gap-2 font-bold text-red-600 bg-red-50 hover:bg-red-100 py-3 rounded-xl text-sm transition"
                  >
                    <LogOut className="w-4 h-4" /> Logout
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
