import { AppBar, Toolbar, Typography, Button, Stack } from '@mui/material';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './MuiNavbar.css';
export default function MuiNavbar() {
  return (
    <AppBar color="transparent" className="container">
      <Toolbar className="second-container">
        <Typography className="heading">React Crud App</Typography>
        <Stack className="links">
          <Link to="/create">
            <Button color="inherit">Create_Todo</Button>
          </Link>
          <Link to="/read">
            <Button color="inherit">Read Todo</Button>
          </Link>
          <Link to="/">
            <Button color="inherit">Home</Button>
          </Link>
        </Stack>
      </Toolbar>
      <Outlet />
    </AppBar>
  );
}
