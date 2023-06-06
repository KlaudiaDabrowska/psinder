import { Button } from "@mui/material";
import Link from "next/link";

export const SignupBtn = ({ isInNavbar }: { isInNavbar: boolean }) => {
  return (
    <Link href="/signup">
      <Button
        variant="contained"
        color="secondary"
        size={isInNavbar ? "small" : "medium"}
      >
        Sign up
      </Button>
    </Link>
  );
};
