import { PricingItem } from '../types/pricing.types';
import { pricingItems } from '../data/pricing.data';

// Simulating an API call
export const fetchPricingItems = async (): Promise<PricingItem[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(pricingItems), 500); // Fake network delay
  });
};