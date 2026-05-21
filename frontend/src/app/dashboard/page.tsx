"use client";

import React, { useState } from "react";
import { 
  Sparkles, Clock, Truck, ShieldCheck, CheckCircle2, 
  MapPin, Calendar, CreditCard, ShoppingBag, ArrowRight,
  History, CalendarDays, HelpCircle, PhoneCall
} from "lucide-react";
import Link from "next/link";

// Mock data based on the order just confirmed in your previous step
const activeOrderMock = {
  orderId: "FF-92841",
  status: "scheduled", // scheduled, picked_up, cleaning, delivered
  speed: "Standard",
  estimatedTotal: "₹1,196",
  pickupDate: "Tomorrow, 26 Nov",
  pickupTime: "12:00 PM - 03:00 PM",
  address: "42 Banjara Hills, Road No. 3, Hyderabad, Telangana 500034",
  services: ["Daily Laundry"],
  itemsCount: 4
};

const pastOrdersMock = [
  { id: "FF-81723", date: "12 Nov 2026", amount: "₹840", status: "Delivered", items: "3 kg Wash & Fold" },
  { id: "FF-79281", date: "28 Oct 2026", amount: "₹1,450", status: "Delivered", items: "2 Suits, 4 Shirts (Dry Clean)" }
];

export default function UserDashboard() {
  const [activeOrder, setActiveOrder] = useState(activeOrderMock);

  return (
    <div className="min-h-screen bg-[#fafafa] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* TOP WELCOME HEADER */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-200/60 pb-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
              Welcome back, Carlos!
            </h1>
            <p className="text-sm text-slate-500 mt-1">
              Your clothes are in expert hands. Track or manage your orders below.
            </p>
          </div>
          <Link
            href="/booking"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold px-5 py-3 rounded-xl transition shadow-sm active:scale-[0.98]"
          >
            <Sparkles className="w-4 h-4" /> Schedule New Pickup
          </Link>
        </div>

        {/* MAIN DASHBOARD MATRIX */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT CONTENT COLUMNS: ORDER TRACKING & HISTORY (8-COLS) */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* 1. LIVE ACTIVE ORDER TRACKER STATUS CARD */}
            <div className="bg-white border border-slate-200/80 rounded-3xl p-6 md:p-8 shadow-sm space-y-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 pb-4 border-b border-slate-100">
                <div>
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-2.5 py-1 rounded-md">
                    Active Order
                  </span>
                  <h2 className="text-lg font-bold text-slate-900 tracking-tight mt-2">
                    ID: #{activeOrder.orderId} — {activeOrder.speed} Service
                  </h2>
                </div>
                <div className="text-left sm:text-right">
                  <p className="text-2xl font-black text-slate-900">{activeOrder.estimatedTotal}</p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Est. Pending Total</p>
                </div>
              </div>

              {/* Visual Horizontal Timeline Steps */}
              <div className="grid grid-cols-4 gap-2 relative pt-2">
                {/* Tracker Background line */}
                <div className="absolute top-[18px] left-[12.5%] right-[12.5%] h-0.5 bg-slate-100 -z-10" />
                <div className="absolute top-[18px] left-[12.5%] w-[0%] h-0.5 bg-blue-600 -z-10" /> {/* Control width based on status */}

                {[
                  { step: 1, label: "Confirmed", icon: CheckCircle2, current: true },
                  { step: 2, label: "Pickup", icon: Truck, current: false },
                  { step: 3, label: "Cleaning", icon: ShoppingBag, current: false },
                  { step: 4, label: "Delivered", icon: ShieldCheck, current: false },
                ].map((item) => (
                  <div key={item.step} className="flex flex-col items-center text-center">
                    <div className={`w-9 h-9 rounded-full flex items-center justify-center border transition-all ${
                      item.current 
                        ? "bg-blue-600 border-blue-600 text-white ring-4 ring-blue-50" 
                        : "bg-white text-slate-400 border-slate-200"
                    }`}>
                      <item.icon className="w-4 h-4" />
                    </div>
                    <span className={`text-[10px] md:text-xs font-bold mt-2 ${item.current ? "text-blue-600" : "text-slate-400"}`}>
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Dynamic Step Detail Box */}
              <div className="bg-slate-50 rounded-2xl p-5 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm border border-slate-100">
                <div className="space-y-1">
                  <span className="text-xs text-slate-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-blue-600" /> Appointment Target
                  </span>
                  <p className="font-bold text-slate-800">{activeOrder.pickupDate}</p>
                  <p className="text-xs text-slate-500 font-medium">{activeOrder.pickupTime}</p>
                </div>
                
                <div className="space-y-1">
                  <span className="text-xs text-slate-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-blue-600" /> Safe-Drop Address
                  </span>
                  <p className="font-semibold text-slate-700 text-xs md:text-sm line-clamp-2 leading-relaxed">
                    {activeOrder.address}
                  </p>
                </div>
              </div>
            </div>

            {/* 2. RECENT COMPLETED ORDERS TABLE LIST */}
            <div className="bg-white border border-slate-200/80 rounded-3xl p-6 md:p-8 shadow-sm space-y-4">
              <h3 className="text-lg font-bold text-slate-900 tracking-tight flex items-center gap-2">
                <History className="w-5 h-5 text-slate-400" /> Past Order History
              </h3>
              
              <div className="divide-y divide-slate-100">
                {pastOrdersMock.map((past) => (
                  <div key={past.id} className="py-4 flex items-center justify-between gap-4 text-sm first:pt-2 last:pb-2">
                    <div className="space-y-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-slate-900">#{past.id}</span>
                        <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                          {past.status}
                        </span>
                      </div>
                      <p className="text-slate-400 text-xs">{past.date} • {past.items}</p>
                    </div>
                    <div className="flex items-center gap-3 shrink-0">
                      <span className="font-black text-slate-800">{past.amount}</span>
                      <button className="p-2 border border-slate-200 rounded-lg hover:bg-slate-50 transition text-slate-400 hover:text-slate-700">
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT CONTENT COLUMN: PROFILE, METRICS & HELP DRAWER (4-COLS) */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* ACCOUNT SUBSCRIPTION CARD METRICS */}
            <div className="bg-white border border-slate-200/80 rounded-3xl p-6 shadow-sm space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center font-bold text-slate-800 border border-slate-200/60">
                  CM
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 tracking-tight">Carlos Mendoza</h4>
                  <p className="text-xs text-slate-400">carlos.m@example.com</p>
                </div>
              </div>
              
              <div className="h-px bg-slate-100" />

              <div className="space-y-3 text-xs md:text-sm">
                <div className="flex justify-between text-slate-500">
                  <span className="flex items-center gap-2"><CreditCard className="w-4 h-4 text-slate-400" /> Default Payment:</span>
                  <span className="font-bold text-slate-800">UPI / Card ending 4821</span>
                </div>
                <div className="flex justify-between text-slate-500">
                  <span className="flex items-center gap-2"><CalendarDays className="w-4 h-4 text-slate-400" /> Member Since:</span>
                  <span className="font-bold text-slate-800">October 2026</span>
                </div>
              </div>
            </div>

            {/* QUICK BRAND SUPPORT HELP DESK LINKING */}
            <div className="bg-slate-900 text-slate-400 rounded-3xl p-6 shadow-md space-y-4">
              <h4 className="text-white font-bold text-base tracking-tight flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-blue-400" /> Need Assistance?
              </h4>
              <p className="text-xs leading-relaxed text-slate-400">
                Want to change your appointment window or give special care processing updates to the drivers? Get in touch immediately.
              </p>
              
              <div className="grid grid-cols-2 gap-2 pt-2">
                <a 
                  href="tel:+9100000000"
                  className="bg-white/10 hover:bg-white/15 text-white font-bold text-xs p-2.5 rounded-xl transition flex items-center justify-center gap-2 border border-white/5"
                >
                  <PhoneCall className="w-3.5 h-3.5" /> Call Us
                </a>
                <Link
                  href="/support"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs p-2.5 rounded-xl transition flex items-center justify-center gap-2 shadow-sm"
                >
                  Support Desk
                </Link>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}