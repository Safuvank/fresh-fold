// import React, { useState } from "react";
// import { Shirt, Sparkles, Check } from "lucide-react";

// export default function ServicesStep() {
//   // Local state for demonstration - move to Zustand in production
//   const [selected, setSelected] = useState({ daily: true, premium: false });

//   return (
//     <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
//       <div className="text-center mb-10 space-y-2">
//          <h1 className="text-2xl md:text-4xl font-black text-slate-900 tracking-tight">What services do you need?</h1>
//          <p className="text-slate-500">Select one or more services for your order profile package.</p>
//       </div>

//       {/* Service Item 1 */}
//       <div 
//         onClick={() => setSelected({...selected, daily: !selected.daily})}
//         className={`p-5 rounded-2xl border transition-all flex items-center justify-between cursor-pointer ${selected.daily ? "border-blue-500 bg-blue-50/40 shadow-sm" : "border-slate-200 bg-white hover:border-slate-300"}`}
//       >
//         <div className="flex items-center gap-4">
//           <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${selected.daily ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-600"}`}>
//             <Shirt className="w-4 h-4" />
//           </div>
//           <div>
//             <h4 className="font-bold text-slate-900 text-base">Daily Laundry</h4>
//             <p className="text-xs text-slate-400">Everyday wash & fold garment bundles</p>
//           </div>
//         </div>
//         <div className={`w-6 h-6 rounded-lg border flex items-center justify-center transition-all ${selected.daily ? "bg-blue-600 border-blue-600 text-white" : "border-slate-200 bg-white"}`}>
//            {selected.daily && <Check className="w-3.5 h-3.5 stroke-[3]" />}
//         </div>
//       </div>

//        {/* Service Item 2 */}
//        <div 
//         onClick={() => setSelected({...selected, premium: !selected.premium})}
//         className={`p-5 rounded-2xl border transition-all flex items-center justify-between cursor-pointer ${selected.premium ? "border-blue-500 bg-blue-50/40 shadow-sm" : "border-slate-200 bg-white hover:border-slate-300"}`}
//       >
//         <div className="flex items-center gap-4">
//           <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${selected.premium ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-600"}`}>
//             <Sparkles className="w-4 h-4" />
//           </div>
//           <div>
//             <h4 className="font-bold text-slate-900 text-base">Premium Care</h4>
//             <p className="text-xs text-slate-400">Gentle cycles for delicate fabrics</p>
//           </div>
//         </div>
//         <div className={`w-6 h-6 rounded-lg border flex items-center justify-center transition-all ${selected.premium ? "bg-blue-600 border-blue-600 text-white" : "border-slate-200 bg-white"}`}>
//            {selected.premium && <Check className="w-3.5 h-3.5 stroke-[3]" />}
//         </div>
//       </div>
//     </div>
//   );
// }




import React from "react";
import { Shirt, Sparkles, Check } from "lucide-react";

import { useBooking } from "../hooks/useBooking";

import { servicesConfig } from "../data/booking.data";

export default function ServicesStep() {
  const {
    selectedServices,
    toggleService,
  } = useBooking();

  return (
    <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="text-center mb-10 space-y-2">
        <h1 className="text-2xl md:text-4xl font-black text-slate-900 tracking-tight">
          What services do you need?
        </h1>

        <p className="text-slate-500">
          Select one or more services for your order profile package.
        </p>
      </div>

      {servicesConfig.map((service) => {
        const Icon = service.icon;

        const isSelected =
          selectedServices.some(
            (item) =>
              item.id === service.id
          );

        return (
          <div
            key={service.id}
            onClick={() =>
              toggleService({
                id: service.id,
                title: service.title,
              })
            }
            className={`p-5 rounded-2xl border transition-all flex items-center justify-between cursor-pointer ${
              isSelected
                ? "border-blue-500 bg-blue-50/40 shadow-sm"
                : "border-slate-200 bg-white hover:border-slate-300"
            }`}
          >
            <div className="flex items-center gap-4">
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  isSelected
                    ? "bg-blue-600 text-white"
                    : "bg-slate-100 text-slate-600"
                }`}
              >
                <Icon className="w-4 h-4" />
              </div>

              <div>
                <h4 className="font-bold text-slate-900 text-base">
                  {service.title}
                </h4>

                <p className="text-xs text-slate-400">
                  {service.desc}
                </p>
              </div>
            </div>

            <div
              className={`w-6 h-6 rounded-lg border flex items-center justify-center transition-all ${
                isSelected
                  ? "bg-blue-600 border-blue-600 text-white"
                  : "border-slate-200 bg-white"
              }`}
            >
              {isSelected && (
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}