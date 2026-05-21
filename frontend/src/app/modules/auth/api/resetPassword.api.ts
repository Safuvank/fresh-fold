import { api } from "@/app/services/api";

interface ResetPasswordPayload {
  email: string;
  password: string;
}

export const resetPassword = async (
  payload: ResetPasswordPayload
) => {
  const response = await api.post(
    "/auth/reset-password",
    payload
  );

  return response.data;
};