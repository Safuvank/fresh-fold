import type { Request, Response } from "express";
import { authService } from "./auth.service.js";
import {
  loginSchema,
  registerSchema,
  googleLoginSchema,
} from "./auth.validation.js";

import {
  verifyOtpService,
  resetPasswordService,
  forgotPasswordService,
} from "./auth.service.js";

export const registerUser = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const validatedData = registerSchema.parse(req.body);

    const result = await authService.register(validatedData);

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const loginUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const validatedData = loginSchema.parse(req.body);

    const result = await authService.login(validatedData);

    res.status(200).json({
      success: true,
      message: "Login successful",
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const googleLoginUser = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const validatedData = googleLoginSchema.parse(req.body);

    const result = await authService.googleLogin(validatedData);

    res.status(200).json({
      success: true,
      message: "Google login successful",
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const forgotPassword = async (req: Request, res: Response) => {
  
  try {
    await forgotPasswordService(req.body.email);

    res.status(200).json({
      success: true,
      message: "OTP sent successfully",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message || error,
    });
  }
};

export const verifyOtp = async (req: Request, res: Response) => {
  try {
    await verifyOtpService(req.body.email, req.body.otp);

    res.status(200).json({
      success: true,
      message: "OTP verified",
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const resetPassword = async (req: Request, res: Response) => {
  try {
    await resetPasswordService(req.body.email, req.body.password);

    res.status(200).json({
      success: true,
      message: "Password reset successful",
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
