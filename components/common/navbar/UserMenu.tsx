import {
  Avatar,
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import { SignupBtn } from "../SingupBtn";
import { UserMenuItem } from "./UserMenuItem";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { signOut, useSession } from "next-auth/react";
import WavingHandIcon from "@mui/icons-material/WavingHand";

export const UserMenu = () => {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const { data: sessionData, status } = useSession();

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  console.log("sesion");
  console.log(sessionData);

  return (
    <Box sx={{ flexGrow: 0 }}>
      {status === "authenticated" ? (
        <>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <WavingHandIcon />
              <Typography variant="h5" sx={{ ml: 1 }}>
                Hi, {sessionData.user.name}!
              </Typography>
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            <MenuItem onClick={handleCloseUserMenu}>
              <AddIcon />
              <Typography textAlign="center" textTransform="capitalize">
                Add a new dog
              </Typography>
            </MenuItem>
            <Divider />
            <Typography sx={{ ml: 2 }} textTransform="capitalize">
              Your doggos:
            </Typography>
            <UserMenuItem
              handleCloseUserMenu={handleCloseUserMenu}
              shouldHasAvatar={true}
              title="Clexi"
              href="profile"
            />
            <UserMenuItem
              handleCloseUserMenu={handleCloseUserMenu}
              shouldHasAvatar={true}
              title="Srexi"
              href="profile"
            />

            <Divider />
            <UserMenuItem
              handleCloseUserMenu={handleCloseUserMenu}
              shouldHasAvatar={false}
              href={"account"}
              key={"account"}
            />
            <Divider />
            <Box sx={{ display: "flex", justifyContent: "center", mt: 1 }}>
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => signOut({ callbackUrl: "/" })}
              >
                Log out
              </Button>
            </Box>
          </Menu>
        </>
      ) : (
        <Grid container spacing={2}>
          <Grid item>
            <SignupBtn isInNavbar={true} />
          </Grid>
          <Grid item>
            <Link href="/login">
              <Button variant="outlined" color="secondary" size="small">
                Login
              </Button>
            </Link>
          </Grid>
        </Grid>
      )}
    </Box>
  );
};
