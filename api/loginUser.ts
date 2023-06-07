import { apiClient } from "../config/apiClient";

interface user {
  email: string;
  password: string;
}

export const loginUser = async (user: user) => {
  const response = await apiClient.post("/account/login", user, {
    headers: { "Content-Type": "application/json" },
  });
  return response.data;
};
