import { Box, Typography } from "@mui/material";
import { NextPageContext } from "next";
import { Navbar } from "@/components/common/Navbar";
import { ErrorWithDog } from "@/components/common/ErrorWithDog";

function Error({ statusCode }: { statusCode: number }) {
  return (
    <Box
      sx={{
        background: "radial-gradient(circle at 80% 50%, white, #EFE9F4 37%)",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Navbar />
      <ErrorWithDog statusCode={statusCode}>
        {statusCode === 404 ? (
          <Typography
            variant="h4"
            sx={{
              mb: 3,
              textAlign: "center",
              fontWeight: { xs: "bold", md: "normal" },
            }}
          >
            Oops! <br />
            <br /> Sorry, the page not found.
          </Typography>
        ) : (
          <Typography
            variant="h4"
            sx={{
              mb: 3,
              textAlign: "center",
              fontWeight: { xs: "bold", md: "normal" },
            }}
          >
            Oops! <br />
            <br /> Something went wrong. <br />
            <br />
            Don`t worry, though. Please refresh the page, or contact us for
            help.
          </Typography>
        )}
      </ErrorWithDog>
    </Box>
  );
}

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
