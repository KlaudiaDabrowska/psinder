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

export const getListOfDogs = async (token: JWT) => {
  const response = await apiClient.get<IDogsData>("/dog/my-dogs", {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  });
  return response.data;
};
