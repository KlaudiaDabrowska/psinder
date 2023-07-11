import { Drawer, useMediaQuery } from "@mui/material";
import { useContext } from "react";
import { DrawerContext } from "@/pages/_app";
import { SidebarMenu } from "./SidebarMenu";

export const Sidebar = () => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const { toggleDrawer, isDrawerOpen } = useContext(DrawerContext);

  return isSmallScreen ? (
    <Drawer
      anchor="left"
      open={isDrawerOpen}
      onClose={() => toggleDrawer(false)}
    >
      <SidebarMenu />
    </Drawer>
  ) : (
    <SidebarMenu />
  );
};
