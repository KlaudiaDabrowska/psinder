import {
  Avatar,
  Box,
  Button,
  Divider,
  Grid,
  Icon,
  Paper,
  Typography,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import { ReactNode } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarIcon from "@mui/icons-material/Star";
import PersonIcon from "@mui/icons-material/Person";

export const Sidebar = ({ setSelectedItem }: { setSelectedItem: any }) => {
  return (
    <Box sx={{ p: 2, backgroundColor: "#f3ebf78a", height: "93vh" }}>
      <Grid container sx={{ mb: 2 }}>
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
      </Grid>
      <Divider />
      <SidebarBtn setSelectedItem={setSelectedItem} item="messages">
        <EmailIcon sx={{ mr: 1 }} />
        Messages
      </SidebarBtn>
      <SidebarBtn setSelectedItem={setSelectedItem} item="liked you">
        <FavoriteIcon sx={{ mr: 1 }} />
        Liked you
      </SidebarBtn>
      <SidebarBtn setSelectedItem={setSelectedItem} item="favourities">
        <StarIcon sx={{ mr: 1 }} />
        Favourities
      </SidebarBtn>
      <SidebarBtn setSelectedItem={setSelectedItem} item="friends">
        <PersonIcon sx={{ mr: 1 }} />
        Friends
      </SidebarBtn>
    </Box>
  );
};

const SidebarBtn = ({
  children,
  setSelectedItem,
  item,
}: {
  children: ReactNode;
  setSelectedItem: any;
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
