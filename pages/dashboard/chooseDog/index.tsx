import { useDogsListState } from "@/lib/hooks/useDogsListState";
import { DashboardTemplate } from "@/templates/DashboardTemplate";
import {
  Avatar,
  Box,
  Container,
  List,
  ListItemButton,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import { GetServerSidePropsContext } from "next";
import { getSession, useSession } from "next-auth/react";
import Link from "next/link";

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

const ChooseDog = () => {
  const dogsList = useDogsListState();

  return (
    <DashboardTemplate>
      <Container maxWidth="md" sx={{ my: 8 }}>
        <Paper>
          <Typography variant="h4" textAlign="center" paddingY={2}>
            Choose a dog
          </Typography>
          <Box>
            <List
              component="div"
              disablePadding
              sx={{
                pl: 3,
              }}
            >
              {dogsList?.dogs.map((dog) => (
                <Link href={`/dashboard/profile/${dog.id}`} key={dog.id}>
                  <ListItemButton
                    sx={{
                      pl: 3,
                    }}
                  >
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/1.jpg"
                      sx={{ width: 25, height: 25, mr: 1 }}
                    />
                    <ListItemText primary={dog.name} />
                  </ListItemButton>
                </Link>
              ))}
            </List>
          </Box>
        </Paper>
      </Container>
    </DashboardTemplate>
  );
};

export default ChooseDog;
