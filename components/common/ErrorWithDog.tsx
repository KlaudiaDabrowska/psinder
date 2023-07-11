import { Box, Container, Grid } from "@mui/material";
import { CustomImage } from "./CustomImage";
import error500 from "../../public/img/500errorDog.png";
import error404 from "../../public/img/404error.png";
import { ReactNode } from "react";

export const ErrorWithDog = ({
  children,
  statusCode,
}: {
  children: ReactNode;
  statusCode?: number;
}) => {
  return (
    <Box
      sx={{
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
            {statusCode === 404 ? (
              <CustomImage src={error404} alt={"404error"} />
            ) : (
              <CustomImage src={error500} alt={"error"} />
            )}
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
