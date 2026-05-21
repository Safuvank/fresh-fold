export interface IUser extends Document {
  name: string;

  email: string;

  password?: string;

  image?: string | null;

  googleId?: string;

  provider: "credentials" | "google";

  role: string;

  refreshToken: string | null;

  isOtpVerified:Boolean;

  resetOtp?: string | null;

  resetOtpExpire?: Date | null;
}
