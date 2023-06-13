import Head from "next/head";
import { Navbar } from "@/components/common/Navbar";
import { Box } from "@mui/material";
import { FirstSection } from "@/components/landing/FirstSection";
import { SecondSection } from "@/components/landing/SecondSection";
import { ThirdSection } from "@/components/landing/ThirdSection";
import { Footer } from "@/components/common/Footer";
import { GetServerSidePropsContext } from "next";
import { getSession } from "next-auth/react";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]";

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const session = await getServerSession(ctx.req, ctx.res, authOptions);

  console.log("SESJA Z SeRVER SIDE");
  console.log(session);

  if (session?.user) {
    return {
      redirect: {
        destination: "/dashboard/account",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Psinder</title>
        <meta name="description" content="Dating app for dogs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box>
        <Navbar />
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <Footer />
      </Box>
    </>
  );
}
