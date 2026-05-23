"use client";

import React from "react";
import { usePricing } from "../hooks/usePricing";
import { PricingCard } from "../components/PricingCard";
import { PriceCalculator } from "../components/PriceCalculator";

export const PricingSection = () => {
  // Pull all logic from the custom hook
  const { speed, setSpeed, weight, setWeight, currentRate, estimatedTotal } =
    usePricing();

  return (
    <section className="py-20 font-sans">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-[#0B1528] mb-4">
            Simple, Transparent Pricing
          </h1>
        </div>

        <div className="flex flex-col md:flex-row gap-6 md:gap-8 justify-center items-stretch">
          <PricingCard />
          <PriceCalculator
            speed={speed}
            setSpeed={setSpeed}
            weight={weight}
            setWeight={setWeight}
            currentRate={currentRate}
            estimatedTotal={estimatedTotal}
          />
        </div>
      </div>
    </section>
  );
};
