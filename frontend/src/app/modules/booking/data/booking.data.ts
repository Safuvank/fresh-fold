import { Shirt, Sparkles, ShoppingBag, Truck } from "lucide-react";
import { ItemCount } from "../types/booking.types";

export const stepsConfig = [
  { step: 1, label: "SPEED" },
  { step: 2, label: "SERVICES" },
  { step: 3, label: "DETAILS" },
  { step: 4, label: "SCHEDULE" },
  { step: 5, label: "CONFIRM" },
];

export const initialItemQuantities: ItemCount[] = [
  { id: "shirts", name: "Shirts", pricePerUnit: 150, count: 0, icon: Shirt },
  { id: "pants", name: "Pants", pricePerUnit: 180, count: 1, icon: Shirt },
  { id: "tshirts", name: "T-Shirts", pricePerUnit: 99, count: 1, icon: Shirt },
  { id: "jeans", name: "Jeans", pricePerUnit: 199, count: 1, icon: Shirt },
  { id: "jackets", name: "Jackets", pricePerUnit: 299, count: 0, icon: Shirt },
];

export const servicesConfig = [
  {
    id: "daily",
    title: "Daily Laundry",
    desc: "Everyday wash & fold garment bundles",
    priceTag: "From ₹99/kg",
    icon: Shirt,
  },
  {
    id: "premium",
    title: "Premium Laundry",
    desc: "Gentle care cycles for technical delicate fabrics",
    priceTag: "From ₹199/kg",
    icon: Sparkles,
  },
  {
    id: "dryclean",
    title: "Dry Cleaning",
    desc: "Professional advanced dry chemical solvent processing",
    priceTag: "From ₹149/item",
    icon: ShoppingBag,
  },
  {
    id: "ironing",
    title: "Iron Only",
    desc: "Crisp architectural steam press and iron configurations",
    priceTag: "From ₹49/item",
    icon: Truck,
  },
];
