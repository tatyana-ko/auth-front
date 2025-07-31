import { instance } from "@/axios/axios";

class UserService {
  private _BASE_URL = "/users";

  async getProfile() {
    return instance.get(`${this._BASE_URL}/profile`);
  }
}

export const userService = new UserService();
