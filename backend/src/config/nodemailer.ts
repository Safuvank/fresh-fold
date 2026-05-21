import nodemailer from "nodemailer";
import { env } from "./env.js";

console.log("EMAIL_USER:", process.env.EMAIL_USER);

console.log("EMAIL_PASS:", process.env.EMAIL_PASS);

export const transporter = nodemailer.createTransport({
  service: "gmail",

  auth: {
    user: env.EMAIL_USER,
    pass: env.EMAIL_PASS,
  },
});