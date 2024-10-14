import React from "react";
import { Grid2 as Grid, AppBar, Toolbar, Typography } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import { router } from "./utils/router";

export default function App() {
  return (
    <Grid container spacing={2} width={"100vw"}>
      <Grid item xs={12}>
        <AppBar component="nav">
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              Task Manager
            </Typography>
          </Toolbar>
        </AppBar>
      </Grid>
      <Grid item xs={12} flex justifyContent={'center'} alignItems={'start'}>
        <RouterProvider router={router} />
      </Grid>
    </Grid>
  );
}
