import { JWT } from "next-auth/jwt";
import { apiClient } from "../config/apiClient";

export const getListOfDogs = async (token: JWT) => {
  const response = await apiClient.get("/dog/my-dogs", {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  });
  return response.data;
};
