import { Button, Typography } from "@mui/material";
import Link from "next/link";
import { ReactNode } from "react";

export const SidebarBtn = ({
  children,
  href,
}: {
  children: ReactNode;
  href: string;
}) => {
  return (
    <Typography variant="h4" sx={{ color: "#9e9e9e" }}>
      <Link href={`/dashboard/${href}`}>
        <Button
          color="inherit"
          sx={{
            "&:hover": {
              backgroundColor: "#f3ebf78a",
              color: "#3c52b2",
            },
            textTransform: "inherit",
          }}
        >
          {children}
        </Button>
      </Link>
    </Typography>
  );
};
