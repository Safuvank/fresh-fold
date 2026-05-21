// import React from 'react';
// import Image from 'next/image';

// export default function Hero() {
//   return (
//     <section className="relative bg-[#fafafa] pt-24 pb-20 md:pt-32 md:pb-28 px-6 md:px-12 lg:px-24 overflow-hidden border-b border-slate-100">
//       <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
        
//         {/* Left Side: Text and ZIP/Action Input */}
//         <div className="w-full md:w-1/2 space-y-6 lg:max-w-xl">
//           <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full">
//             <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
//             Smart Laundry Delivery
//           </div>
          
//           <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
//             Laundry &amp; Dry Cleaning, <span className="text-blue-600">Delivered.</span>
//           </h1>
          
//           <p className="text-slate-600 text-lg md:text-xl font-normal leading-relaxed max-w-lg">
//             We pick up, clean, and deliver your garments right to your door. Completely contact-free, 7 days a week.
//           </p>
          
//           {/* Rinse-style Zip Code or Quick Start CTA Box */}
//           <div className="pt-4 max-w-md">
//             <form className="flex flex-col sm:flex-row gap-2 bg-white p-2 rounded-2xl border border-slate-200 shadow-sm focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100 transition-all">
//               <input 
//                 type="text" 
//                 placeholder="Enter Zip Code or Area" 
//                 className="w-full bg-transparent px-4 py-3 text-slate-800 placeholder-slate-400 font-medium focus:outline-none"
//               />
//               <button 
//                 type="submit" 
//                 className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition shadow-sm hover:shadow shrink-0"
//               >
//                 Get Started
//               </button>
//             </form>
//             <p className="text-xs text-slate-400 mt-2 ml-2">Check availability to see schedules in your area.</p>
//           </div>
//         </div>

//         {/* Right Side: Clean overlapping visual container */}
//         <div className="w-full md:w-1/2 flex justify-center relative">
//           <div className="relative w-full max-w-lg aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-white/40">
//             {/* Replace with a sleek photo of crisp clothes hanging or neatly folded items */}
//             <Image 
//               src="/hero-laundry.jpg" 
//               alt="Premium laundry delivery service" 
//               fill
//               priority
//               className="object-cover"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



// "use client";

// import React from 'react';

// export default function Hero() {
//   return (
//     <section className="relative bg-[#fafafa] pt-24 pb-20 md:pt-32 md:pb-28 px-6 md:px-12 lg:px-24 overflow-hidden border-b border-slate-100">
//       <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
        
//         {/* Left Side: Text and ZIP/Action Input */}
//         <div className="w-full md:w-1/2 space-y-6 lg:max-w-xl">
//           <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full">
//             <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
//             Smart Laundry Delivery
//           </div>
          
//           <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
//             Laundry &amp; Dry Cleaning, <span className="text-blue-600">Delivered.</span>
//           </h1>
          
//           <p className="text-slate-600 text-lg md:text-xl font-normal leading-relaxed max-w-lg">
//             We pick up, clean, and deliver your garments right to your door. Completely contact-free, 7 days a week.
//           </p>
          
//           {/* Rinse-style Zip Code or Quick Start CTA Box */}
//           <div className="pt-4 max-w-md">
//             <form onSubmit={(e) => e.preventDefault()}>
//               {/* <input 
//                 type="text" 
//                 placeholder="Enter Zip Code or Area" 
//                 className="w-full bg-transparent px-4 py-3 text-slate-800 placeholder-slate-400 font-medium focus:outline-none"
//               /> */}
//               <button 
//                 type="submit" 
//                 className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition shadow-sm hover:shadow shrink-0"
//               >
//                 Get Started
//               </button>
//             </form>
//             {/* <p className="text-xs text-slate-400 mt-2 ml-2">Check availability to see schedules in your area.</p> */}
//           </div>
//         </div>

