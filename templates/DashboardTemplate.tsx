import { Navbar } from "@/components/common/Navbar";
import { Sidebar } from "@/components/dashboard/sidebar/Sidebar";
import { DogIdContext } from "@/pages/_app";
import { Box, Divider, Grid } from "@mui/material";
import { ReactNode, useContext, useState } from "react";

export const DashboardTemplate = ({ children }: { children: ReactNode }) => {
  const { dogId } = useContext(DogIdContext);

  return (
    <>
      <Navbar />
      <Box
        sx={{
          background:
            "linear-gradient(70deg, rgba(255,255,255,1) 37%, #EFE9F4 55%)",
        }}
      >
        <Grid container>
          {dogId && (
            <Grid item xs={12} sm={3} md={2} lg={2}>
              <Sidebar />
            </Grid>
          )}
          <Grid
            item
            xs={12}
            sm={dogId ? 10 : 12}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            {children}
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
