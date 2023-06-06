import { Box, Button, Container, Grid, Typography } from "@mui/material";

export const ThirdSection = () => {
  return (
    <Box
      sx={{
        background:
          "linear-gradient(7deg, rgba(255,255,255,1) 37%, rgba(239,233,244,0.504359243697479) 78%)",
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
            <Box>image</Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h3" sx={{ mb: 3, textAlign: "center" }}>
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
              <Button variant="outlined" color="secondary">
                Get started
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
