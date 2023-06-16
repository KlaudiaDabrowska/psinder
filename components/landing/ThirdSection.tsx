import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Link from "next/link";
import catAndDog from "../../public/img/catanddog.png";
import Image from "next/image";
import { CustomImage } from "../common/CustomImage";

export const ThirdSection = () => {
  return (
    <Box
      sx={{
        background: "radial-gradient(circle at 80% 50%, #EFE9F4, white 37%)",

        py: 6,
      }}
    >
      <Container>
        <Grid container spacing={4}>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CustomImage src={catAndDog} alt={"catAndDog"} />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid container direction="column">
              <Typography
                variant="h3"
                sx={{
                  mb: 3,
                  textAlign: "center",
                  fontWeight: { xs: "bold", md: "normal" },
                }}
              >
                More than characters
              </Typography>
              <Typography sx={{ mb: 2, textAlign: "center" }} variant="h6">
                Chater makes being single more fun and rewarding by connecting
                doggo who may not have otherwise met in real life.
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Link href="/signup">
                  <Button variant="outlined" color="secondary">
                    Get started
                  </Button>
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
