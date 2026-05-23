import React, { useState } from "react";
import { Weight, Shirt, ShoppingBag } from "lucide-react";

// Mock data for the items mode
const initialItems = [
  { id: "shirts", name: "Shirts", price: 150, count: 0, icon: Shirt },
  { id: "pants", name: "Pants", price: 180, count: 2, icon: Shirt },
  { id: "jeans", name: "Jeans", price: 199, count: 1, icon: Shirt },
];

export default function DetailsStep() {
  // Local state for demonstration - in production, pull this from your Zustand store
  const [measureMode, setMeasureMode] = useState<"weight" | "items">("weight");
  const [weightValue, setWeightValue] = useState<number>(5);
  const [items, setItems] = useState(initialItems);

  const updateItemCount = (idx: number, delta: number) => {
    setItems((prev) =>
      prev.map((item, i) =>
        i === idx ? { ...item, count: Math.max(0, item.count + delta) } : item,
      ),
    );
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="text-center mb-8 space-y-2">
        <h1 className="text-2xl md:text-4xl font-black text-slate-900 tracking-tight">
          Tell us about your laundry
        </h1>
        <p className="text-slate-500">
          Choose how you'd like to estimate your order volume.
        </p>
      </div>

      {/* Split Switch Header Tabs */}
      <div className="flex bg-slate-100 p-1.5 rounded-2xl max-w-md mx-auto shadow-inner">
        <button
          onClick={() => setMeasureMode("weight")}
          className={`flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-bold rounded-xl transition-all ${
            measureMode === "weight"
              ? "bg-white text-blue-600 shadow-sm"
              : "text-slate-500 hover:text-slate-800"
          }`}
        >
          <Weight className="w-4 h-4" /> By Weight
        </button>
        <button
          onClick={() => setMeasureMode("items")}
          className={`flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-bold rounded-xl transition-all ${
            measureMode === "items"
              ? "bg-white text-blue-600 shadow-sm"
              : "text-slate-500 hover:text-slate-800"
          }`}
        >
          <Shirt className="w-4 h-4" /> By Items
        </button>
      </div>

      {/* --- View 1: Weight Slider --- */}
      {measureMode === "weight" && (
        <div className="bg-white border border-slate-200/80 rounded-3xl p-6 md:p-8 space-y-8 shadow-sm animate-in zoom-in-95 duration-300">
          <div className="flex items-center gap-3 text-slate-900 font-bold">
            <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
              <Weight className="w-5 h-5" />
            </div>
            <span>Estimated Weight</span>
          </div>

          {/* Dynamic Counter Interface */}
          <div className="bg-slate-50 border border-slate-100 rounded-2xl py-8 flex items-center justify-center gap-8 relative overflow-hidden">
            <button
              onClick={() => setWeightValue((p) => Math.max(1, p - 1))}
              className="w-12 h-12 rounded-full bg-white border border-slate-200 text-slate-600 flex items-center justify-center font-black text-xl hover:border-blue-600 hover:text-blue-600 shadow-sm active:scale-95 transition-all"
            >
              -
            </button>
            <div className="text-center w-24">
              <span className="text-5xl font-black text-blue-600 tracking-tight">
                {weightValue}
              </span>
              <span className="text-lg font-bold text-slate-400 ml-1">kg</span>
            </div>
            <button
              onClick={() => setWeightValue((p) => Math.min(20, p + 1))}
              className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-black text-xl hover:bg-blue-700 shadow-md shadow-blue-600/20 active:scale-95 transition-all"
            >
              +
            </button>
          </div>

          {/* Range Slider Track */}
          <div className="space-y-3">
            <input
              type="range"
              min="1"
              max="20"
              step="1"
              value={weightValue}
              onChange={(e) => setWeightValue(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
            <div className="flex justify-between text-xs font-bold text-slate-400 px-1">
              <span>1 kg</span>
              <span>10 kg</span>
              <span>20 kg</span>
            </div>
          </div>
        </div>
      )}

      {/* --- View 2: Item Quantities --- */}
      {measureMode === "items" && (
        <div className="bg-white border border-slate-200/80 rounded-3xl p-6 md:p-8 space-y-4 shadow-sm animate-in zoom-in-95 duration-300">
          <div className="flex items-center gap-3 text-slate-900 font-bold mb-6">
            <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <span>Specific Garments</span>
          </div>

          <div className="space-y-3">
            {items.map((item, idx) => (
              <div
                key={item.id}
                className={`p-4 rounded-2xl border flex items-center justify-between transition-colors ${
                  item.count > 0
                    ? "border-blue-500 bg-blue-50/20 shadow-sm"
                    : "border-slate-100 bg-slate-50/50"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center ${item.count > 0 ? "bg-blue-600 text-white" : "bg-slate-200 text-slate-500"}`}
                  >
                    <item.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-sm text-slate-900 block">
                      {item.name}
                    </span>
                    <span className="text-xs font-medium text-slate-400">
                      ₹{item.price}/piece
                    </span>
                  </div>
                </div>

                {/* Micro Counter Controls */}
                <div className="flex items-center gap-3 bg-white border border-slate-200 p-1 rounded-xl shadow-sm">
                  <button
                    disabled={item.count === 0}
                    onClick={() => updateItemCount(idx, -1)}
                    className="w-8 h-8 rounded-lg bg-slate-50 hover:bg-slate-100 font-bold text-slate-600 flex items-center justify-center transition disabled:opacity-40"
                  >
                    -
                  </button>
                  <span className="font-bold text-sm min-w-[16px] text-center text-slate-900">
                    {item.count}
                  </span>
                  <button
                    onClick={() => updateItemCount(idx, 1)}
                    className="w-8 h-8 rounded-lg bg-blue-50 hover:bg-blue-100 font-bold text-blue-600 flex items-center justify-center transition"
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Disclaimer */}
      <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 text-xs text-slate-500 leading-relaxed flex items-start gap-3">
        <span className="w-5 h-5 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center font-bold shrink-0 mt-0.5">
          i
        </span>
        <span>
          This is just an estimate. Final pricing is confirmed at the processing
          center post-pickup via structural verified scaling.
        </span>
      </div>
    </div>
  );
}
