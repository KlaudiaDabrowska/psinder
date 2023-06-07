import { apiClient } from "../config/apiClient";

interface newUser {
  personalData: {
    name: string;
    surname: string;
    addressData: {
      city: string | null;
      streetName: string | null;
    };
  };
  email: string;
  password: string;
  timeZoneId: string;
}

export const createNewUser = async (newUser: newUser) => {
  const response = await apiClient.post("/account", newUser, {
    headers: { "Content-Type": "application/json" },
  });
  return response.data;
};
