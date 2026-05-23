// "use client";

// import ProgressBar from "@/app/modules/booking/components/ProgressBar";
// import NavigationFooter from "@/app/modules/booking/components/NavigationFooter";
// import SpeedStep from "@/app/modules/booking/components/SpeedStep";
// import ServicesStep from "@/app/modules/booking/components/ServiceStep";
// import DetailsStep from "@/app/modules/booking/components/DetailStep";
// import ScheduleStep from "@/app/modules/booking/components/ScheduleStep";
// import ConfirmStep from "@/app/modules/booking/components/ConfirmStep";

// import { useBooking } from "@/app/modules/booking/hooks/useBooking";
// import { createBooking } from "@/app/modules/booking/api/booking.api";

// export default function BookingLayout() {
//   const { currentStep, selectedSpeed, setSelectedSpeed, nextStep, prevStep } =
//     useBooking();

//   return (
//     <div className="min-h-screen">
//       <ProgressBar currentStep={currentStep} />

//       <main className="max-w-4xl mx-auto p-6">
//         {currentStep === 1 && (
//           <SpeedStep
//             selectedSpeed={selectedSpeed}
//             setSelectedSpeed={setSelectedSpeed}
//           />
//         )}

//         {currentStep === 2 && <ServicesStep />}

//         {currentStep === 3 && <DetailsStep />}

//         {currentStep === 4 && <ScheduleStep />}

//         {currentStep === 5 && <ConfirmStep />}
//       </main>

//       <NavigationFooter
//         currentStep={currentStep}
//         nextStep={nextStep}
//         prevStep={prevStep}
//       />
//     </div>
//   );
// }

"use client";

import ProgressBar from "@/app/modules/booking/components/ProgressBar";

import NavigationFooter from "@/app/modules/booking/components/NavigationFooter";

import SpeedStep from "@/app/modules/booking/components/SpeedStep";

import ServicesStep from "@/app/modules/booking/components/ServiceStep";

import DetailsStep from "@/app/modules/booking/components/DetailStep";

import ScheduleStep from "@/app/modules/booking/components/ScheduleStep";

import ConfirmStep from "@/app/modules/booking/components/ConfirmStep";

import { useBooking } from "@/app/modules/booking/hooks/useBooking";

import { createBooking } from "@/app/modules/booking/api/booking.api";

export default function BookingLayout() {
  const {
    currentStep,

    selectedSpeed,

    selectedServices,

    items,

    schedule,

    setSelectedSpeed,

    nextStep,

    prevStep,
  } = useBooking();

  const handleFinalOrderSubmit = async () => {
    try {
      const payload = {
        speed: selectedSpeed,

        services: selectedServices,

        items,

        pickupDate: schedule.pickupDate,

        pickupTime: schedule.pickupTime,
      };

      console.log("BOOKING PAYLOAD:", payload);

      const response = await createBooking(payload);

      console.log("BOOKING SUCCESS:", response);

      alert("Booking created successfully");
    } catch (error) {
      console.log(error);

      alert("Booking failed");
    }
  };

  return (
    <div className="min-h-screen">
      <ProgressBar currentStep={currentStep} />

      <main className="max-w-4xl mx-auto p-6">
        {currentStep === 1 && (
          <SpeedStep
            selectedSpeed={selectedSpeed}
            setSelectedSpeed={setSelectedSpeed}
          />
        )}

        {currentStep === 2 && <ServicesStep />}

        {currentStep === 3 && <DetailsStep />}

        {currentStep === 4 && <ScheduleStep />}

        {currentStep === 5 && <ConfirmStep />}
      </main>

      <NavigationFooter
        currentStep={currentStep}
        nextStep={nextStep}
        prevStep={prevStep}
        handleFinalOrderSubmit={handleFinalOrderSubmit}
      />
    </div>
  );
}
