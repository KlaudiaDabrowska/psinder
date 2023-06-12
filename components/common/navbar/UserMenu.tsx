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

export const UserMenu = () => {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const { status } = useSession();

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const settings = ["account", "logout"];

  return (
    <Box sx={{ flexGrow: 0 }}>
      {status === "authenticated" ? (
        <>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              <Typography variant="h5">Clexi The Sausagedog</Typography>
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
