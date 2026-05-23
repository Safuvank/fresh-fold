import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface FooterProps {
  currentStep: number;
  handlePrevStep: () => void;
  handleNextStep: () => void;
  handleFinalOrderSubmit: () => void;
}

export const BookingFooter = ({ currentStep, handlePrevStep, handleNextStep, handleFinalOrderSubmit }: FooterProps) => (
  <footer className="w-full bg-white border-t border-slate-200/80 px-6 py-4 sticky bottom-0 z-30 shadow-[0_-4px_12px_rgba(0,0,0,0.02)]">
    <div className="max-w-4xl mx-auto flex items-center justify-between">
      <button
        onClick={handlePrevStep}
        disabled={currentStep === 1}
        className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-bold tracking-wide text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition disabled:opacity-0"
      >
        <ChevronLeft className="w-4 h-4 stroke-[2.5]" /> Back
      </button>

      {currentStep < 5 ? (
        <button onClick={handleNextStep} className="flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-xl transition-all shadow-md shadow-blue-600/10 text-sm tracking-wide">
          Continue <ChevronRight className="w-4 h-4 stroke-[2.5]" />
        </button>
      ) : (
        <button onClick={handleFinalOrderSubmit} className="bg-blue-600 hover:bg-blue-700 text-white font-black px-8 py-3.5 rounded-xl transition-all shadow-lg shadow-blue-600/10 text-sm tracking-wider uppercase">
          Confirm Order
        </button>
      )}
    </div>
  </footer>
);