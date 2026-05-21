import dotenv from "dotenv";

import { z } from "zod";

dotenv.config();

const envSchema = z.object({
  PORT: z.string(),

  MONGO_URI: z.string(),

  ACCESS_TOKEN_SECRET: z.string(),

  REFRESH_TOKEN_SECRET: z.string(),

  EMAIL_USER: z.string(),

  EMAIL_PASS: z.string(),
});

export const env = envSchema.parse(process.env);