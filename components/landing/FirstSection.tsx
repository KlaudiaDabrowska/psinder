import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { SignupBtn } from "../common/SingupBtn";
import dog1 from "../../public/img/dogs1.png";
import { CustomImage } from "../common/CustomImage";

export const FirstSection = () => {
  return (
    <Box
      sx={{
        background: "radial-gradient(circle at 80% 50%, white, #EFE9F4 37%)",
        py: { xs: 8, md: 6 },
      }}
    >
      <Container>
        <Grid container spacing={4}>
          <Grid
            item
            xs={12}
            sm={7}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
            direction="column"
          >
            <Typography
              variant="h3"
              sx={{
                mb: 3,
                textAlign: { xs: "center", md: "left" },
                fontWeight: { xs: "bold", md: "normal" },
              }}
            >
              It`s never too late to find match
            </Typography>
            <Typography
              sx={{ mb: 2, textAlign: { xs: "center", md: "left" } }}
              variant="h5"
            >
              Find your soul doggo now
            </Typography>
            <Box
              sx={{
                display: { xs: "flex", md: "block" },
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <SignupBtn isInNavbar={false} />
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={5}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CustomImage src={dog1} alt={"dog1"} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
