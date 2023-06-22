import { JWT } from "next-auth/jwt";
import { apiClient } from "../config/apiClient";

interface IDogsData {
  dogs: IDog[];
}

interface IDog {
  id: string;
  name: string;
  description: string;
  images: string[];
  pairedDogs: string[];
  votes: string[];
}

export const getDogInfo = async (token: JWT, dogId: string) => {
  const response = await apiClient.get<any>(`/dog/my-dogs/${dogId}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  });
  return response.data;
};
