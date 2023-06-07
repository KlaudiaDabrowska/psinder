import {
  Avatar,
  Box,
  Button,
  Divider,
  Grid,
  useMediaQuery,
} from "@mui/material";
import { SidebarBtn } from "./SidebarBtn";
import EmailIcon from "@mui/icons-material/Email";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarIcon from "@mui/icons-material/Star";
import PersonIcon from "@mui/icons-material/Person";

export const SidebarMenu = ({ setSelectedItem }: { setSelectedItem: any }) => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  return (
    <Box
      sx={{
        p: 2,
        backgroundColor: "#f3ebf78a",
        height: isSmallScreen ? "100vh" : "93vh",
      }}
    >
      <Grid container sx={{ mb: 2 }}>
        <SidebarBtn href="profile">
          <Grid item>
            <Avatar
              alt="doggo"
              src="/static/images/avatar/1.jpg"
              sx={{ width: 36, height: 36, mr: 2 }}
            />
          </Grid>
          <Grid item sx={{ display: "flex", alignItems: "center" }}>
            Clexi
          </Grid>
        </SidebarBtn>
      </Grid>
      <Divider />
      <SidebarBtn href="messages">
        <EmailIcon sx={{ mr: 1 }} />
        Messages
      </SidebarBtn>
      <SidebarBtn href="likes">
        <FavoriteIcon sx={{ mr: 1 }} />
        Liked you
      </SidebarBtn>
      <SidebarBtn href="favourtie">
        <StarIcon sx={{ mr: 1 }} />
        Favourities
      </SidebarBtn>
      <SidebarBtn href="friends">
        <PersonIcon sx={{ mr: 1 }} />
        Friends
      </SidebarBtn>
    </Box>
  );
};
