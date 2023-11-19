import * as React from 'react';
import Nav from '../Nav/Nav';
import SideBar from '../SideBar/SideBar';
import CssBaseline from '@mui/material/CssBaseline';
import { Outlet } from "react-router-dom";
import { Box } from '@mui/material';
import { DrawerHeader } from './../SideBar/SideBar';











export default function Layout() {

  // need<=================>
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  // need<=================>



  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />

        <Nav handleDrawerOpen={handleDrawerOpen} open={open} />
        
        <SideBar handleDrawerClose={handleDrawerClose} open={open} />

        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
         <Outlet/>
        </Box>
      </Box>

    </>


  );
}