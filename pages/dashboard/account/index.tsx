import { DashboardTemplate } from "@/templates/DashboardTemplate";
import {
  Avatar,
  Box,
  Container,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import { GetServerSidePropsContext } from "next";
import { getSession, useSession } from "next-auth/react";

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const session = await getSession(ctx);

  if (!session?.user) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
}

const Account = () => {
  const { data: sessionData, status } = useSession();

  return (
    <DashboardTemplate>
      <Container maxWidth="md" sx={{ my: 8 }}>
        <Paper>
          <Typography variant="h4">Your account</Typography>
          <Box>
            <List>
              <ListItem disablePadding>
                <ListItemText
                  primary="Name"
                  secondary={sessionData?.user.name}
                />
              </ListItem>
              <ListItem disablePadding>
                <ListItemText
                  primary="Email"
                  secondary={sessionData?.user.email}
                />
              </ListItem>
              <ListItem disablePadding>
                <ListItemText
                  primary="City"
                  secondary={sessionData?.user.city ?? "-"}
                />
              </ListItem>
              <ListItem disablePadding>
                <ListItemText primary="Doggos" />
              </ListItem>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 3 }}>
                  <Avatar
                    alt="Remy Sharp"
                    src="/static/images/avatar/1.jpg"
                    sx={{ width: 20, height: 20, mr: 1 }}
                  />
                  <ListItemText primary="Clexi" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 3 }}>
                  <Avatar
                    alt="Remy Sharp"
                    src="/static/images/avatar/1.jpg"
                    sx={{ width: 20, height: 20, mr: 1 }}
                  />
                  <ListItemText primary="Srexi" />
                </ListItemButton>
              </List>
            </List>
          </Box>
        </Paper>
      </Container>
    </DashboardTemplate>
  );
};

export default Account;
