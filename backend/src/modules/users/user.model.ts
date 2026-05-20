import mongoose from "mongoose";

import type { IUser } from "./user.types.js";

const userSchema = new mongoose.Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,

      select: false,

      default: null,
    },

    resetOtp: {
      type: String,
      default: null,
    },

    resetOtpExpire: {
      type: Date,
      default: null,
    },

    image: {
      type: String,

      default: null,
    },

    googleId: {
      type: String,

      default: null,
    },

    provider: {
      type: String,

      enum: ["credentials", "google"],

      default: "credentials",
    },

    role: {
      type: String,

      enum: ["super_admin", "admin", "delivery_staff", "customer"],

      default: "customer",
    },

    refreshToken: {
      type: String,

      default: null,
    },
  },

  {
    timestamps: true,
  },
);

const User = mongoose.model<IUser>("User", userSchema);

export default User;
