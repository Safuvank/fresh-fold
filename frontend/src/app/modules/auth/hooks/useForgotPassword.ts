import { useMutation } from "@tanstack/react-query";

import { forgotPassword } from "../api/forgotpassword.api";

export const useForgotPassword = () => {
  return useMutation({
    mutationFn: forgotPassword,
  });
};