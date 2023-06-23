import {
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
import { useContext, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { signOut, useSession } from "next-auth/react";
import WavingHandIcon from "@mui/icons-material/WavingHand";
import { AddNewDogModalForm } from "@/components/forms/AddNewDogModalForm";
import { useDogsListState } from "@/lib/hooks/useDogsListState";
import { DogIdContext } from "@/pages/_app";

export const UserMenu = () => {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const dogsList = useDogsListState();

  const { data: sessionData, status } = useSession();

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
            <MenuItem
              onClick={() => {
                handleCloseUserMenu(), handleOpen();
              }}
            >
              <AddIcon />
              <Typography textAlign="center" textTransform="capitalize">
                Add a new dog
              </Typography>
            </MenuItem>
            <AddNewDogModalForm open={open} handleClose={handleClose} />
            {dogsList && (
              <>
                <Divider />
                <Typography sx={{ ml: 2 }} textTransform="capitalize">
                  Your doggos:
                </Typography>
                {dogsList?.dogs?.map((dog) => (
                  <UserMenuItem
                    handleCloseUserMenu={handleCloseUserMenu}
                    shouldHasAvatar={true}
                    title={dog.name}
                    href="profile"
                    dogId={dog.id}
                    key={dog.id}
                  />
                ))}
              </>
            )}
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
