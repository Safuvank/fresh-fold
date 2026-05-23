export interface PricingItem {
  id: string;
  name: string;
  ironingPrice: number | null;
  dryCleanPrice: number;
  isSpecialty: boolean;
}

export type SpeedOption = 'standard' | 'express';