import { API_URL } from "@/constants/constants";
import axios, { CreateAxiosDefaults } from "axios";

const options: CreateAxiosDefaults = {
  baseURL: API_URL,
  headers: {
    "Content-type": "application/json",
  },
  withCredentials: true,
};

export const axiosClassic = axios.create(options);
