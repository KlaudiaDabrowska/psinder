import { JWT } from "next-auth/jwt";
import { apiClient } from "../config/apiClient";

interface IDogData {
  dog: IDog;
}

interface IDog {
  id: string;
  name: string;
  description: string;
  images: string[];
  pairedDogs: any[];
  votes: any[];
}

export const getDogInfo = async (token: JWT, dogId: string) => {
  const response = await apiClient.get<IDogData>(`/dog/my-dogs/${dogId}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  });
  return response.data;
};
