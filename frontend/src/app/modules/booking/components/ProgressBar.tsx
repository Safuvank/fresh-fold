import React from "react";
import { Check } from "lucide-react";

interface Props {
  currentStep: number;
}

const steps = [
  { step: 1, label: "SPEED" },
  { step: 2, label: "SERVICES" },
  { step: 3, label: "DETAILS" },
  { step: 4, label: "SCHEDULE" },
  { step: 5, label: "CONFIRM" },
];

export default function ProgressBar({ currentStep }: Props) {
  return (
    <div className="w-full border-b border-slate-100 bg-white py-6 px-4 sticky top-0 z-30 shadow-sm">
      <div className="max-w-4xl mx-auto flex items-center justify-between relative">
        {/* Background Track */}
        <div className="absolute top-4 left-0 right-0 h-0.5 bg-slate-100 -z-10" />

        {steps.map((item) => {
          const isCompleted = currentStep > item.step;
          const isActive = currentStep === item.step;
          
          return (
            <div key={item.step} className="flex flex-col items-center flex-1 relative">
              {/* Active Blue Track Line */}
              {item.step > 1 && (
                <div className={`absolute top-4 right-[50%] left-[-50%] h-0.5 -z-10 transition-colors duration-300 ${currentStep >= item.step ? "bg-blue-600" : "bg-slate-100"}`} />
              )}
              
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                  isCompleted 
                    ? "bg-blue-600 text-white" 
                    : isActive 
                      ? "bg-blue-600 text-white ring-4 ring-blue-50" 
                      : "bg-slate-100 text-slate-400 border border-slate-200"
                }`}
              >
                {isCompleted ? <Check className="w-4 h-4 stroke-[3]" /> : item.step}
              </div>
              <span className={`text-[10px] font-bold mt-2 tracking-widest uppercase transition-colors ${isActive ? "text-blue-600" : "text-slate-400"}`}>
                {item.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}