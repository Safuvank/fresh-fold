// "use client";

// import React, { useState } from 'react';

// interface ProcessStep {
//   tabName: string;
//   heading: string;
//   description: string;
//   bulletPoints: string[];
//   // SVG configuration options for our local self-contained dummy illustration layers
//   svgBgColor: string;
//   svgIconColor: string;
// }

// const processSteps: ProcessStep[] = [
//   {
//     tabName: "Pickup",
//     heading: "Smart Doorstep Collection",
//     description: "Simply book a window online or via text. Drop your clothes in any bag on your porch or hand them directly to our driver. We track your bags through every stage of the transit.",
//     bulletPoints: [
//       "Real-time driver tracking and ETA alerts",
//       "Flexible evening and morning pickup windows",
//     ],
//     svgBgColor: "bg-blue-500/10",
//     svgIconColor: "text-blue-600"
//   },
//   {
//     tabName: "Sorting",
//     heading: "Detailed Fabric Assessment",
//     description: "Our processing specialists open every single bag to sort fabrics carefully. We separate whites from darks, look for hidden pockets items, and tag your personal care preferences.",
//     bulletPoints: [
//       "Rigorous color and material isolation",
//       "Stain pre-treatment identification",
//     ],
//     svgBgColor: "bg-indigo-500/10",
//     svgIconColor: "text-indigo-600"
//   },
//   {
//     tabName: "Washing",
//     heading: "Premium Eco-Safe Washing",
//     description: "Your garments are washed separately from other customers using state-of-the-art machinery. We select precise temperature control profiles tailored to keep fibers vibrant.",
//     bulletPoints: [
//       "Hypoallergenic and toxic-free detergents",
//       "Dedicated single-load sanitizing washers",
//     ],
//     svgBgColor: "bg-sky-500/10",
//     svgIconColor: "text-sky-600"
//   },
//   {
//     tabName: "Drying",
//     heading: "Fabric-Calibrated Temperature Drying",
//     description: "Clothes are tumbled using precise, damage-reducing thermal sensors to prevent shrinkage. Delicate pieces are directed to our customized ambient hang-dry room.",
//     bulletPoints: [
//       "Advanced thermal-moisture sensors",
//       "Dedicated air-dry grids for athletic wear",
//     ],
//     svgBgColor: "bg-cyan-500/10",
//     svgIconColor: "text-cyan-600"
//   },
//   {
//     tabName: "Folding",
//     heading: "Crisp Precision Hand-Folding",
//     description: "Once dry, everything is immediately hand-folded or neatly arranged on premium hangers. We bundle socks and match sets so you can place items right into drawers.",
//     bulletPoints: [
//       "Bespoke machine-assisted folding matrices",
//       "Wrinkle-free hanger configurations",
//     ],
//     svgBgColor: "bg-emerald-500/10",
//     svgIconColor: "text-emerald-600"
//   },
//   {
//     tabName: "Packaging",
//     heading: "Protective Outer Safeguarding",
//     description: "We bundle everything into custom, weather-proof, reusable laundry bags. This layer locks out elements during transit so your garments smell entirely brand-new.",
//     bulletPoints: [
//       "Reusable, eco-friendly signature duffels",
//       "Moisture-barrier seal preservation",
//     ],
//     svgBgColor: "bg-teal-500/10",
//     svgIconColor: "text-teal-600"
//   },
//   {
//     tabName: "Delivery",
//     heading: "Fresh Return to Your Door",
//     description: "Your clothes return home looking freshly pressed and immaculate. Drop-off alerts drop directly to your phone so you can collect them whenever you step outside.",
//     bulletPoints: [
//       "Guaranteed 24-48 hour fulfillment cycle",
//       "Contactless delivery logging and verification",
//     ],
//     svgBgColor: "bg-violet-500/10",
//     svgIconColor: "text-violet-600"
//   }
// ];

// export default function HowItWorks() {
//   const [activeTab, setActiveTab] = useState<number>(0);

