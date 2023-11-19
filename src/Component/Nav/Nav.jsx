import React, { useContext } from "react";
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import { alpha } from '@mui/material/styles';
import { Box, InputBase, Stack } from "@mui/material";
//icon <=============================================>
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { useTheme } from "@emotion/react";
import { darkModeCotext } from "../../Context/DarkModeContext";
//icon <=============================================>
const drawerWidth = 240;


// appbar<======================================>
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));
// appbar<======================================>










export default function Nav(props) {
  let theme = useTheme()

  let { handleDrawerOpen, open } = props;

  // search style<========================================>
  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));
  // search style<========================================>

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));

  let {setMyMode} = useContext(darkModeCotext);

  return <>

    <AppBar position="fixed" open={open}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{
            marginRight: 5,
            ...(open && { display: 'none' }),
          }}
        >
          <MenuIcon />
        </IconButton>

        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>

        <Box flexGrow={1} />


        <Stack direction={"row"}>

          <IconButton onClick={() => { 
           setMyMode(theme.palette.mode === "light" ? "dark" : "light"); localStorage.setItem("currentMode", theme.palette.mode === "light" ? "dark" : "light")
           }} sx={{ ml: 1 }} color="inherit">
            {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
          </IconButton>

          <IconButton color="inherit">
            <NotificationsNoneOutlinedIcon />
          </IconButton>

          <IconButton color="inherit">
            <SettingsRoundedIcon />
          </IconButton>

          <IconButton color="inherit">
            <Person2OutlinedIcon />
          </IconButton>
        </Stack>



      </Toolbar>
    </AppBar>
  </>

}
