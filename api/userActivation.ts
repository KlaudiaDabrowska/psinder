import { apiClient } from "../config/apiClient";

interface token {
  token: string | undefined | string[];
}

export const userActivation = async (token: token) => {
  console.log("DUPA TOKEN");
  console.log(token);
  const response = await apiClient.post("/account/activate", token, {
    headers: { "Content-Type": "application/json" },
  });
  return response.data;
};
