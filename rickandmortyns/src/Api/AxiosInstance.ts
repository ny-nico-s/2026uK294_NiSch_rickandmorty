import type {
  AxiosError,
  AxiosInstance,
  InternalAxiosRequestConfig,
} from "axios";
import axios from "axios";

const BASE_URL = "http://localhost:3030";

export const baseInstance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
});

baseInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const accessToken = localStorage.getItem("accessToken");
    const isLoginRequest = config.url === "login";

    if (accessToken && !isLoginRequest) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);
