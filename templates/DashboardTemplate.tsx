import { Navbar } from "@/components/common/Navbar";
import { Sidebar } from "@/components/dashboard/sidebar/Sidebar";
import { Box, Divider, Grid } from "@mui/material";
import { ReactNode, useState } from "react";

export const DashboardTemplate = ({ children }: { children: ReactNode }) => {
  const [selectedItem, setSelectedItem] = useState("");

  return (
    <>
      <Navbar />
      <Box sx={{ backgroundColor: "#fff" }}>
        <Grid container>
          <Grid item xs={12} sm={3} md={2} lg={2}>
            <Sidebar setSelectedItem={setSelectedItem} />
          </Grid>
          <Grid
            item
            xs={12}
            sm={10}
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
