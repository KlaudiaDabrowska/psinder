import { getDogInfo } from "@/api/getDogInfo";
import { useSession } from "next-auth/react";
import { useQuery } from "react-query";

export const useGetDogInfo = (dogId: string) => {
  const { data: sessionData } = useSession();

  const { data: dogInfo } = useQuery(
    ["dogInfo", dogId],
    () => getDogInfo(sessionData?.user.accessToken, dogId),
    {
      enabled: sessionData !== undefined,
    }
  );

  return dogInfo;
};
