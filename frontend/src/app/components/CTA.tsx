// "use client";

// import React from "react";
// import Link from "next/link";
// import { ArrowRight } from "lucide-react";

// export default function CTA() {
//   return (
//     <section className="bg-[#fafafa] py-16 px-6 md:px-12 lg:px-24">
//       <div className="max-w-7xl mx-auto">
//         {/* Rounded Gradient Container Card */}
//         <div className="bg-linear-to-br from-blue-600 to-blue-700 rounded-4x1 py-16 px-8 md:px-16 text-center text-white shadow-xl shadow-blue-600/10 relative overflow-hidden group">
//           {/* Subtle Background Abstract Circle Layer for Premium Depth */}
//           <div className="absolute -top-24 -right-24 w-72 h-72 bg-white/5 rounded-full blur-2xl transition-transform duration-700 group-hover:scale-125" />
//           <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-blue-500/20 rounded-full blur-2xl" />

//           {/* Core Text Content */}
//           <div className="relative z-10 max-w-2xl mx-auto space-y-6">
//             <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
//               Book your first order now
//             </h2>

//             <p className="text-blue-100 text-sm md:text-base font-medium max-w-xl mx-auto leading-relaxed">
//               Join thousands of happy customers. Get{" "}
//               <span className="font-bold text-white">20% off</span> your first
//               wash with code:
//             </p>

//             {/* Inline Code Badge Styling */}
//             <div className="inline-block">
//               <span className="bg-white/15 border border-white/20 backdrop-blur-sm text-white font-mono font-bold text-xs md:text-sm tracking-widest uppercase px-4 py-1.5 rounded-lg shadow-sm">
//                 FRESH20
//               </span>
//             </div>

//             {/* Premium Interactive Button */}
//             <div className="pt-4">
//               <Link
//                 href="/auth/signup"
//                 className="inline-flex items-center gap-2 bg-white hover:bg-blue-50 text-blue-600 font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 text-sm md:text-base group/btn"
//               >
//                 <span>Get Started Today</span>
//                 <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:btn:translate-x-1 group-hover/btn:translate-x-1" />
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
