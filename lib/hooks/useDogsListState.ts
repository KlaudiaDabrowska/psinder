import { getListOfDogs } from "@/api/getListOfDogs";
import { useSession } from "next-auth/react";
import { useQuery } from "react-query";

export const useDogsListState = () => {
  const { data: sessionData } = useSession();

  const { data: dogsList } = useQuery(
    "dogsList",
    () => getListOfDogs(sessionData?.user.accessToken),
    {
      enabled: sessionData !== undefined,
    }
  );

  return dogsList;
};
