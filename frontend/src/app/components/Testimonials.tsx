"use client";

import React from 'react';

interface TestimonialItem {
  quoteTitle: string;
  bodyText: string;
  authorName: string;
  authorRole: string;
  avatarInitials: string;
}

const testimonials: TestimonialItem[] = [
  {
    quoteTitle: "Revolutionized my weekly routine!",
    bodyText: "FreshFold has completely changed how I manage my household. The pickup is always right on time, and my clothes return beautifully crisp. Their attention to care and fabric protection is exceptional.",
    authorName: "Sarah Jenkins",
    authorRole: "Premium Member",
    avatarInitials: "SJ"
  },
  {
    quoteTitle: "Excellent support for delicate fabrics.",
    bodyText: "The durability and performance of their dry cleaning service has significantly improved my wardrobe's lifespan. Excellent support for specialized garments, custom silks, and designer suits.",
    authorName: "Carlos Mendoza",
    authorRole: "Operations Manager",
    avatarInitials: "CM"
  },
  {
    quoteTitle: "Provides the exact specifications we need!",
    bodyText: "For our business uniform laundry requirements, FreshFold provides the exact sanitization standards we need. Their reliability, attention to detail, and next-day turnaround are unmatched.",
    authorName: "Rajesh Kumar",
    authorRole: "Hospitality Director",
    avatarInitials: "RK"
  },
  {
    quoteTitle: "Absolutely flawless presentation.",
    bodyText: "I am incredibly picky about how my button-down shirts are pressed. They return them pristine, structured, and organized neatly on premium hangers every single week without fail.",
    authorName: "Johann Mueller",
    authorRole: "Creative Director",
    avatarInitials: "JM"
  }
];

export default function Testimonials() {
  return (
    <section id="reviews" className="bg-white py-24 px-6 md:px-12 lg:px-24 border-b border-slate-200/60 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            Trusted Performance. Proven Results.
          </h2>
          <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-xl mx-auto">
            From everyday wash and fold cycles to specialized delicate dry cleaning, we deliver absolute excellence for your wardrobe care.
          </p>
        </div>

        {/* Horizontal Scroll Testimonial Row */}
        <div 
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-6 pt-2"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {testimonials.map((item, index) => (
            <div 
              key={index}
              className="w-[85vw] sm:w-[45vw] lg:w-[28vw] shrink-0 bg-[#fafafa] border border-slate-200/70 rounded-[24px] p-8 flex flex-col justify-between snap-start shadow-sm hover:border-slate-300 transition-all duration-300"
            >
              <div className="space-y-4">
                {/* Styled Quote Icon Indicator matching your screenshot */}
                <div className="text-blue-600 font-serif text-5xl leading-none h-4 select-none select-none select-none">
                  “
                </div>
                
                {/* Testimonial Headline */}
                <h3 className="text-lg font-bold text-slate-900 tracking-tight pt-2">
                  {item.quoteTitle}
                </h3>
                
                {/* Testimonial Content Body */}
                <p className="text-slate-600 text-sm leading-relaxed font-normal">
                  {item.bodyText}
                </p>
              </div>

              {/* Author Footer Identity Area */}
              <div className="flex items-center gap-3.5 pt-8 mt-6 border-t border-slate-200/50">
                {/* Minimal CSS Placeholder Avatar Block */}
                <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-700 shrink-0 border border-slate-300/30">
                  {item.avatarInitials}
                </div>
                
                <div className="flex flex-col min-w-0">
                  <span className="text-sm font-bold text-slate-900 truncate">
                    {item.authorName}
                  </span>
                  <span className="text-xs font-medium text-slate-400 truncate">
                    {item.authorRole}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}