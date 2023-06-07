import { Navbar } from "@/components/common/Navbar";
import { Sidebar } from "@/components/dashboard/sidebar/Sidebar";
import { Box, Grid } from "@mui/material";
import { useState } from "react";

const Dashboard = () => {
  const [selectedItem, setSelectedItem] = useState("");

  return (
    <>
      <Navbar />
      <Box sx={{ height: "100%" }}>
        <Grid container spacing={2}>
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
            {selectedItem === "messages" ? (
              <div>messages</div>
            ) : selectedItem === "liked you" ? (
              <div>liked you</div>
            ) : selectedItem === "favourities" ? (
              <div>fav</div>
            ) : selectedItem === "friends" ? (
              <div>friends</div>
            ) : (
              <div>something else</div>
            )}
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Dashboard;
