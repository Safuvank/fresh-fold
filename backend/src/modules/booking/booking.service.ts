import { BookingModel } from "./booking.model.js";

import { calculateTotal } from "../pricing/pricing.service.js";

export const createBooking = async (payload: any) => {
  const pricing = calculateTotal(payload.items, payload.speed);

  const booking = await BookingModel.create({
    ...payload,

    subtotal: pricing.subtotal,

    total: pricing.total,
  });

  return booking;
};
