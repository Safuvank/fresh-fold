import { LucideIcon } from "lucide-react";

export type SpeedType =
  | "express"
  | "standard"
  | "economy";

export type MeasureMode =
  | "weight"
  | "items";

export interface ItemCount {
  id: string;
  name: string;
  pricePerUnit: number;
  count: number;
  icon: LucideIcon;
}