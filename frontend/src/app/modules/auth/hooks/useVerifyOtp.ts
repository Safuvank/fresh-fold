import { useMutation } from "@tanstack/react-query";

import { verifyOtp } from "../api/verifyOtp.api";

export const useVerifyOtp = () => {
  return useMutation({
    mutationFn: verifyOtp,
  });
};