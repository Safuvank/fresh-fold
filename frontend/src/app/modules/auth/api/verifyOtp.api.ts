import { api } from "@/app/services/api";

interface VerifyOtpPayload {
  email: string;
  otp: string;
}

export const verifyOtp = async (
  payload: VerifyOtpPayload
) => {
  const response = await api.post(
    "/auth/verify-otp",
    payload
  );

  return response.data;
};