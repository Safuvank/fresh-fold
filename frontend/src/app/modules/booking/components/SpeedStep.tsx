import React from "react";
import { Zap, Truck, Clock } from "lucide-react";

interface Props {
  selectedSpeed: string;
  setSelectedSpeed: (speed: string) => void;
}

// We merge your data with the UI-specific icons and badges here
const SPEED_OPTIONS = [
  {
    id: "express",
    title: "Express Processing",
    description: "Pickup 30-60 min • Delivery 3-6 hrs",
    icon: Zap,
    badge: "Premium",
    priceIndicator: "$$$$",
    priceColor: "text-amber-400"
  },
  {
    id: "standard",
    title: "Standard Regular",
    description: "Same-day pickup • Delivery 24 hrs",
    icon: Truck,
    priceIndicator: "$$$",
    priceColor: "text-emerald-400"
  },
  {
    id: "economy",
    title: "Economy Saver",
    description: "Scheduled pickup • Delivery 48-72 hrs",
    icon: Clock,
    priceIndicator: "$$",
    priceColor: "text-slate-400"
  },
];

export default function SpeedStep({ selectedSpeed, setSelectedSpeed }: Props) {
  return (
    <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="text-center mb-10 space-y-2">
         <h1 className="text-2xl md:text-4xl font-black text-slate-900 tracking-tight">How fast do you need it?</h1>
         <p className="text-slate-500">Choose a service speed that fits your schedule and budget.</p>
      </div>

      <div className="space-y-4">
        {SPEED_OPTIONS.map((option) => {
          const isSelected = selectedSpeed === option.id;
          const Icon = option.icon;

          return (
            <div 
              key={option.id}
              onClick={() => setSelectedSpeed(option.id)}
              className={`p-6 rounded-3xl border transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 cursor-pointer ${
                isSelected 
                  ? "bg-blue-600 text-white border-blue-600 shadow-xl shadow-blue-600/10" 
                  : "bg-white border-slate-200/80 text-slate-800 hover:border-slate-300"
              }`}
            >
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${
                  isSelected ? "bg-white/10" : "bg-blue-50 text-blue-600"
                }`}>
                  <Icon className={`w-5 h-5 ${option.id === 'express' ? 'stroke-[2.5]' : ''}`} />
                </div>
                
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-lg">{option.title}</h3>
                    {option.badge && (
                      <span className="bg-amber-400 text-slate-900 text-[10px] font-black uppercase tracking-wide px-2 py-0.5 rounded-md">
                        {option.badge}
                      </span>
                    )}
                  </div>
                  <p className={`text-xs mt-0.5 ${isSelected ? "text-blue-100" : "text-slate-400"}`}>
                    {option.description}
                  </p>
                  
                  {/* Optional: Add price indicators back if you want them, or remove this div */}
                  <div className={`text-sm font-bold mt-2 ${isSelected ? "text-white/90" : option.priceColor}`}>
                    {option.priceIndicator}
                  </div>
                </div>
              </div>

              {/* Selection Indicator Button */}
              <button className={`px-5 py-2 text-xs font-bold rounded-xl border transition-colors ${
                isSelected 
                  ? "bg-white/10 border-white/20 text-white" 
                  : "bg-slate-50 border-slate-200 text-slate-500"
              }`}>
                {isSelected ? "Selected" : "Select"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}