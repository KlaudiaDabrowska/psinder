import { getListOfDogs } from "@/api/getListOfDogs";
import { useSession } from "next-auth/react";
import { useQuery } from "react-query";

export const useDogsListState = () => {
  const { data: sessionData } = useSession();
  console.log("sesja");
  console.log(sessionData);

  const { data } = useQuery(
    "dogsList",
    () => getListOfDogs(sessionData?.user.accessToken),
    {
      enabled: sessionData !== undefined,
    }
  );

  return data;
};
