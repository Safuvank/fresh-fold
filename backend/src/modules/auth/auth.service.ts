import bcrypt from "bcryptjs";

import User from "../users/user.model.js";

import { generateAccessToken, generateRefreshToken } from "./auth.utils.js";

import type { LoginPayload, RegisterPayload } from "./auth.types.js";

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

  const user = await User.findOne({ email });

  if (!user) {
    throw new Error("User not found");
  }

  const isPasswordMatched = await bcrypt.compare(password, user.password);

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

  delete userObject.password;

  return {
    accessToken,
    refreshToken,
    user: userObject,
  };
};

export const authService = {
  register,
  login,
};
