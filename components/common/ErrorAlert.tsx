import { Alert, Grid } from "@mui/material";

export const ErrorAlert = () => {
  return (
    <Grid
      item
      xs={12}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Alert severity="error">
        Oops! Something went wrong. Please try again.
      </Alert>
    </Grid>
  );
};