//         {/* Right Side: Clean overlapping Video Loop Placeholder Container */}
//         <div className="w-full md:w-1/2 flex justify-center relative">
//           <div className="relative w-full max-w-lg aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-slate-200/60 bg-slate-950 flex items-center justify-center group">
            
//             {/* Production Implementation: Un-comment this block when you add your local MP4 file */}
              
//               <video 
//                 autoPlay 
//                 loop 
//                 muted 
//                 playsInline 
//                 className="absolute inset-0 w-full h-full object-cover z-0"
//               >
//                 <source src="/videos/freshfold.mp4" type="video/mp4" />
//               </video> 
           

//             {/* Dummy Mock Video Placeholder Background Track */}
//             {/* <div className="absolute inset-0 bg-gradient-to-tr from-slate-900 via-blue-950 to-slate-900 opacity-90 transition-opacity group-hover:opacity-85 z-0" /> */}
            
//             {/* Minimal Play Overlay UI Graphics */}
//             <div className="relative z-10 flex flex-col items-center gap-3 text-center px-6">
//               <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-lg transform transition group-hover:scale-105 active:scale-95 cursor-pointer">
//                 <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M8 5v14l11-7z" />
//                 </svg>
//               </div>
//               <span className="text-xs font-mono uppercase tracking-widest text-slate-400 font-medium">
                
//               </span>
//               <span className="text-[11px] font-medium text-slate-500 max-w-xs">
                
//               </span>
//             </div>

//             {/* Subtle lower video status bar overlay for realistic presentation asset framing */}
//             <div className="absolute bottom-4 left-6 right-6 flex justify-between items-center z-10 opacity-40">
//               <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
//               <div className="h-1 bg-white/20 rounded-full flex-1 mx-3 overflow-hidden">
//                 <div className="w-1/3 h-full bg-white/60 rounded-full" />
//               </div>
//               <span className="text-[10px] font-mono text-white">LIVE_LOOP</span>
//             </div>

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Sparkles, ArrowRight, Play, Volume2, VolumeX, MapPin, CheckCircle2 } from "lucide-react";

