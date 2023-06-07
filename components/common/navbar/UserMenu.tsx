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

export const UserMenu = () => {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const settings = ["account", "logout"];

  const isLoggin = true;

  return (
    <Box sx={{ flexGrow: 0 }}>
      {isLoggin ? (
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
            {settings.map((setting) => (
              <UserMenuItem
                handleCloseUserMenu={handleCloseUserMenu}
                shouldHasAvatar={false}
                href={setting}
                key={setting}
              />
            ))}
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
