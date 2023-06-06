import { Box, Button, Container, Grid, Typography } from "@mui/material";

export const FirstSection = () => {
  return (
    <Box
      sx={{
        background: "radial-gradient(circle at 80% 50%, white, #EFE9F4 37%)",
        py: 8,
      }}
    >
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={7}>
            <Typography
              variant="h3"
              sx={{ mb: 3, textAlign: { xs: "center", md: "left" } }}
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
              <Button variant="contained" color="secondary">
                Register
              </Button>
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
            <Box>image</Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
