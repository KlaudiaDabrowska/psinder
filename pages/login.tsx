import { CustomImage } from "@/components/common/CustomImage";
import { Navbar } from "@/components/common/Navbar";
import { LoginForm } from "@/components/forms/LoginForm";
import { Box, Container, Grid, Typography } from "@mui/material";
import paw2 from "../public/img/paw2.png";

const Login = () => {
  return (
    <Box
      sx={{
        background:
          "linear-gradient(7deg, rgba(255,255,255,1) 37%, rgba(239,233,244,0.504359243697479) 78%)",
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
