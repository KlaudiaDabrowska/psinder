import { Box, Container, Grid } from "@mui/material";
import { CustomImage } from "./CustomImage";
import error from "../../public/img/500errorDog.png";
import { ReactNode } from "react";

export const Error = ({ children }: { children: ReactNode }) => {
  return (
    <Box
      sx={{
        background:
          "linear-gradient(7deg, rgba(255,255,255,1) 37%, rgba(239,233,244,0.504359243697479) 78%)",
        py: { xs: 8, md: 10 },
        height: "100%",
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
          >
            <CustomImage src={error} alt={"dog1"} />
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
            {children}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
