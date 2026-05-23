import { api } from "@/app/services/api";

export const createBooking =
  async (payload: any) => {

    const response =
      await api.post(
        "/bookings",
        payload
      );

    return response.data;
};