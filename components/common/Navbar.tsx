import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import PetsIcon from "@mui/icons-material/Pets";
import { DrawerContext } from "@/pages/_app";
import { useContext } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { UserMenu } from "./navbar/UserMenu";
import { useSession } from "next-auth/react";

export const Navbar = () => {
  const { toggleDrawer } = useContext(DrawerContext);

  const { data, status } = useSession();
  console.log(status);
  console.log(data);

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#fff",
        borderBottom: 1,
        borderColor: "#bdbdbd64",
      }}
    >
      <Container>
        <Toolbar
          disableGutters
          sx={{
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "roboto",
              fontWeight: 700,
              letterSpacing: ".2rem",
            }}
          >
            <PetsIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            psinder
          </Typography>
          {status === "authenticated" && (
            <MenuIcon
              onClick={() => toggleDrawer(true)}
              sx={{ display: { xs: "flex", md: "none" } }}
            />
          )}
          <Typography
            variant="h5"
            component="a"
            href="/"
            sx={{
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "roboto",
              fontWeight: 700,
              letterSpacing: ".2rem",
            }}
          >
            <PetsIcon
              sx={{ display: { xs: "flex", md: "none" }, ml: 2, mr: 1 }}
            />
            psinder
          </Typography>
          <UserMenu />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
