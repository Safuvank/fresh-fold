

import { z } from "zod";

import {
  loginSchema,
  signupSchema,
} from "../schemas/auth.schemas";

export type SignupFormData =
  z.infer<typeof signupSchema>;

export type LoginFormData =
  z.infer<typeof loginSchema>;

export type SignupPayload = {
  name: string;
  email: string;
  password: string;
};


// auth context

export type User = {
  _id: string;
  name: string;
  email: string;
};

export type AuthContextType = {
  user: User | null;

  token: string | null;

  login: (
    user: User,
    token: string
  ) => void;

  logout: () => void;
};
