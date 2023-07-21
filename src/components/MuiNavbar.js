import { AppBar, Toolbar, Typography, Button, Stack } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import './MuiNavbar.css';
export default function MuiNavbar() {
  return (
    <AppBar position="static" color="transparent" className="container">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          React Crud App
        </Typography>
        <Stack direction="row" spacing={2}>
          <Link to="/create">
            <Button color="inherit">Create New Data</Button>
          </Link>
          <Link to="/read">
            <Button color="inherit">Read Data</Button>
          </Link>
          <Link to="/">
            <Button color="inherit">Home</Button>
          </Link>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
