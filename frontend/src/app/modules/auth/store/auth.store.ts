// import { create } from "zustand";
// import { persist } from "zustand/middleware";

// interface User {
//   _id: string;
//   name: string;
//   email: string;
// }

// interface AuthState {
//   user: User | null;
//   token: string | null;

//   setAuth: (user: User, token: string) => void;
//   logout: () => void;
// }

// export const useAuthStore = create<AuthState>((set) => ({
//   user: null,
//   token: null,

//   setAuth: (user, token) => {
//     localStorage.setItem("token", token);

//     set({
//       user,
//       token,
//     });
//   },

//   logout: () => {
//     localStorage.removeItem("token");

//     document.cookie =
//       "token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC";

//     set({
//       user: null,
//       token: null,
//     });
//   },
// }));

// import { create } from "zustand";
// import { persist } from "zustand/middleware";

// interface User {
//   _id: string;
//   name: string;
//   email: string;
// }

// interface AuthState {
//   user: User | null;
//   token: string | null;

//   setAuth: (user: User, token: string) => void;
//   logout: () => void;
// }

// export const useAuthStore = create<AuthState>()(
//   persist(
//     (set) => ({
//       user: null,
//       token: null,

//       setAuth: (user, token) => {
//         document.cookie = `token=${token}; path=/`;

//         set({
//           user,
//           token,
//         });
//       },

//       logout: () => {
//         document.cookie =
//           "token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC";

//         set({
//           user: null,
//           token: null,
//         });
//       },
//     }),
//     {
//       name: "auth-storage",
//     },
//   ),
// );



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
        document.cookie = `token=${token}; path=/`;

        set({
          user,
          token,
        });
      },

      logout: () => {
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
    }
  )
);