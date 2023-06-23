import { getDogInfo } from "@/api/getDogInfo";
import { Profile } from "@/components/dashboard/profile/Profile";
import { useGetDogInfo } from "@/lib/hooks/useGetDogInfo";
import { DogIdContext } from "@/pages/_app";
import { DashboardTemplate } from "@/templates/DashboardTemplate";
import { GetServerSidePropsContext } from "next";
import { getSession } from "next-auth/react";
import { useContext, useEffect } from "react";

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const session = await getSession(ctx);

  const dogId = ctx.query.id;

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
  const { setDogId } = useContext(DogIdContext);

  useEffect(() => {
    setDogId(dogId);
  }, [dogId, setDogId]);

  return (
    <DashboardTemplate>
      <Profile />
    </DashboardTemplate>
  );
};

export default Dashboard;
