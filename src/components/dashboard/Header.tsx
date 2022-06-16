import React from 'react';
import { styled } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { MainListItems, SecondaryListItems } from './listItems';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useLayout } from '../../hooks/useAction';


const drawerWidth: number = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    [theme.breakpoints.down("sm")]: {
        width: `calc(100% - ${180}px)`,
    },
    [theme.breakpoints.up("sm")]: {
        width: `calc(100% - ${drawerWidth}px)`,
    },
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'absolute',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

interface IHeader {
    name: string;
}

const Header = (props: IHeader) => {
    const { name } = props;
    const {menu} = useTypedSelector(state => state.layout);
    const {menuLayout} = useLayout();
    const toggleDrawer = () => {
        menuLayout({menu: !menu})
    };
    return (
        <>
        <AppBar position="absolute" open={menu} className="appbar">
            <Toolbar
            sx={{
                pr: '24px', // keep right padding when drawer closed
            }}
            >
            <IconButton
                edge="start"
                color="inherit"
                aria-label="open drawer"
                onClick={toggleDrawer}
                sx={{
                marginRight: '36px',
                ...(menu && { display: 'none' }),
                }}
            >
                <MenuIcon />
            </IconButton>
            <Typography
                component="h1"
                variant="h6"
                color="inherit"
                noWrap
                sx={{ flexGrow: 1 }}
            >
                {name}
            </Typography>
            <IconButton color="inherit">
                <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
                </Badge>
            </IconButton>
            <IconButton color="inherit">
                <ExitToAppIcon/>
            </IconButton>
            </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={menu} className="drawer-menu">
            <Toolbar
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                px: [1],
            }}
            >
                <IconButton onClick={toggleDrawer}>
                    <ChevronLeftIcon />
                </IconButton>
            </Toolbar>
                <Divider />
            <List component="nav">
                <MainListItems/>
                <Divider sx={{ my: 1 }} />
                <SecondaryListItems/>
            </List>
        </Drawer>
       </>
    );
};

export default Header;