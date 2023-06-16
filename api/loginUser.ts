import { LoggedInUserDetails } from "@/lib/types/ILoggedInUserDetails";
import { apiClient } from "../config/apiClient";

export interface LoginRequest {
  email: string;
  password: string;
}

export const loginUser = async (user: LoginRequest) => {
  const response = await apiClient.post<LoggedInUserDetails>(
    "/account/login",
    user,
    {
      headers: { "Content-Type": "application/json" },
    }
  );
  return response.data;
};
