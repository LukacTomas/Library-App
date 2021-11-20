import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material/";

export const AppplicationBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" color="inherit" component="div">
          Library App
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
