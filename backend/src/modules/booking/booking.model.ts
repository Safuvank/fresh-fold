import mongoose from "mongoose";

const bookingSchema =
  new mongoose.Schema(
    {
      user: {
        type:
          mongoose.Schema.Types.ObjectId,

        ref: "User",

        required: true,
      },

      speed: {
        type: String,
        required: true,
      },

      services: [
        {
          id: String,
          title: String,
        },
      ],

      items: [
        {
          id: String,
          name: String,
          count: Number,
          pricePerUnit: Number,
        },
      ],

      pickupDate: String,

      pickupTime: String,

      subtotal: Number,

      total: Number,

      status: {
        type: String,
        default: "pending",
      },
    },
    {
      timestamps: true,
    },
  );

export const BookingModel = mongoose.model("Booking", bookingSchema);
