import { PricingItem } from "../types/pricing.types";

export const pricingItems: PricingItem[] = [
  {
    id: "1",
    name: "Shirt / T-Shirt",
    ironingPrice: 20,
    dryCleanPrice: 149,
    isSpecialty: false,
  },
  {
    id: "2",
    name: "Trousers / Jeans",
    ironingPrice: 30,
    dryCleanPrice: 179,
    isSpecialty: false,
  },
  {
    id: "3",
    name: "Suit (2-Piece)",
    ironingPrice: 99,
    dryCleanPrice: 499,
    isSpecialty: true,
  },
  {
    id: "4",
    name: "Dress / Gown",
    ironingPrice: 79,
    dryCleanPrice: 599,
    isSpecialty: true,
  },
  {
    id: "5",
    name: "Saree (Regular)",
    ironingPrice: 80,
    dryCleanPrice: 299,
    isSpecialty: false,
  },
  {
    id: "6",
    name: "Saree (Heavy/Zari)",
    ironingPrice: null,
    dryCleanPrice: 599,
    isSpecialty: true,
  },
  {
    id: "7",
    name: "Bedsheet (Single)",
    ironingPrice: 40,
    dryCleanPrice: 199,
    isSpecialty: false,
  },
  {
    id: "8",
    name: "Bedsheet (Double)",
    ironingPrice: 60,
    dryCleanPrice: 249,
    isSpecialty: false,
  },
  {
    id: "9",
    name: "Winter Blanket",
    ironingPrice: null,
    dryCleanPrice: 499,
    isSpecialty: true,
  },
];

export const washAndFoldFeatures = [
  "Free doorstep pickup & delivery",
  "Premium eco-friendly detergents",
  "Neatly folded and packaged",
  "Standard 24-hour turnaround",
  "Minimum order weight: 3 kg",
];
