import { getDogInfo } from "@/api/getDogInfo";
import { Profile } from "@/components/dashboard/profile/Profile";
import { DogIdContext } from "@/pages/_app";
import { DashboardTemplate } from "@/templates/DashboardTemplate";
import { GetServerSidePropsContext } from "next";
import { getSession, useSession } from "next-auth/react";
import { useContext, useEffect } from "react";
import { useQuery } from "react-query";

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const session = await getSession(ctx);

  const dogId = ctx.query.id;

  console.log("DUPSKO");
  console.log(dogId);

  if (!session?.user) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: {
      dogId,
    },
  };
}

const Dashboard = ({ dogId }: { dogId: string }) => {
  const { data: sessionData } = useSession();

  const { dogId: id, setDogId } = useContext(DogIdContext);

  const { data: dogInfo } = useQuery(
    "dogInfo",
    () => getDogInfo(sessionData?.user.accessToken, dogId),
    {
      enabled: sessionData !== undefined,
    }
  );

  useEffect(() => {
    setDogId(dogId);
  }, [dogId, setDogId]);

  console.log("dog info");
  console.log(id);

  return (
    <DashboardTemplate>
      <Profile />
    </DashboardTemplate>
  );
};

export default Dashboard;
