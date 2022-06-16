import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BeenhereIcon from '@mui/icons-material/Beenhere';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
// import LayersIcon from '@mui/icons-material/Layers';
// import AssignmentIcon from '@mui/icons-material/Assignment';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';

const MainListItems = () => {
  const location = useLocation();
  return (
    <React.Fragment>
      <Link 
        to={'/dashboard'}
        className={
          location.pathname.includes('/dashboard') ? "sidebar_active" : "sidebar_sleep"
        }
      >
      <ListItemButton>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
      </Link>
      <Link 
        to={'/booking'}
        className={
          location.pathname.includes('/booking') ? "sidebar_active" : "sidebar_sleep"
        }>
      <ListItemButton>
        <ListItemIcon>
          <BeenhereIcon />
        </ListItemIcon>
        <ListItemText primary="Booking" />
      </ListItemButton>
      </Link>
      <Link 
        to={'/medical'}
        className={
          location.pathname.includes('/medical') ? "sidebar_active" : "sidebar_sleep"
        }>
      <ListItemButton>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Medical" />
      </ListItemButton>
      </Link>
      {/* <ListItemButton>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Customers" />
      </ListItemButton> */}
      <Link 
        to={'/cache'}
        className={
          location.pathname.includes('/cache') ? "sidebar_active" : "sidebar_sleep"
        }>
      <ListItemButton>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Cache" />
      </ListItemButton>
      </Link>
      {/* <ListItemButton>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Integrations" />
      </ListItemButton> */}
    </React.Fragment>
  );
}
const SecondaryListItems = () => {
  return (
    <React.Fragment>
      <ListSubheader component="div" inset>
        Saved reports
      </ListSubheader>
      {/* <ListItemButton>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Current month" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Last quarter" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Year-end sale" />
      </ListItemButton> */}
    </React.Fragment>
  );
} 

export {MainListItems, SecondaryListItems}