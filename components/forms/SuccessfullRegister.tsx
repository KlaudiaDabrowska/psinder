import { Grid, Typography } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

export const SuccessfullRegister = () => {
  return (
    <Grid
      container
      display="flex"
      justifyContent="center"
      alignItems="center"
      direction="column"
    >
      <Grid item sx={{ mb: 2 }}>
        <CheckCircleOutlineIcon color="success" fontSize="large" />
      </Grid>
      <Grid item>
        <Typography variant="h6" sx={{ textAlign: "center" }}>
          Congratulations! You have successfully registered. Please check your
          email for a verification message containing a confirmation link.
        </Typography>
      </Grid>
    </Grid>
  );
};
