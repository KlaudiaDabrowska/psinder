import { Button, Typography } from "@mui/material";
import { Dispatch, ReactNode, SetStateAction } from "react";

export const SidebarBtn = ({
  children,
  setSelectedItem,
  item,
}: {
  children: ReactNode;
  setSelectedItem: Dispatch<SetStateAction<string>>;
  item: string;
}) => {
  return (
    <Typography variant="h4" sx={{ color: "#9e9e9e" }}>
      <Button
        color="inherit"
        sx={{
          "&:hover": {
            backgroundColor: "#f3ebf78a",
            color: "#3c52b2",
          },
          textTransform: "inherit",
        }}
        onClick={() => setSelectedItem(item)}
      >
        {children}
      </Button>
    </Typography>
  );
};