//   return (
//     <section id="how-it-works" className="bg-[#fafafa] py-24 px-6 md:px-12 lg:px-24 border-b border-slate-200/60">
//       <div className="max-w-7xl mx-auto">

//         {/* Section Title Block */}
//         <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
//           <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
//             The Advanced Clothing Care Process
//           </h2>
//           <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-xl mx-auto">
//             Our state-of-the-art facility tracking ensures consistent cleanliness, optimal garment protection, and exact execution on every fiber.
//           </p>
//         </div>

//         {/* Master Interactive Dashboard Container */}
//         <div className="bg-white border border-slate-200/80 rounded-[32px] p-6 md:p-10 shadow-sm">

//           {/* Scrollable Navigation Progress Line */}
//           <div className="flex gap-2 items-center overflow-x-auto pb-6 border-b border-slate-100 scrollbar-none mb-10">
//             {processSteps.map((step, idx) => {
//               const isActive = idx === activeTab;
//               return (
//                 <button
//                   key={idx}
//                   onClick={() => setActiveTab(idx)}
//                   className={`px-5 py-2 text-xs md:text-sm font-semibold whitespace-nowrap rounded-full transition-all border ${
//                     isActive
//                       ? "bg-blue-600 text-white border-blue-600 shadow-sm shadow-blue-600/10"
//                       : "bg-white text-slate-600 border-slate-200 hover:border-slate-400"
//                   }`}
//                 >
//                   {step.tabName}
//                 </button>
//               );
//             })}
//           </div>

//           {/* Active Step Content Layout */}
//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

//             {/* Left Column: Explanatory Copy */}
//             <div className="lg:col-span-6 space-y-5">
//               <h3 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight leading-tight">
//                 {processSteps[activeTab].heading}
//               </h3>

//               <p className="text-slate-600 text-sm md:text-base font-normal leading-relaxed">
//                 {processSteps[activeTab].description}
//               </p>

//               {/* Bullet points with blue checkmark icons */}
//               <ul className="space-y-3 pt-2">
//                 {processSteps[activeTab].bulletPoints.map((bullet, i) => (
//                   <li key={i} className="flex items-center gap-3 text-sm font-semibold text-slate-800">
//                     <div className="w-5 h-5 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
//                       <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
//                         <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
//                       </svg>
//                     </div>
//                     <span>{bullet}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Right Column: Complete Local Pure-CSS/SVG Dummy Visual Placeholder */}
//             <div className="lg:col-span-6">
//               <div className={`relative w-full aspect-[4/3] rounded-2xl border border-slate-200/60 flex flex-col items-center justify-center p-8 transition-colors duration-500 ${processSteps[activeTab].svgBgColor}`}>

//                 {/* Structural Abstract Geometry Layout replacing external assets */}
//                 <svg className={`w-16 h-16 mb-4 animate-pulse opacity-80 ${processSteps[activeTab].svgIconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
//                 </svg>

//                 <span className="text-xs font-mono uppercase tracking-widest text-slate-400 font-semibold">
//                   Step Frame Asset Placeholder
//                 </span>
//                 <span className="text-xs font-medium text-slate-500 mt-1 text-center">
//                   [ {processSteps[activeTab].tabName} Workflow Graphic Panel ]
//                 </span>
//               </div>
//             </div>

//           </div>

//         </div>

//       </div>
//     </section>
//   );
// }

// "use client";

// import React, { useState } from "react";
// import Image from "next/image";

// interface ProcessStep {
//   tabName: string;
//   heading: string;
//   description: string;
//   bulletPoints: string[];
//   // SVG configuration options for our local self-contained dummy illustration layers
//   imageUrl: string;
// }

