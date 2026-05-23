import React from 'react';
import { PricingFeature } from './PricingFeature';
import { washAndFoldFeatures } from '../data/pricing.data';
import { formatCurrency } from '../utils/pricing.utils';

export const PricingCard = () => (
  <div className="bg-[#0F172A] rounded-3xl p-8 md:p-10 text-white w-full max-w-md relative overflow-hidden flex flex-col shadow-xl shadow-slate-900/10 border border-slate-800">
    <div className="inline-flex items-center gap-1 bg-emerald-500/10 text-emerald-400 text-xs font-bold px-3 py-1.5 rounded-full w-max mb-6">
      BEST VALUE
    </div>
    <h2 className="text-3xl font-black mb-2">Wash & Fold</h2>
    <p className="text-slate-400 text-sm mb-8">Perfect for your daily laundry needs.</p>
    
    <div className="mb-8 flex items-baseline">
      <span className="text-5xl font-black tracking-tighter">{formatCurrency(99)}</span>
      <span className="text-slate-400 ml-1 font-medium">/kg</span>
    </div>

    <ul className="space-y-4 mb-10 flex-1">
      {washAndFoldFeatures.map((feature, idx) => (
        <PricingFeature key={idx} text={feature} />
      ))}
    </ul>

    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-xl transition-colors flex items-center justify-center gap-2 mt-auto">
      Schedule Pickup
    </button>
  </div>
);