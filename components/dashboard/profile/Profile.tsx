import { useGetDogInfo } from "@/lib/hooks/useGetDogInfo";
import { DogIdContext } from "@/pages/_app";
import {
  Avatar,
  Box,
  Container,
  List,
  ListItem,
  ListItemText,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useContext } from "react";

export const Profile = () => {
  const { dogId } = useContext(DogIdContext);

  const dogInfo = useGetDogInfo(dogId);

  return (
    <Container maxWidth="md" sx={{ my: 8 }}>
      <Paper sx={{ p: 3 }}>
        <Stack direction="row" sx={{ pb: 3, alignItems: "center" }}>
          <Avatar variant="square" sx={{ mr: 2, width: 56, height: 56 }}>
            <Image src={dogInfo?.dog.images[0]} alt="profileImage" />
          </Avatar>
          <Typography variant="h4">{dogInfo?.dog?.name}</Typography>
        </Stack>

        <Box>
          <List>
            <ListItem disablePadding>
              <ListItemText
                primary="About"
                secondary={dogInfo?.dog?.description}
              />
            </ListItem>
            <ListItem disablePadding>
              <ListItemText
                primary="Your recent matches"
                secondary={dogInfo?.dog?.pairedDogs}
              />
            </ListItem>
            <List component="div" disablePadding>
              {dogInfo?.dog?.pairedDogs.map((pairedDog) => (
                <ListItem key={pairedDog.id}>
                  <Image src={pairedDog.images[0]} alt="pair" />
                </ListItem>
              ))}
            </List>
          </List>
        </Box>
      </Paper>
    </Container>
  );
};
