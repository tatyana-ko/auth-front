import { Tokens } from "@/types/token.types";
import Cookies from "js-cookie";

class TokenService {
  saveToken(token: string) {
    Cookies.set(Tokens.ACCESS_TOKEN, token, {
      domain: "localhost",
      sameSite: "Strict",
      expires: 1,
    });
  }

  getToken() {
    const accessToken = Cookies.get(Tokens.ACCESS_TOKEN);

    return accessToken || null;
  }

  removeToken() {
    Cookies.remove(Tokens.ACCESS_TOKEN);
  }
}

export const tokenService = new TokenService();