export default function Hero() {
  const router = useRouter();
  const [zipCode, setZipCode] = useState("");
  const [isMuted, setIsMuted] = useState(true);
  const [isValidated, setIsValidated] = useState<boolean | null>(null);
  const [isChecking, setIsChecking] = useState(false);

  // Simple mock zip checker
  const handleZipCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (!zipCode) return;
    
    setIsChecking(true);
    setTimeout(() => {
      setIsChecking(false);
      setIsValidated(true);
      // After 1 second of showing success, route to the booking experience with query state
      setTimeout(() => {
        router.push(`/booking?zip=${encodeURIComponent(zipCode)}`);
      }, 1000);
    }, 800);
  };

  return (
    <section className="relative w-full h-screen min-h-150 flex items-center justify-center px-6 md:px-12 lg:px-24 overflow-hidden bg-slate-950">
      
      {/* 1. CINEMATIC BACKGROUND VIDEO LAYER */}
      <video
        autoPlay
        loop
        muted={isMuted}
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-80"
      >
        <source src="/videos/freshfold.mp4" type="video/mp4" />
      </video>

      {/* 2. PREMIUM MULTI-LAYER CONTRAST OVERLAYS */}
      {/* Layer A: Dark overlay for overall focus */}
      <div className="absolute inset-0 bg-slate-950/40 z-10" />
      
      {/* Layer B: Vertical gradient vignette for elegant reading contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/70 z-10" />
      
      {/* Layer C: Radial backdrop blur to make central typography pop */}
      <div className="absolute inset-0 backdrop-blur-[1px] bg-black/10 z-10" />

      {/* 3. HERO BODY FRAME */}
      <div className="relative z-20 max-w-5xl mx-auto text-center flex flex-col items-center space-y-8">
        
        {/* Sparkle Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-md text-white text-xs md:text-sm font-semibold tracking-wider uppercase px-4 py-1.5 rounded-full shadow-lg">
          <Sparkles className="w-4 h-4 text-blue-400 animate-pulse" />
          <span>Smart Garment Care &amp; Delivery</span>
        </div>

        {/* Cinematic Glowing Header */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.1] max-w-4xl drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
          Your Clothes. <br />
          Perfected &amp; <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-white bg-clip-text text-transparent drop-shadow-[0_2px_15px_rgba(59,130,246,0.4)]">Delivered Fresh.</span>
        </h1>

        {/* Clear Sub-Description */}
        <p className="text-slate-200 text-base sm:text-lg md:text-xl font-medium max-w-2xl leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
          The smart way to check off laundry day. We collect, treat, dry, fold, and deliver back to your doorstep 7 days a week.
        </p>

        {/* 4. FLOATING GLASS-MORPHIC ZIP CHECKER PANEL */}
        <div className="w-full max-w-lg pt-4">
          <div className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl p-3 sm:p-4 shadow-2xl">
            <form onSubmit={handleZipCheck} className="flex flex-col sm:flex-row gap-2">
              <div className="relative flex-1">
                <MapPin className="absolute left-4 top-3.5 h-5 w-5 text-slate-300" />
                <input
                  type="text"
                  required
                  placeholder="Enter Zip Code or Delivery Area"
                  value={zipCode}
                  onChange={(e) => {
                    setZipCode(e.target.value);
                    setIsValidated(null);
                  }}
                  className="w-full pl-11 pr-4 py-3.5 bg-white/15 focus:bg-white text-white focus:text-slate-900 placeholder-slate-300 focus:placeholder-slate-500 border border-white/10 focus:border-white rounded-2xl outline-none transition-all text-sm font-bold tracking-wide"
                />
              </div>

              <button
                type="submit"
                disabled={isChecking || isValidated === true}
                className={`px-8 py-3.5 rounded-2xl font-bold text-sm tracking-wide transition-all duration-300 shrink-0 flex items-center justify-center gap-2 active:scale-[0.98] ${
                  isValidated
                    ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/20"
                    : "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/20"
                }`}
              >
                {isChecking ? (
                  <span>Checking...</span>
                ) : isValidated ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 stroke-[3]" /> Mapped!
                  </>
                ) : (
                  <>
                    Get Started <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
            
            <p className="text-[11px] text-slate-300 font-bold tracking-wider uppercase mt-2.5 flex items-center justify-center gap-1.5 opacity-80">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
              Schedules available in your location tonight
            </p>
          </div>
        </div>

      </div>

      {/* 5. DYNAMIC FLOATING UTILITY ROW */}
      <div className="absolute bottom-8 left-6 right-6 z-20 flex justify-between items-center text-white/50 text-xs">
        
        {/* Toggle Audio Output Button */}
        <button
          onClick={() => setIsMuted(!isMuted)}
          className="p-3 bg-white/5 hover:bg-white/10 hover:text-white border border-white/5 rounded-full backdrop-blur-md transition-all flex items-center gap-2 font-bold tracking-wider uppercase text-[10px]"
          aria-label={isMuted ? "Unmute Video Background" : "Mute Video Background"}
        >
          {isMuted ? (
            <>
              <VolumeX className="w-4 h-4 text-slate-300" /> Sound Off
            </>
          ) : (
            <>
              <Volume2 className="w-4 h-4 text-blue-400" /> Sound On
            </>
          )}
        </button>

        {/* Scroll down mouse animation indicator */}
        <div className="hidden sm:flex flex-col items-center gap-1.5 opacity-60">
          <div className="w-5 h-8 rounded-full border-2 border-white/30 flex justify-center pt-1">
            <div className="w-1 h-1.5 bg-white rounded-full animate-bounce" />
          </div>
          <span className="text-[9px] font-mono tracking-widest uppercase">Scroll Down</span>
        </div>

      </div>

    </section>
  );
}


