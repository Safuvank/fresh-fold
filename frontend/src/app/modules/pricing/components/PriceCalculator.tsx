import React from 'react';
import { SpeedOption } from '../types/pricing.types';
import { formatCurrency } from '../utils/pricing.utils';

interface CalculatorProps {
  speed: SpeedOption;
  setSpeed: (speed: SpeedOption) => void;
  weight: number;
  setWeight: (weight: number) => void;
  currentRate: number;
  estimatedTotal: number;
}

export const PriceCalculator = ({ speed, setSpeed, weight, setWeight, currentRate, estimatedTotal }: CalculatorProps) => (
  <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] w-full max-w-md flex flex-col">
    <div className="flex items-center gap-4 mb-8">
      <div>
        <h3 className="font-bold text-gray-900 text-lg">Price Calculator</h3>
        <p className="text-sm text-gray-500">Estimate your laundry cost</p>
      </div>
    </div>

    <div className="bg-slate-50 p-1.5 rounded-xl flex mb-10 border border-slate-100">
      <button onClick={() => setSpeed('standard')} className={`flex-1 py-2.5 text-sm font-semibold rounded-lg ${speed === 'standard' ? 'bg-white shadow-sm text-gray-900 border border-slate-200/50' : 'text-gray-500'}`}>Standard (24h)</button>
      <button onClick={() => setSpeed('express')} className={`flex-1 py-2.5 text-sm font-semibold rounded-lg ${speed === 'express' ? 'bg-white shadow-sm text-gray-900 border border-slate-200/50' : 'text-gray-500'}`}>Express (6h)</button>
    </div>

    <div className="mb-10">
      <div className="flex justify-between items-center mb-6">
        <label className="font-bold text-gray-900 text-sm">Estimated Weight</label>
        <span className="bg-blue-50/80 text-blue-700 font-bold px-3 py-1.5 rounded-lg text-sm border border-blue-100/50">{weight} kg</span>
      </div>
      <input type="range" min="1" max="20" value={weight} onChange={(e) => setWeight(Number(e.target.value))} className="w-full accent-blue-600" />
    </div>

    <div className="mt-auto bg-slate-50/80 rounded-2xl p-6 flex justify-between items-center border border-slate-100">
      <div>
        <p className="text-xs font-bold tracking-wider text-slate-500 mb-1">ESTIMATED TOTAL</p>
        <p className="text-sm font-medium text-slate-400">Rate: {formatCurrency(currentRate)}/kg</p>
      </div>
      <div className="text-4xl font-black text-blue-600">{formatCurrency(estimatedTotal)}</div>
    </div>
  </div>
);