// import type { Request, Response } from "express";

// import { createBooking } from "./booking.service.js";

// export const createBookingHandler = async (req: Request, res: Response) => {
//   try {
//     const booking = await createBooking(req.body);

//     res.status(201).json({
//       success: true,

//       data: booking,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,

//       message: "Booking creation failed",
//     });
//   }
// };

import type { Response } from "express";

import type { AuthRequest } from "../auth/auth.middleware.js";

import { createBooking } from "./booking.service.js";

export const createBookingHandler = async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.user?.userId;

    const booking = await createBooking({
      ...req.body,

      user: userId,
    });

    res.status(201).json({
      success: true,

      data: booking,
    });
  } catch (error) {
    res.status(500).json({
      success: false,

      message: "Booking creation failed",
    });
  }
};
