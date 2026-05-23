// import React, { useState } from "react";
// import { Calendar, Clock } from "lucide-react";

// export default function ScheduleStep() {
//   const [selectedDate, setSelectedDate] = useState("Tomorrow, 26 Nov");
//   const [selectedTime, setSelectedTime] = useState("12:00 PM - 03:00 PM");

//   return (
//     <div className="space-y-8 bg-white border border-slate-200/80 rounded-3xl p-6 md:p-8 shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-500">
//        <div className="text-center mb-8">
//          <h1 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">When should we pick it up?</h1>
//       </div>

//       <div className="space-y-4">
//         <span className="text-sm font-bold text-slate-900 flex items-center gap-2">
//           <Calendar className="w-4 h-4 text-blue-600" /> Select Date Target
//         </span>
//         <div className="grid grid-cols-2 gap-3">
//           {["Today", "Tomorrow, 26 Nov", "Wed, 27 Nov", "Thu, 28 Nov"].map((dt) => (
//             <button
//               key={dt}
//               onClick={() => setSelectedDate(dt)}
//               className={`py-3 px-4 text-sm font-bold rounded-xl border transition-all truncate ${
//                 selectedDate === dt 
//                   ? "border-blue-600 bg-blue-50 text-blue-600 ring-2 ring-blue-50" 
//                   : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
//               }`}
//             >
//               {dt}
//             </button>
//           ))}
//         </div>
//       </div>

//       <div className="space-y-4 pt-4 border-t border-slate-100">
//         <span className="text-sm font-bold text-slate-900 flex items-center gap-2">
//           <Clock className="w-4 h-4 text-blue-600" /> Select Time Window
//         </span>
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//           {["09:00 AM - 12:00 PM", "12:00 PM - 03:00 PM", "03:00 PM - 06:00 PM", "06:00 PM - 09:00 PM"].map((tm) => (
//             <button
//               key={tm}
//               onClick={() => setSelectedTime(tm)}
//               className={`py-3.5 px-5 text-sm font-bold rounded-xl border text-left flex items-center justify-between transition-all ${
//                 selectedTime === tm 
//                   ? "border-blue-600 bg-blue-50 text-blue-600 ring-2 ring-blue-50" 
//                   : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
//               }`}
//             >
//               <span>{tm}</span>
//               {selectedTime === tm && <div className="w-2 h-2 rounded-full bg-blue-600" />}
//             </button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }


import React from "react";
import { Calendar, Clock } from "lucide-react";

import { useBooking } from "../hooks/useBooking";

export default function ScheduleStep() {
  const {
    schedule,
    setSchedule,
  } = useBooking();

  const selectedDate =
    schedule.pickupDate;

  const selectedTime =
    schedule.pickupTime;

  return (
    <div className="space-y-8 bg-white border border-slate-200/80 rounded-3xl p-6 md:p-8 shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="text-center mb-8">
        <h1 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
          When should we pick it up?
        </h1>
      </div>

      <div className="space-y-4">
        <span className="text-sm font-bold text-slate-900 flex items-center gap-2">
          <Calendar className="w-4 h-4 text-blue-600" />
          Select Date Target
        </span>

        <div className="grid grid-cols-2 gap-3">
          {[
            "Today",
            "Tomorrow, 26 Nov",
            "Wed, 27 Nov",
            "Thu, 28 Nov",
          ].map((dt) => (
            <button
              key={dt}
              onClick={() =>
                setSchedule({
                  ...schedule,
                  pickupDate: dt,
                })
              }
              className={`py-3 px-4 text-sm font-bold rounded-xl border transition-all truncate ${
                selectedDate === dt
                  ? "border-blue-600 bg-blue-50 text-blue-600 ring-2 ring-blue-50"
                  : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
              }`}
            >
              {dt}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4 pt-4 border-t border-slate-100">
        <span className="text-sm font-bold text-slate-900 flex items-center gap-2">
          <Clock className="w-4 h-4 text-blue-600" />
          Select Time Window
        </span>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            "09:00 AM - 12:00 PM",
            "12:00 PM - 03:00 PM",
            "03:00 PM - 06:00 PM",
            "06:00 PM - 09:00 PM",
          ].map((tm) => (
            <button
              key={tm}
              onClick={() =>
                setSchedule({
                  ...schedule,
                  pickupTime: tm,
                })
              }
              className={`py-3.5 px-5 text-sm font-bold rounded-xl border text-left flex items-center justify-between transition-all ${
                selectedTime === tm
                  ? "border-blue-600 bg-blue-50 text-blue-600 ring-2 ring-blue-50"
                  : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
              }`}
            >
              <span>{tm}</span>

              {selectedTime === tm && (
                <div className="w-2 h-2 rounded-full bg-blue-600" />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}