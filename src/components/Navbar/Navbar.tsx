import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";
export interface NavbarInterface {}

const Navbar: React.FC<NavbarInterface> = () => {
  return (
    <AppBar position="fixed">
      <Toolbar variant="dense">
        <Typography variant="h6" color="inherit" component="div">
          Programming React App
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
