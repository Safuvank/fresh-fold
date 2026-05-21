import React from 'react';

interface ServiceItem {
  name: string;
  subtext: string;
  price: string;
  features: string[];
}

const serviceCatalog: ServiceItem[] = [
  {
    name: "Wash & Fold Bag",
    subtext: "Everyday items, underwear, sheets, and activewear.",
    price: "$2.25 / item",
    features: ["Separated whites & colors", "Hypoallergenic options", "Neatly stacked and folded"]
  },
  {
    name: "Dry Cleaning & Pressing",
    subtext: "Button-downs, blouses, dresses, suits, and jackets.",
    price: "$6.50 + / item",
    features: ["Expert stain treatment", "Hand-pressed finishing", "Returned crisp on custom hangers"]
  },
  {
    name: "Comforters & Bulk items",
    subtext: "Heavy blankets, duvets, rugs, and oversized materials.",
    price: "$25.00 / item",
    features: ["Deep sanitation cycle", "Fluffed fill technology", "Eco-safe premium formulas"]
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-[#fafafa] px-6 md:px-12 lg:px-24 border-t border-b border-slate-100">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Layout */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-3">Simple Rates</h2>
            <p className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">Transparent, Per-Item Pricing</p>
          </div>
          <p className="text-slate-500 text-sm md:text-base max-w-sm">
            No subscription loops, no unexpected delivery fees. Pay exactly for what needs cleaning.
          </p>
        </div>

        {/* Catalog Grid Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {serviceCatalog.map((service) => (
            <div 
              key={service.name} 
              className="bg-white rounded-2xl border border-slate-200/80 p-8 flex flex-col justify-between hover:shadow-xl hover:border-slate-300 transition-all duration-300 group"
            >
              <div>
                <div className="flex justify-between items-start gap-4 mb-4">
                  <h3 className="text-xl font-bold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">
                    {service.name}
                  </h3>
                </div>
                
                <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                  {service.subtext}
                </p>

                <div className="text-2xl font-black text-slate-900 tracking-tight mb-6 pb-6 border-b border-slate-100">
                  {service.price}
                </div>

                <ul className="space-y-3.5">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-600">
                      <svg className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-4">
                <button className="w-full bg-slate-950 hover:bg-slate-800 text-white font-semibold py-3 rounded-xl transition shadow-sm text-sm tracking-wide">
                  Select Service
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Rinse-style Addon text */}
        <div className="mt-12 bg-white border border-slate-200 rounded-2xl p-6 text-center max-w-2xl mx-auto">
          <p className="text-slate-600 text-sm font-medium">
             <strong>Looking for regular cleanings?</strong> Ask about our high-volume bag discount pricing after your first scheduled order pickup.
          </p>
        </div>

      </div>
    </section>
  );
}