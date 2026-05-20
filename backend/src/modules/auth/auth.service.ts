import bcrypt from "bcryptjs";

import User from "../users/user.model.js";

import { transporter } from "../../config/nodemailer.js";

import { generateAccessToken, generateRefreshToken } from "./auth.utils.js";

import type {
  LoginPayload,
  RegisterPayload,
  GoogleLoginPayload,
} from "./auth.types.js";

const register = async (payload: RegisterPayload) => {
  const { name, email, password } = payload;

  const existingUser = await User.findOne({
    email,
  });

  if (existingUser) {
    throw new Error("User already exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
    provider: "credentials",
  });

  const jwtPayload = {
    userId: user._id.toString(),
    role: user.role,
  };

  const accessToken = generateAccessToken(jwtPayload);

  const refreshToken = generateRefreshToken(jwtPayload);

  return {
    accessToken,
    refreshToken,
    user,
  };
};

const login = async (payload: LoginPayload) => {
  const { email, password } = payload;

  const user = await User.findOne({
    email,
  }).select("+password");

  if (!user) {
    throw new Error("User not found");
  }

  if (!user.password) {
    throw new Error("Please login with Google");
  }

  const isPasswordMatched = await bcrypt.compare(
    password,
    user.password as string,
  );

  if (!isPasswordMatched) {
    throw new Error("Invalid credentials");
  }

  const jwtPayload = {
    userId: user._id.toString(),
    role: user.role,
  };

  const accessToken = generateAccessToken(jwtPayload);

  const refreshToken = generateRefreshToken(jwtPayload);

  user.refreshToken = refreshToken;

  await user.save();

  const userObject = user.toObject();

  const { password: _password, ...safeUser } = userObject;

  return {
    accessToken,
    refreshToken,
    user: safeUser,
  };
};

const googleLogin = async (payload: GoogleLoginPayload) => {
  const { name, email, image, googleId } = payload;

  let user = await User.findOne({
    email,
  });

  if (user && user.provider === "credentials") {
    throw new Error("Please login using email/password");
  }

  if (!user) {
    user = await User.create({
      name,
      email,
      image: image || null,
      googleId,
      provider: "google",
    });
  }

  const jwtPayload = {
    userId: user.id,
    role: user.role,
  };

  const accessToken = generateAccessToken(jwtPayload);

  const refreshToken = generateRefreshToken(jwtPayload);

  user.refreshToken = refreshToken;

  await user.save();

  const userObject = user.toJSON();

  const {
    refreshToken: _refreshToken,
    password: _password,
    ...safeUser
  } = userObject;

  return {
    accessToken,
    refreshToken,
    user: safeUser,
  };
};


export const forgotPasswordService = async (
  email: string
) => {
  const user = await User.findOne({ email });

  if (!user) {
    throw new Error("User not found");
  }

  const otp = Math.floor(
    100000 + Math.random() * 900000
  ).toString();

  user.resetOtp = otp;

  user.resetOtpExpire = new Date(
    Date.now() + 5 * 60 * 1000
  );

  await user.save();

  await transporter.sendMail({
    from: process.env.EMAIL_USER,

    to: email,

    subject: "Password Reset OTP",

    html: `
      <h2>Password Reset OTP</h2>
      <p>Your OTP is:</p>
      <h1>${otp}</h1>
      <p>This OTP expires in 5 minutes.</p>
    `,
  });
};


export const verifyOtpService = async (
  email: string,
  otp: string
) => {
  const user = await User.findOne({ email });

  if (!user) {
    throw new Error("User not found");
  }

  if (user.resetOtp !== otp) {
    throw new Error("Invalid OTP");
  }

  if (
    !user.resetOtpExpire ||
    user.resetOtpExpire < new Date()
  ) {
    throw new Error("OTP expired");
  }

  return true;
};

export const resetPasswordService = async (
  email: string,
  password: string
) => {
  const user = await User.findOne({ email });

  if (!user) {
    throw new Error("User not found");
  }

  const hashedPassword = await bcrypt.hash(
    password,
    10
  );

  user.password = hashedPassword;

  user.resetOtp = null;

  user.resetOtpExpire = null;

  await user.save();
};

export const authService = {
  register,
  login,
  googleLogin,
  forgotPasswordService,
  verifyOtpService,
  resetPasswordService,
};