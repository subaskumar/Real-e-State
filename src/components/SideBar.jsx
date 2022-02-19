import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import GiteIcon from '@mui/icons-material/Gite';
import OtherHousesIcon from '@mui/icons-material/OtherHouses';
import SupportAgentSharpIcon from '@mui/icons-material/SupportAgentSharp';
import ContactPhoneRoundedIcon from '@mui/icons-material/ContactPhoneRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import { Link } from 'react-router-dom';


export default function SwipeableTemporaryDrawer() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if ( event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
    //   sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation" onClick={toggleDrawer(anchor, false)} onKeyDown={toggleDrawer(anchor, false)} >
      <List>
          <ListItem button key='Home' component={Link} to="/">
            <ListItemIcon>
              <OtherHousesIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <Divider />
          <ListItem button key="Listings" component={Link} to="/listings">
            <ListItemIcon>
              <GiteIcon />
            </ListItemIcon>
            <ListItemText primary="Listings" />
          </ListItem>
          <Divider />
          <ListItem button key="Agent finder" component={Link} to="/agentFinder">
            <ListItemIcon>
              <SupportAgentSharpIcon />
            </ListItemIcon>
            <ListItemText primary="Agent finder" />
          </ListItem>
          <Divider />
          <ListItem button key="Contact" component={Link} to="/contact">
            <ListItemIcon>
              <ContactPhoneRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="Contact" />
          </ListItem>
          <Divider />
          <ListItem button key="About Us" component={Link} to="/aboutus">
            <ListItemIcon>
              <InfoRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="About Us" />
          </ListItem>
          <Divider />

      </List>
    </Box>
  );

  return (
    <>
      <div>
          <Button onClick={toggleDrawer("left", true)}>
              <IconButton size="large" sx = {{color: "black"}} aria-label="account of current user"
                  aria-controls="menu-appbar" aria-haspopup="true" color="inherit"
                      >
                  <MenuIcon />
              </IconButton>
          </Button>
          <SwipeableDrawer
              anchor={"left"}
              open={state["left"]}
              onClose={toggleDrawer("left", false)}
              onOpen={toggleDrawer("left", true)}
            >
              {list("left")}
          </SwipeableDrawer>
      </div>
    </>
  );
}