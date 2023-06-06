import { Container, Typography } from "@mui/material";

export const Footer = () => {
  return (
    <Container
      sx={{
        textAlign: "center",
        justifyContent: "center",
        display: "flex",
        my: 1,
      }}
    >
      <Typography fontSize={14}>
        © 2023 Psinder. All rights reserved.
      </Typography>
    </Container>
  );
};
