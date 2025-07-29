import { UserRole } from "./auth.types";

export interface IUser {
  id: string;
  name?: string;
  email: string;
  avatarPath?: string;
  verificationToken?: string;
  rights: UserRole[];
}
