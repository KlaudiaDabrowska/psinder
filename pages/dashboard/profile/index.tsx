import { Profile } from "@/components/dashboard/profile/Profile";
import { DashboardTemplate } from "@/templates/DashboardTemplate";
import { GetServerSidePropsContext } from "next";
import { getSession } from "next-auth/react";

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const session = await getSession(ctx);

  if (!session?.user) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
}

const Dashboard = () => {
  return (
    <DashboardTemplate>
      <Profile />
    </DashboardTemplate>
  );
};

export default Dashboard;