// const processSteps: ProcessStep[] = [
//   {
//     tabName: "Pickup",
//     heading: "Smart Doorstep Collection",
//     description:
//       "Simply book a window online or via text. Drop your clothes in any bag on your porch or hand them directly to our driver. We track your bags through every stage of the transit.",
//     bulletPoints: [
//       "Real-time driver tracking and ETA alerts",
//       "Flexible evening and morning pickup windows",
//     ],
//     imageUrl: "/images/pickup.png",
//   },
//   {
//     tabName: "Sorting",
//     heading: "Detailed Fabric Assessment",
//     description:
//       "Our processing specialists open every single bag to sort fabrics carefully. We separate whites from darks, look for hidden pockets items, and tag your personal care preferences.",
//     bulletPoints: [
//       "Rigorous color and material isolation",
//       "Stain pre-treatment identification",
//     ],
//     imageUrl: "/images/pickup.png",
//   },
//   {
//     tabName: "Washing",
//     heading: "Premium Eco-Safe Washing",
//     description:
//       "Your garments are washed separately from other customers using state-of-the-art machinery. We select precise temperature control profiles tailored to keep fibers vibrant.",
//     bulletPoints: [
//       "Hypoallergenic and toxic-free detergents",
//       "Dedicated single-load sanitizing washers",
//     ],
//     imageUrl: "/images/pickup.png",
//   },
//   {
//     tabName: "Drying",
//     heading: "Fabric-Calibrated Temperature Drying",
//     description:
//       "Clothes are tumbled using precise, damage-reducing thermal sensors to prevent shrinkage. Delicate pieces are directed to our customized ambient hang-dry room.",
//     bulletPoints: [
//       "Advanced thermal-moisture sensors",
//       "Dedicated air-dry grids for athletic wear",
//     ],
//     imageUrl: "/images/pickup.png",
//   },
//   {
//     tabName: "Folding",
//     heading: "Crisp Precision Hand-Folding",
//     description:
//       "Once dry, everything is immediately hand-folded or neatly arranged on premium hangers. We bundle socks and match sets so you can place items right into drawers.",
//     bulletPoints: [
//       "Bespoke machine-assisted folding matrices",
//       "Wrinkle-free hanger configurations",
//     ],
//     imageUrl: "/images/pickup.png",
//   },
//   {
//     tabName: "Packaging",
//     heading: "Protective Outer Safeguarding",
//     description:
//       "We bundle everything into custom, weather-proof, reusable laundry bags. This layer locks out elements during transit so your garments smell entirely brand-new.",
//     bulletPoints: [
//       "Reusable, eco-friendly signature duffels",
//       "Moisture-barrier seal preservation",
//     ],
//     imageUrl: "/images/pickup.png",
//   },
//   {
//     tabName: "Delivery",
//     heading: "Fresh Return to Your Door",
//     description:
//       "Your clothes return home looking freshly pressed and immaculate. Drop-off alerts drop directly to your phone so you can collect them whenever you step outside.",
//     bulletPoints: [
//       "Guaranteed 24-48 hour fulfillment cycle",
//       "Contactless delivery logging and verification",
//     ],
//     imageUrl: "/images/pickup.png",
//   },
// ];

// export default function HowItWorks() {
//   const [activeTab, setActiveTab] = useState<number>(0);

//   return (
//     <section
//       id="how-it-works"
//       className="bg-[#fafafa] py-24 px-6 md:px-12 lg:px-24 border-b border-slate-200/60"
//     >
//       <div className="max-w-7xl mx-auto">
//         {/* Section Title Block */}
//         <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
//           <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
//             The Advanced Clothing Care Process
//           </h2>
//           <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-xl mx-auto">
//             Our state-of-the-art facility tracking ensures consistent
//             cleanliness, optimal garment protection, and exact execution on
//             every fiber.
//           </p>
//         </div>

