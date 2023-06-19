import { Box, Typography } from "@mui/material";

export const FormError = ({ error }: { error?: string }) => {
  return (
    <Box data-testId="formError">
      <Typography
        variant="subtitle2"
        sx={{ color: "error.main", p: 0 }}
        data-testId="errorMessage"
      >
        {error}
      </Typography>
    </Box>
  );
};
