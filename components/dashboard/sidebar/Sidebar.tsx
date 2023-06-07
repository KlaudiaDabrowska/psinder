import { Drawer, useMediaQuery } from "@mui/material";
import { Dispatch, SetStateAction, useContext } from "react";
import { DrawerContext } from "@/pages/_app";
import { SidebarMenu } from "./SidebarMenu";

export const Sidebar = ({
  setSelectedItem,
}: {
  setSelectedItem: Dispatch<SetStateAction<string>>;
}) => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const { toggleDrawer, isDrawerOpen } = useContext(DrawerContext);

  return isSmallScreen ? (
    <Drawer
      anchor="left"
      open={isDrawerOpen}
      onClose={() => toggleDrawer(false)}
    >
      <SidebarMenu setSelectedItem={setSelectedItem} />
    </Drawer>
  ) : (
    <SidebarMenu setSelectedItem={setSelectedItem} />
  );
};
