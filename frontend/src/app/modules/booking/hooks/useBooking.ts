import { useBookingStore } from "../store/booking.store";

export const useBooking = () => {
  const {
    currentStep,
    setCurrentStep,

    selectedSpeed,
    setSelectedSpeed,

    selectedServices,
    toggleService,

    items,
    updateItemCount,

    schedule,
    setSchedule,

    estimatedTotal,
    calculateEstimatedTotal,
  } = useBookingStore();

  const nextStep = () => {
    /*
      STEP VALIDATIONS
    */

    // SERVICES VALIDATION
    if (currentStep === 2 && selectedServices.length === 0) {
      alert("Please select at least one service");

      return;
    }

    // ITEMS VALIDATION
    if (currentStep === 3 && items.every((item) => item.count === 0)) {
      alert("Please add at least one item");

      return;
    }

    // SCHEDULE VALIDATION
    if (currentStep === 4 && (!schedule.pickupDate || !schedule.pickupTime)) {
      alert("Please select pickup schedule");

      return;
    }

    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return {
    currentStep,

    selectedSpeed,
    setSelectedSpeed,

    selectedServices,
    toggleService,

    items,
    updateItemCount,

    schedule,
    setSchedule,

    estimatedTotal,
    calculateEstimatedTotal,

    nextStep,
    prevStep,
  };
};
