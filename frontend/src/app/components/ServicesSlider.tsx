"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface ServiceItem {
  title: string;
  description: string;
  imageUrl: string;
}

const services: ServiceItem[] = [
  {
    title: "Everyday Wash & Fold",
    description: "High-performance washing and precision machine-folding for your regular clothing, t-shirts, denim, and linens.",
    imageUrl: "/images/Change_text_to_freshfold_202605181341.jpeg", // Replace with your image paths
  },
  {
    title: "Premium Dry Cleaning",
    description: "Fabric-specific eco-friendly solvent cleaning for delicate garments, tailored suits, silk dresses, and luxury items.",
    imageUrl:"/images/premium-dry-cleaning-service.jpg" ,
  },
  {
    title: "Tailored Hang Dry Care",
    description: "Delicate air-drying solutions designed specifically for activewear, athleisure, shapewear, and fine knits.",
    imageUrl: "/images/shutterstock_424728877-768x5121-1.jpg",
  },
  {
    title: "Bulky Home & Bedding",
    description: "Deep sanitation wash and high-volume cycles perfect for oversized comforters, duvets, heavy blankets, and rugs.",
    imageUrl: "/images/the-care-laundry-services-dry-cleaning-laundry-hanging@2x.jpg",
  }
];

export default function ServicesSlider() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Simple pure JS scroll controls for the slider arrows
  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollAmount = clientWidth * 0.75; // Scroll roughly 3/4ths of container width
      scrollContainerRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="services" className="bg-[#fafafa] py-24 px-6 md:px-12 lg:px-24 border-b border-slate-200/60 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Header Row with Minimalist Navigation Arrows */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-6">
          <div className="max-w-2xl space-y-4">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              Versatile Garment Care <br />Across All Fabrics
            </h2>
            <p className="text-slate-500 text-sm md:text-base max-w-lg leading-relaxed">
              From premium technical activewear to delicate structural wool coats, our specialized cleaning methodologies deliver immaculate results.
            </p>
          </div>
          
          {/* Slider Navigation Arrows (Matching your design image) */}
          <div className="flex gap-3">
            <button 
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full border border-slate-200 bg-white hover:border-slate-400 text-slate-700 flex items-center justify-center transition-all shadow-sm active:scale-95"
              aria-label="Scroll left"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full border border-slate-200 bg-white hover:border-slate-400 text-slate-700 flex items-center justify-center transition-all shadow-sm active:scale-95"
              aria-label="Scroll right"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Card Slider Container */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} // Hides native scrollbar track
        >
          {services.map((service, index) => (
            <div 
              key={index}
              className="w-[85vw] sm:w-[45vw] lg:w-[23.5vw] shrink-0 aspect-[4/5] relative rounded-[32px] overflow-hidden snap-start group shadow-sm border border-slate-100"
            >
              {/* Card Base Image Layer */}
              <Image 
                src={service.imageUrl} 
                alt={service.title} 
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Dark Gradient Overlay to ensure text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

              {/* Bottom Content Area */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 flex flex-col justify-end text-white">
                <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-2.5">
                  {service.title}
                </h3>
                <p className="text-slate-300/90 text-xs md:text-sm leading-relaxed font-normal opacity-90">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}