//         {/* Master Interactive Dashboard Container */}
//         <div className="bg-white border border-slate-200/80 rounded-[32px] p-6 md:p-10 shadow-sm">
//           {/* Scrollable Navigation Progress Line */}
//           <div className="flex gap-2 items-center overflow-x-auto pb-6 border-b border-slate-100 scrollbar-none mb-10">
//             {processSteps.map((step, idx) => {
//               const isActive = idx === activeTab;
//               return (
//                 <button
//                   key={idx}
//                   onClick={() => setActiveTab(idx)}
//                   className={`px-5 py-2 text-xs md:text-sm font-semibold whitespace-nowrap rounded-full transition-all border ${
//                     isActive
//                       ? "bg-blue-600 text-white border-blue-600 shadow-sm shadow-blue-600/10"
//                       : "bg-white text-slate-600 border-slate-200 hover:border-slate-400"
//                   }`}
//                 >
//                   {step.tabName}
//                 </button>
//               );
//             })}
//           </div>

//           {/* Active Step Content Layout */}
//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
//             {/* Left Column: Explanatory Copy */}
//             <div className="lg:col-span-6 space-y-5">
//               <h3 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight leading-tight">
//                 {processSteps[activeTab].heading}
//               </h3>

//               <p className="text-slate-600 text-sm md:text-base font-normal leading-relaxed">
//                 {processSteps[activeTab].description}
//               </p>

//               {/* Bullet points with blue checkmark icons */}
//               <ul className="space-y-3 pt-2">
//                 {processSteps[activeTab].bulletPoints.map((bullet, i) => (
//                   <li
//                     key={i}
//                     className="flex items-center gap-3 text-sm font-semibold text-slate-800"
//                   >
//                     <div className="w-5 h-5 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
//                       <svg
//                         className="w-3 h-3"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                         strokeWidth="3"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           d="M5 13l4 4L19 7"
//                         />
//                       </svg>
//                     </div>
//                     <span>{bullet}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Right Column: Complete Local Pure-CSS/SVG Dummy Visual Placeholder */}
//             <div className="lg:col-span-6">
//               <div
//                 className={`relative w-full aspect-[4/3] rounded-2xl border border-slate-200/60 flex flex-col items-center justify-center p-8 transition-colors duration-500 ${processSteps[activeTab].svgBgColor}`}
//               >
//                 {/* Structural Abstract Geometry Layout replacing external assets */}
//                 <svg
//                   className={`w-16 h-16 mb-4 animate-pulse opacity-80 ${processSteps[activeTab].svgIconColor}`}
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   strokeWidth="1.5"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
//                   />
//                 </svg>

//                 <span className="text-xs font-mono uppercase tracking-widest text-slate-400 font-semibold">
//                   Step Frame Asset Placeholder
//                 </span>
//                 <span className="text-xs font-medium text-slate-500 mt-1 text-center">
//                   [ {processSteps[activeTab].tabName} Workflow Graphic Panel ]
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import React, { useState } from "react";
import Image from "next/image";

interface ProcessStep {
  tabName: string;
  heading: string;
  description: string;
  bulletPoints: string[];
  imageUrl: string;
}

