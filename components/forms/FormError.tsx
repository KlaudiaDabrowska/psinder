import { Box, Typography } from "@mui/material";

export const FormError = ({ error }: { error?: string }) => {
  return (
    <Box>
      <Typography variant="subtitle2" sx={{ color: "error.main", p: 0 }}>
        {error}
      </Typography>
    </Box>
  );
};
