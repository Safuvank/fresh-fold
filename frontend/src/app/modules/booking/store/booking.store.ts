import { create } from "zustand";
import { initialItemQuantities } from "../data/booking.data";

interface SelectedService {
  id: string;
  title: string;
}

interface ItemQuantity {
  id: string;
  name: string;
  count: number;
  pricePerUnit: number;
}

interface Schedule {
  pickupDate: string;
  pickupTime: string;
}

interface BookingStore {
  currentStep: number;

  selectedSpeed: string;

  selectedServices: SelectedService[];

  items: ItemQuantity[];

  schedule: Schedule;

  estimatedTotal: number;

  setCurrentStep: (step: number) => void;

  setSelectedSpeed: (speed: string) => void;

  toggleService: (service: SelectedService) => void;

  updateItemCount: (id: string, count: number) => void;

  setSchedule: (schedule: Schedule) => void;

  calculateEstimatedTotal: () => void;
}

const getSpeedMultiplier = (speed: string) => {
  if (speed === "express") {
    return 1.5;
  }

  if (speed === "economy") {
    return 0.85;
  }

  return 1;
};

export const useBookingStore = create<BookingStore>((set, get) => ({
  currentStep: 1,

  selectedSpeed: "standard",

  selectedServices: [],

  items: initialItemQuantities,

  schedule: {
    pickupDate: "",
    pickupTime: "",
  },

  estimatedTotal: 0,

  setCurrentStep: (step) =>
    set({
      currentStep: step,
    }),

  setSelectedSpeed: (speed) => {
    set({
      selectedSpeed: speed,
    });

    get().calculateEstimatedTotal();
  },

  toggleService: (service) => {
    const services = get().selectedServices;

    const exists = services.find((s) => s.id === service.id);

    if (exists) {
      set({
        selectedServices: services.filter((s) => s.id !== service.id),
      });
    } else {
      set({
        selectedServices: [...services, service],
      });
    }
  },

  updateItemCount: (id, count) => {
    const updatedItems = get().items.map((item) =>
      item.id === id
        ? {
            ...item,
            count,
          }
        : item,
    );

    set({
      items: updatedItems,
    });

    get().calculateEstimatedTotal();
  },

  setSchedule: (schedule) =>
    set({
      schedule,
    }),

  calculateEstimatedTotal: () => {
    const { items, selectedSpeed } = get();

    const subtotal = items.reduce((acc, item) => {
      return acc + item.pricePerUnit * item.count;
    }, 0);

    const speedMultiplier = getSpeedMultiplier(selectedSpeed);

    const total = subtotal * speedMultiplier;

    set({
      estimatedTotal: total,
    });
  },
}));
