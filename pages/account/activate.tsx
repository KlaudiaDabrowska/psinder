import { userActivation } from "@/api/userActivation";
import { Navbar } from "@/components/common/Navbar";
import { Box, Link, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useMutation } from "react-query";
import { Error } from "@/components/common/Error";
import { Success } from "@/components/common/Success";

const Activate = () => {
  const router = useRouter();
  const token = router.query.token;

  const {
    mutate: userActivationMutate,
    isSuccess,
    isError,
  } = useMutation(userActivation);

  useEffect(() => {
    if (token) {
      userActivationMutate({ token: token });
    }
  }, [token, userActivationMutate]);

  return (
    <Box>
      <Navbar />
      {isSuccess && (
        <Success>
          <Typography
            variant="h4"
            sx={{
              mb: 3,
              textAlign: "center",
              fontWeight: { xs: "bold", md: "normal" },
            }}
          >
            Hooray! <br /> <br />
            Your account activation was successful.
            <br />
            <br />
            Feel free to
            <Link href={"/login"} sx={{ color: "#0288d1", mx: 1 }}>
              log in
            </Link>
            and enjoy all the features and benefits we have to offer.
          </Typography>
        </Success>
      )}
      {isError && (
        <Error>
          <Typography
            variant="h4"
            sx={{
              mb: 3,
              textAlign: "center",
              fontWeight: { xs: "bold", md: "normal" },
            }}
          >
            Oops! <br />
            <br /> Something went wrong during the activation process. <br />
            <br />
            Don`t worry, though. Please retry shortly, log in instead, or feel
            free to contact us for help.
          </Typography>
        </Error>
      )}
    </Box>
  );
};

export default Activate;
