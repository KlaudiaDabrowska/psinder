import { getListOfDogs } from "@/api/getListOfDogs";
import { useSession } from "next-auth/react";
import { ReactNode, createContext } from "react";
import { useQuery } from "react-query";

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
export const DogsContextData = createContext<IDogsData | null>(null);

export const DogsContext = ({ children }: { children: ReactNode }) => {
  const { data: sessionData } = useSession();

  const { data } = useQuery(
    "dogsList",
    () => getListOfDogs(sessionData?.user.accessToken),
    {
      enabled: sessionData !== undefined,
    }
  );

  return (
    <DogsContextData.Provider value={data}>{children}</DogsContextData.Provider>
  );
};
