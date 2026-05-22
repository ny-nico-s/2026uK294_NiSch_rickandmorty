import { baseInstance } from "../Api/AxiosInstance";
import type { LoginCredentials, LoginResponse } from "../Types/Auth";

const ACCESS_TOKEN_KEY = "accessToken";

export const login = async (
  credentials: LoginCredentials,
): Promise<LoginResponse> => {
  const { data } = await baseInstance.post<LoginResponse>("login", credentials);
  localStorage.setItem(ACCESS_TOKEN_KEY, data.accessToken);
  return data;
};

export const logout = (): void => {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
};

export const isAuthenticated = (): boolean => {
  return Boolean(localStorage.getItem(ACCESS_TOKEN_KEY));
};
