import React from 'react';

export const PricingFeature = ({ text }: { text: string }) => (
  <li className="flex items-start gap-3">
    <div className="mt-0.5 rounded-full bg-emerald-500/20 p-0.5 shrink-0">
      <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
      </svg>
    </div>
    <span className="text-slate-200 text-sm font-medium">{text}</span>
  </li>
);