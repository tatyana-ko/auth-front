import { API_URL } from "@/constants/constants";
import { tokenService } from "@/services/token.services";
import axios, { CreateAxiosDefaults } from "axios";
import { errorCatch } from "./api.helpers";
import { authService } from "@/services/auth.service";

const options: CreateAxiosDefaults = {
  baseURL: API_URL,
  headers: {
    "Content-type": "application/json",
  },
  withCredentials: true,
};

export const axiosClassic = axios.create(options);
export const instance = axios.create(options);

instance.interceptors.response.use(
  (config) => config,

  async (error) => {
    const originalRequest = error.config;

    if (
      (error.response.status === 401 ||
        errorCatch(error) === "jwt expired" ||
        errorCatch(error) === "jwt must be provided") &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;

      try {
        await authService.getNewTokens();
        return instance.request(originalRequest);
      } catch (error) {
        if (
          errorCatch(error) === "jwt expired" ||
          errorCatch(error) === "Refresh token not passed"
        ) {
          tokenService.removeToken();
        }
      }
    }

    throw error;
  }
);

instance.interceptors.request.use((config) => {
  const accessToken = tokenService.getToken();

  if (accessToken && config?.headers) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});
