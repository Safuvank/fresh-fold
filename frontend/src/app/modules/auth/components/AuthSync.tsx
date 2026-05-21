"use client";

import { useEffect } from "react";

import { useSession } from "next-auth/react";

import { googleLogin } from "../services/google-auth.service";

import { useAuthStore } from "../store/auth.store";

export default function AuthSync() {
  const { data: session } = useSession();

  const login = useAuthStore((state) => state.login);

  useEffect(() => {
    const syncGoogleUser = async () => {
      if (!session?.user) return;

      try {
        const response = await googleLogin({
          name: session.user.name || "",

          email: session.user.email || "",

          image: session.user.image || "",

          googleId: session.user.id || "",
        });

        login(response.data.user, response.data.accessToken);
      } catch (error) {
        console.log(error);
      }
    };

    syncGoogleUser();
  }, [session, login]);

  return null;
}
