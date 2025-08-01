import { axiosClassic } from "@/axios/axios";
import { IAuthData } from "@/types/auth.types";
import { IUser } from "@/types/user.types";
import { tokenService } from "./token.services";

interface IAuthResponse {
  user: IUser;
  accessToken: string;
}

class AuthService {
  private _AUTH = "/auth";

  async main(
    type: "login" | "register",
    data: IAuthData,
    recaptcha?: string | null
  ) {
    const response = await axiosClassic.post<IAuthResponse>(
      `${this._AUTH}/${type}`,
      data,
      {
        headers: {
          recaptcha,
        },
      }
    );

    if (response.data.accessToken) {
      tokenService.saveToken(response.data.accessToken);
    }

    return response;
  }

  async getNewTokens() {
    const response = await axiosClassic.post<IAuthResponse>(
      "/auth/access-token"
    );

    if (response.data.accessToken)
      tokenService.saveToken(response.data.accessToken);

    return response;
  }

  async getNewTokenByRefresh(refreshToken: string) {
    const response = await axiosClassic.post<IAuthResponse>(
      `${this._AUTH}/access-token`,
      {},
      {
        headers: {
          Cookie: `refreshToken=${refreshToken}`,
        },
      }
    );

    return response.data;
  }
}

export const authService = new AuthService();
