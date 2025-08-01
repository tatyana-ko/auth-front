import { authService } from "@/services/auth.service";
import { Tokens } from "@/types/token.types";
import { AxiosError } from "axios";
import { NextRequest } from "next/server";

export async function getTokensFromRequest(request: NextRequest) {
  let accessToken = request.cookies.get(Tokens.ACCESS_TOKEN)?.value;
  const refreshToken = request.cookies.get(Tokens.REFRESH_TOKEN)?.value;

  if (!refreshToken) {
    request.cookies.delete(Tokens.ACCESS_TOKEN);
    return null;
  }

  if (!accessToken) {
    try {
      const data = await authService.getNewTokenByRefresh(refreshToken);
      accessToken = data.accessToken;
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.message === "invalid token") {
          console.log("invalid token");
          request.cookies.delete(Tokens.ACCESS_TOKEN);
          return null;
        }
      }

      return null;
    }
  }

  return { accessToken, refreshToken };
}
