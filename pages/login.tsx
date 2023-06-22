import { CustomImage } from "@/components/common/CustomImage";
import { Navbar } from "@/components/common/Navbar";
import { LoginForm } from "@/components/forms/LoginForm";
import { Box, Container, Grid, Typography } from "@mui/material";
import { GetServerSidePropsContext } from "next";
import { getSession } from "next-auth/react";
import paw2 from "../public/img/paw2.png";
import { Error } from "@/components/common/Error";

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const session = await getSession(ctx);

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

const Login = () => {
  return (
    <Box
      sx={{
        background: "radial-gradient(circle at 80% 50%, white, #EFE9F4 37%)",
        height: "100vh",
      }}
    >
      <Navbar />
      <Container
        maxWidth="md"
        sx={{
          my: { xs: 6, md: 8 },
        }}
      >
        <Typography
          fontSize={{ xs: 38, md: 48 }}
          sx={{ mb: { xs: 4, md: 8 }, textAlign: "center" }}
        >
          Login
        </Typography>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          display="flex"
          spacing={4}
        >
          <Grid item xs={12} sm={6}>
            <LoginForm />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <CustomImage src={paw2} alt={"paw"} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Login;
