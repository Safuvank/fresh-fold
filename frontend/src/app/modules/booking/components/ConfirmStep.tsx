import React from "react";
import {
  Calendar,
  MapPin,
  CheckCircle2,
  Zap,
  Shirt,
  CreditCard,
} from "lucide-react";

export default function ConfirmStep() {
  // Mock data representing the final state from your Zustand store
  const orderSummary = {
    speed: "Express Processing",
    services: ["Daily Laundry", "Premium Care"],
    load: "5 kg",
    date: "Tomorrow, 26 Nov",
    time: "12:00 PM - 03:00 PM",
    address: "42 Banjara Hills, Road No. 3, Hyderabad, Telangana 500034",
    estimatedTotal: 995,
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="text-center mb-8 space-y-2">
        <h1 className="text-2xl md:text-4xl font-black text-slate-900 tracking-tight">
          Review & Confirm
        </h1>
        <p className="text-slate-500">
          Double-check your details before placing the order.
        </p>
      </div>

      <div className="bg-white border border-slate-200/80 rounded-3xl overflow-hidden shadow-sm">
        {/* --- Header Summary Panel --- */}
        <div className="p-6 md:p-8 border-b border-slate-100 flex items-center justify-between gap-4 bg-slate-50/50">
          <div>
            <h3 className="text-lg md:text-xl font-black text-slate-900 tracking-tight">
              {orderSummary.speed}
            </h3>
            <p className="text-xs font-medium text-slate-500 mt-1">
              {orderSummary.services.length} Services • {orderSummary.load}{" "}
              Estimated Load
            </p>
          </div>
          <div className="text-right">
            <span className="text-3xl font-black text-blue-600 tracking-tight block">
              ₹{orderSummary.estimatedTotal}
            </span>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mt-0.5">
              Est. Total
            </span>
          </div>
        </div>

        {/* --- Details List --- */}
        <div className="p-6 md:p-8 space-y-8 text-sm">
          {/* Services Array */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100/50">
              <Shirt className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-slate-900 block text-base">
                Selected Services
              </span>
              <div className="flex flex-wrap gap-2 mt-2">
                {orderSummary.services.map((srv, idx) => (
                  <span
                    key={idx}
                    className="bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md text-xs font-semibold"
                  >
                    {srv}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <hr className="border-slate-100" />

          {/* Schedule */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100/50">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-slate-900 block text-base">
                Pickup Window
              </span>
              <span className="text-sm font-medium text-slate-500 mt-1 block">
                {orderSummary.date} •{" "}
                <span className="text-slate-700">{orderSummary.time}</span>
              </span>
            </div>
          </div>

          <hr className="border-slate-100" />

          {/* Location */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100/50">
              <MapPin className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-baseline">
                <span className="font-bold text-slate-900 block text-base">
                  Pickup Address
                </span>
                <button className="text-xs text-blue-600 font-bold hover:text-blue-700 transition-colors">
                  Change
                </button>
              </div>
              <span className="text-sm font-medium text-slate-500 mt-1 block max-w-sm leading-relaxed">
                {orderSummary.address}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* --- Post-Payment Collection Disclaimer Alert --- */}
      <div className="p-5 bg-emerald-50 border border-emerald-100/80 rounded-2xl flex items-start gap-3.5 shadow-sm">
        <div className="bg-white rounded-full p-1 shadow-sm shrink-0 mt-0.5">
          <CheckCircle2 className="w-5 h-5 text-emerald-600" />
        </div>
        <div>
          <h4 className="font-bold text-emerald-900 text-sm">
            Pay later after pickup
          </h4>
          <p className="text-emerald-700/80 text-xs font-medium mt-1 leading-relaxed">
            No payment is required right now. You will pay digitally after our
            executive validates the exact final weight of your laundry at our
            processing facility.
          </p>
        </div>
      </div>
    </div>
  );
}