const processSteps: ProcessStep[] = [
  {
    tabName: "Pickup",
    heading: "Smart Doorstep Collection",
    description:
      "Simply book a window online or via text. Drop your clothes in any bag on your porch or hand them directly to our driver. We track your bags through every stage of the transit.",
    bulletPoints: [
      "Real-time driver tracking and ETA alerts",
      "Flexible evening and morning pickup windows",
    ],
    imageUrl: "/images/delivery.png",
  },
  {
    tabName: "Sorting",
    heading: "Detailed Fabric Assessment",
    description:
      "Our processing specialists open every single bag to sort fabrics carefully. We separate whites from darks, look for hidden pockets items, and tag your personal care preferences.",
    bulletPoints: [
      "Rigorous color and material isolation",
      "Stain pre-treatment identification",
    ],
    imageUrl: "/images/sorting.png",
  },
  {
    tabName: "Washing",
    heading: "Premium Eco-Safe Washing",
    description:
      "Your garments are washed separately from other customers using state-of-the-art machinery. We select precise temperature control profiles tailored to keep fibers vibrant.",
    bulletPoints: [
      "Hypoallergenic and toxic-free detergents",
      "Dedicated single-load sanitizing washers",
    ],
    imageUrl: "/images/washing.png",
  },
  {
    tabName: "Drying",
    heading: "Fabric-Calibrated Temperature Drying",
    description:
      "Clothes are tumbled using precise, damage-reducing thermal sensors to prevent shrinkage. Delicate pieces are directed to our customized ambient hang-dry room.",
    bulletPoints: [
      "Advanced thermal-moisture sensors",
      "Dedicated air-dry grids for athletic wear",
    ],
    imageUrl: "/images/drying.png",
  },
  {
    tabName: "Folding",
    heading: "Crisp Precision Hand-Folding",
    description:
      "Once dry, everything is immediately hand-folded or neatly arranged on premium hangers. We bundle socks and match sets so you can place items right into drawers.",
    bulletPoints: [
      "Bespoke machine-assisted folding matrices",
      "Wrinkle-free hanger configurations",
    ],
    imageUrl: "/images/folding.png",
  },
  {
    tabName: "Packaging",
    heading: "Protective Outer Safeguarding",
    description:
      "We bundle everything into custom, weather-proof, reusable laundry bags. This layer locks out elements during transit so your garments smell entirely brand-new.",
    bulletPoints: [
      "Reusable, eco-friendly signature duffels",
      "Moisture-barrier seal preservation",
    ],
    imageUrl: "/images/packing.png",
  },
  {
    tabName: "Delivery",
    heading: "Fresh Return to Your Door",
    description:
      "Your clothes return home looking freshly pressed and immaculate. Drop-off alerts drop directly to your phone so you can collect them whenever you step outside.",
    bulletPoints: [
      "Guaranteed 24-48 hour fulfillment cycle",
      "Contactless delivery logging and verification",
    ],
    imageUrl: "/images/delivery.png",
  },
];

export default function HowItWorks() {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <section
      id="how-it-works"
      className="bg-[#fafafa] py-24 px-6 md:px-12 lg:px-24 border-b border-slate-200/60"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            The Advanced Clothing Care Process
          </h2>

          <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-xl mx-auto">
            Our state-of-the-art facility tracking ensures consistent
            cleanliness, optimal garment protection, and exact execution on
            every fiber.
          </p>
        </div>

        {/* Main Container */}
        <div className="bg-white border border-slate-200/80 rounded-[32px] p-6 md:p-10 shadow-sm">
          {/* Tabs */}
          <div className="flex gap-2 items-center overflow-x-auto pb-6 border-b border-slate-100 scrollbar-none mb-10">
            {processSteps.map((step, idx) => {
              const isActive = idx === activeTab;

              return (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`px-5 py-2 text-xs md:text-sm font-semibold whitespace-nowrap rounded-full transition-all border ${
                    isActive
                      ? "bg-blue-600 text-white border-blue-600 shadow-sm shadow-blue-600/10"
                      : "bg-white text-slate-600 border-slate-200 hover:border-slate-400"
                  }`}
                >
                  {step.tabName}
                </button>
              );
            })}
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Side */}
            <div className="lg:col-span-6 space-y-5">
              <h3 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight leading-tight">
                {processSteps[activeTab].heading}
              </h3>

              <p className="text-slate-600 text-sm md:text-base font-normal leading-relaxed">
                {processSteps[activeTab].description}
              </p>

              {/* Bullet Points */}
              <ul className="space-y-3 pt-2">
                {processSteps[activeTab].bulletPoints.map((bullet, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-sm font-semibold text-slate-800"
                  >
                    <div className="w-5 h-5 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                      <svg
                        className="w-3 h-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth="3"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>

                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Side Image */}
            <div className="lg:col-span-6">
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl border border-slate-200/60">
                <Image
                  src={processSteps[activeTab].imageUrl}
                  alt={processSteps[activeTab].heading}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
