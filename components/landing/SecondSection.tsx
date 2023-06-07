import { Box, Container, Grid, Icon, Typography } from "@mui/material";
import { ReactNode } from "react";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import ChatIcon from "@mui/icons-material/Chat";
import MarkunreadMailboxIcon from "@mui/icons-material/MarkunreadMailbox";
import KeyIcon from "@mui/icons-material/Key";
import dog2 from "../../public/img/dogs2.png";
import Image from "next/image";
import { CustomImage } from "../common/CustomImage";

export const SecondSection = () => {
  return (
    <Box
      sx={{
        py: 8,
      }}
    >
      <Container>
        <Typography
          variant="h3"
          sx={{
            mb: 3,
            textAlign: "center",
            fontWeight: { xs: "bold", md: "normal" },
          }}
        >
          Match.Chat.Date
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Grid container direction="column" spacing={6}>
              <Grid item>
                <Row>
                  <RowIcon>
                    <VolunteerActivismIcon />
                  </RowIcon>
                  <RowTitle> Love can happen anywhere</RowTitle>
                  <RowDescription>
                    On the tram, in a corner cafe or on an app. You never know
                    who you might meet and how this might change you. Love is
                    risky.
                  </RowDescription>
                </Row>
              </Grid>
              <Grid item>
                <Row>
                  <RowIcon>
                    <ChatIcon />
                  </RowIcon>
                  <RowTitle>Get chatting</RowTitle>
                  <RowDescription>
                    The first message counts! The icebreaker is your chance to
                    break the ice and start conversation - even without a Match.
                  </RowDescription>
                </Row>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Grid container direction="column">
              <Grid
                item
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <CustomImage src={dog2} alt={"dog2"} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Grid container direction="column" spacing={6}>
              <Grid item>
                <Row>
                  <RowIcon>
                    <MarkunreadMailboxIcon />
                  </RowIcon>
                  <RowTitle>Everything at a glance</RowTitle>
                  <RowDescription>
                    With the nearby list, you can see who is near you and online
                    at any time. All that`s left now is for someone to take the
                    first step.
                  </RowDescription>
                </Row>
              </Grid>
              <Grid item>
                <Row>
                  <RowIcon>
                    <KeyIcon />
                  </RowIcon>
                  <RowTitle>More than just a swipe</RowTitle>
                  <RowDescription>
                    In the game match, you decide with a simple swipe who you`d
                    be interested in getting to know.`
                  </RowDescription>
                </Row>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

const Row = ({ children }: { children: ReactNode }) => {
  return (
    <Grid
      container
      direction="column"
      spacing={1}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
    </Grid>
  );
};

const RowIcon = ({ children }: { children: ReactNode }) => {
  return (
    <Grid item>
      <Icon color="secondary">{children}</Icon>
    </Grid>
  );
};
const RowTitle = ({ children }: { children: ReactNode }) => {
  return (
    <Grid item>
      <Typography variant="h6">{children}</Typography>
    </Grid>
  );
};

const RowDescription = ({ children }: { children: ReactNode }) => {
  return (
    <Grid item>
      <Typography
        variant="subtitle1"
        sx={{ color: "#bdbdbd", textAlign: "center" }}
      >
        {children}
      </Typography>
    </Grid>
  );
};
