// export interface RegisterPayload {
//   name: string;
//   email: string;
//   password: string;
// }

// export interface LoginPayload {
//   email: string;
//   password: string;
// }

// export interface GoogleLoginPayload {
//   name: string;
//   email: string;
//   image?: string;
//   googleId: string;
// }

import { z } from "zod";

import {
  registerSchema,
  loginSchema,
  googleLoginSchema,
} from "./auth.validation.js";

export type RegisterPayload = z.infer<typeof registerSchema>;

export type LoginPayload = z.infer<typeof loginSchema>;

export type GoogleLoginPayload = z.infer<typeof googleLoginSchema>;
