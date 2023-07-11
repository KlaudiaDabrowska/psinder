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
          sx={{
            color: "#000",
            "&:hover": {
              backgroundColor: "#f3ebf78a",
              color: "#9C27B0",
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
