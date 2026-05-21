import { api } from "@/app/services/api";

import { LoginFormData, SignupPayload } from "../types/auth.types";

export const signupUser = async (data: SignupPayload) => {
  const res = await api.post("/auth/signup", data);

  return res.data;
};

export const loginUser = async (data: LoginFormData) => {
  const res = await api.post("/auth/login", data);

  return res.data;
};
