"use client";

import { create } from "zustand";

import { persist } from "zustand/middleware";

export interface User {
  _id: string;

  name: string;

  email: string;
}

interface AuthState {
  user: User | null;

  token: string | null;

  login: (user: User, token: string) => void;

  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,

      token: null,

      login: (user, token) => {
        // Store token in cookie for middleware
        document.cookie = `token=${token}; path=/`;

        set({
          user,
          token,
        });
      },

      logout: () => {
        // Remove cookie
        document.cookie =
          "token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC";

        set({
          user: null,
          token: null,
        });
      },
    }),
    {
      name: "auth-storage",
    },
  ),
);
