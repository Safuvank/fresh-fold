import { useState, useMemo } from 'react';
import { SpeedOption } from '../types/pricing.types';

export const usePricing = (initialWeight = 8) => {
  const [speed, setSpeed] = useState<SpeedOption>('standard');
  const [weight, setWeight] = useState<number>(initialWeight);

  const rates = {
    standard: 99,
    express: 149,
  };

  const currentRate = rates[speed];
  const estimatedTotal = useMemo(() => currentRate * weight, [currentRate, weight]);

  return { speed, setSpeed, weight, setWeight, currentRate, estimatedTotal };
};