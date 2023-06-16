import { JWT } from "next-auth/jwt";
import { apiClient } from "../config/apiClient";

export interface newDog {
  dogName: string;
  dogDescription?: string;
  images?: string[];
}

export const addANewDog = async (newDog: newDog, token: JWT) => {
  const response = await apiClient.post("/dog", newDog, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  });
  return response.data;
};
