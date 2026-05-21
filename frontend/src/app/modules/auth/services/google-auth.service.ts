import { api } from "@/app/services/api";

export const googleLogin = async (data: {
  name: string;

  email: string;

  image?: string;

  googleId: string;
}) => {
  const res = await api.post("/auth/google", data);

  return res.data;
};
