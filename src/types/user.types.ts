import { UserRole } from "./auth.types";

export interface IUser {
  id: string;
  name?: string;
  email: string;
  avatarPath?: string;
  verificationToken?: string;
  rights: UserRole[];
  createdAt: string;
  updatedAt: string;
  otpCode: string;
  otpExpiresAt: string;
  phone: string;
  telegramId: string;
}
