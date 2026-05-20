// src/modules/auth/auth.routes.ts

import express from "express";

import {
  loginUser,
  registerUser,
  googleLoginUser,
  forgotPassword,
  verifyOtp,
  resetPassword,
} from "./auth.controller.js";

const router = express.Router();

router.post("/signup", registerUser);

router.post("/login", loginUser);

router.post("/google", googleLoginUser);

router.post("/forgot-password", forgotPassword);

router.post("/verify-otp", verifyOtp);

router.post("/reset-password", resetPassword);

export default router;
