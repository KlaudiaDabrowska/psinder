import { Navbar } from "@/components/common/Navbar";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import { useState } from "react";

const Dashboard = () => {
  const [selectedItem, setSelectedItem] = useState("");

  console.log("selectedItem", selectedItem);

  return (
    <>
      <Navbar />
      {/* desktop */}
      <Box sx={{ height: "100%" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={2}>
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
