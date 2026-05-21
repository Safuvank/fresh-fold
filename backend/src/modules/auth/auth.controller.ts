import type { Request, Response } from "express";
import { authService } from "./auth.service.js";
import {
  loginSchema,
  registerSchema,
  googleLoginSchema,
  forgotPasswordSchema,
  resetPasswordSchema,
  verifyOtpSchema,
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
  } catch (error: unknown) {
    res.status(400).json({
      success: false,
      message: error instanceof Error ? error.message : "Something went wrong",
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
  } catch (error: unknown) {
    res.status(400).json({
      success: false,
      message: error instanceof Error ? error.message : "Something went wrong",
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
  } catch (error: unknown) {
    res.status(400).json({
      success: false,
      message: error instanceof Error ? error.message : "Something went wrong",
    });
  }
};

export const forgotPassword = async (req: Request, res: Response) => {
  try {
     console.log("body" + req.body);
    const validatedData = forgotPasswordSchema.parse(req.body);

    await forgotPasswordService(validatedData.email);

    res.status(200).json({
      success: true,
      message: "OTP sent successfully",
    });
  } catch (error: unknown) {
     console.log(error);
    res.status(400).json({
      success: false,
      message: error instanceof Error ? error.message : "Something went wrong",
    });
  }
};

export const verifyOtp = async (req: Request, res: Response) => {
  try {
    const validatedData = verifyOtpSchema.parse(req.body);

    await verifyOtpService(validatedData.email, validatedData.otp);

    res.status(200).json({
      success: true,
      message: "OTP verified",
    });
  } catch (error: unknown) {
    res.status(400).json({
      success: false,
      message: error instanceof Error ? error.message : "Something went wrong",
    });
  }
};

export const resetPassword = async (req: Request, res: Response) => {
  try {
    const validatedData = resetPasswordSchema.parse(req.body);

    await resetPasswordService(validatedData.email, validatedData.password);

    res.status(200).json({
      success: true,
      message: "Password reset successful",
    });
  } catch (error: unknown) {
    res.status(400).json({
      success: false,
      message: error instanceof Error ? error.message : "Something went wrong",
    });
  }
};
