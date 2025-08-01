import { instance } from "@/axios/axios";
import { IUser } from "@/types/user.types";

class UserService {
  private _BASE_URL = "/users";

  async getProfile() {
    return instance.get<IUser>(`${this._BASE_URL}/profile`);
  }
}

export const userService = new UserService();
