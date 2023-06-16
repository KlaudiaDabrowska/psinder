import { CustomImage } from "@/components/common/CustomImage";
import { Navbar } from "@/components/common/Navbar";
import { SignupForm } from "@/components/forms/SingupForm";
import { Box, Container, Grid, Typography } from "@mui/material";
import { GetServerSidePropsContext } from "next";
import { getServerSession } from "next-auth";
import paw from "../public/img/paw.png";
import { authOptions } from "./api/auth/[...nextauth]";

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const session = await getServerSession(ctx.req, ctx.res, authOptions);

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

const Signup = () => {
  return (
    <Box
      sx={{
        background: "radial-gradient(circle at 80% 50%, #EFE9F4 37%, white)",
        height: "100vh",
      }}
    >
      <Navbar />
      <Container
        sx={{
          my: { xs: 6, md: 8 },
        }}
      >
        <Typography
          fontSize={{ xs: 38, md: 48 }}
          sx={{ mb: { xs: 4, md: 8 }, textAlign: "center" }}
        >
          Sign up
        </Typography>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          display="flex"
          spacing={4}
        >
          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <CustomImage src={paw} alt={"paw"} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <SignupForm />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Signup;
