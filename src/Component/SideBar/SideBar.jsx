import React from "react";
import { styled, useTheme } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// icons<=================================================>
import HomeOutlinedIcon from '@mui/icons-material/HomeRounded';
import { BarChartOutlined, CalendarTodayOutlined, ContactsOutlined, HelpOutlineOutlined, MapOutlined, PeopleOutline, PersonOutline, PieChartOutlineOutlined, ReceiptOutlined, TimelineOutlined } from "@mui/icons-material";
import { Avatar, Tooltip, Typography } from "@mui/material";
//icons <=================================================>
import logo from "../../Assets/Images/me.png"
import { useLocation, useNavigate } from "react-router-dom";
const drawerWidth = 240;



const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

// drawer<======================================>
export const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));
// drawer<======================================>



// drawer<======================================>
const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);
// drawer<======================================>





export default function SideBar(props) {
  const location = useLocation();

  const theme = useTheme();


  // items list<===========================================>

  const list1 = [
    { "text": "Dashboard", "icon": <HomeOutlinedIcon />, "path": "/" },
    { "text": "Manage Team", "icon": <PeopleOutline />, "path": "/Team " },
    { "text": "Contacts Information", "icon": <ContactsOutlined />, "path": "/Contacts " },
    { "text": "Invoices Balances", "icon": <ReceiptOutlined />, "path": "/Invoices " },

  ];

  const list2 = [
    { "text": "Profile Form", "icon": <PersonOutline />, "path": "/Form" },
    { "text": "Calender", "icon": <CalendarTodayOutlined />, "path": "/Calender" },
    { "text": "FAQ Page", "icon": <HelpOutlineOutlined />, "path": "/FAQ" },
  ];
  const list3 = [
    { "text": "Bar Chart", "icon": <BarChartOutlined />, "path": "/Bar" },
    { "text": "Pie Chart", "icon": <PieChartOutlineOutlined />, "path": "/Pie" },
    { "text": "Line Chart", "icon": <TimelineOutlined />, "path": "/Line" },
    { "text": "Geography Chart", "icon": <MapOutlined />, "path": "/Geography" },

  ];

  // items list<===========================================>


  let { handleDrawerClose, open } = props;
  let navigate = useNavigate()

  return <>

    <Drawer variant="permanent" open={open}>

      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </DrawerHeader>

      <Divider />

      <Tooltip placement="left" title={open?"":"Omar Mohamed" }>
        <Avatar sx={{ mx: "auto", height: open ? 88 : 44, transition: ".25s", width: open ? 88 : 44, my: "10px", border: "2px solid gray" }} alt="Remy Sharp" src={logo} />

      </Tooltip>
      <Typography align="center" sx={{ fontSize: open ? 17 : 0, transition: ".25s" }} > omar mohamed</Typography>
      <Typography align="center" sx={{ fontSize: open ? 14 : 0, transition: ".25s" }} color={theme.palette.info.main} > Admin</Typography>

      <Divider />

      <List>
        {list1.map((item) => (
          <ListItem key={item.text} disablePadding sx={{ display: 'block' }}>

            <Tooltip placement="left" title={open?"":item.text}>

              <ListItemButton
                onClick={() => { navigate(item.path) }}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                  bgcolor: item.path === location.pathname ? theme.palette.gray.main : null
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </Tooltip>


          </ListItem>
        ))}
      </List>



      <Divider />
      <List>
        {list2.map((item) => (
          <ListItem key={item.text} disablePadding sx={{ display: 'block' }}>

            <Tooltip placement="left" title={open?"":item.text}>

              <ListItemButton
                onClick={() => { navigate(item.path) }}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                  bgcolor: item.path === location.pathname ? theme.palette.gray.main : null
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </Tooltip>
          </ListItem>
        ))}
      </List>



      <Divider />

      <List>
        {list3.map((item) => (
          <ListItem key={item.text} disablePadding sx={{ display: 'block' }}>
            <Tooltip placement="left" title={open?"":item.text}>

              <ListItemButton
                onClick={() => { navigate(item.path) }}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                  bgcolor: item.path === location.pathname ? theme.palette.gray.main : null
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </Tooltip>
          </ListItem>
        ))}
      </List>



    </Drawer>


  </>
}
