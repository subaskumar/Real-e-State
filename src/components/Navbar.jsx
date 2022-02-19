import {useState} from 'react';
import {AppBar,Box,Toolbar,IconButton, Typography,
    Menu,Container,Avatar,Button , Tooltip, MenuItem, Grid,LinearProgress } from '@mui/material';

import SwipeableTemporaryDrawer from './SideBar'
import Logo from './logo2.svg'
import { Link } from 'react-router-dom';
import {useDispatch, useSelector } from "react-redux";
import { loginPending, logOut } from "../features/Auth/loginSlice"
import UserModal from "./Modal"
import LogIn from '../pages/LogIn';
import Register from '../pages/Register';
import { openModal} from '../features/modalSlice'


const LoginAuth = () =>{
  // const { open , component } = useSelector(state=> state.modal)
  const dispatch = useDispatch()


  
  const handleSignup = (event) => {
    dispatch(openModal(<Register />))

  }
  const handleLogIn = (event) => {
    dispatch(openModal(<LogIn />))

  }
  return (
    <>

      <Button
        onClick={handleSignup}
        sx={{ fontSize: '17px',mx: 1, color: 'rgb(42, 42, 53)', fontWeight: 'normal', textTransform: 'capitalize'}}
        >Register
      </Button>
      <Button
        onClick={handleLogIn}
        sx={{ fontSize: '17px',mx: 1, color: 'rgb(42, 42, 53)', fontWeight: 'normal', textTransform: 'capitalize'}}
      >Log In
      </Button>
      <UserModal />
    </>
  )
}
const LogOutAuth = () =>{

  const dispatch = useDispatch();
  const LogMeOut = () => {
    dispatch(loginPending())
    dispatch(logOut())
  }
  return (
    <>
      <Button
        onClick={LogMeOut}
        sx={{ fontSize: '17px',mx: 1, color: 'rgb(42, 42, 53)', fontWeight: 'normal', textTransform: 'capitalize'}}
        >Log Out</Button>
    </>
  )
}

const NavBar = () => {
  const { isAuthenticated,isLoading, } = useSelector(state => state.login);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const settings = isAuthenticated ? ['Log out'] : ['Log In', 'Sign Up'];

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <Box sx={{ width: '100%' , height: '2px' }}>
        { isLoading ? <LinearProgress sx={{ width: '100%' , height: '2px' }}/> : <></> }
      </Box>
      <AppBar position="static" sx={{padding: '8px 0px', backgroundColor: 'white'}}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Grid item xs={3} md={5}>
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                  
                  <Button
                      component={Link} to={`/listings/${1}`}
                      sx={{fontSize: '17px',display: 'block',color: 'rgb(42, 42, 53)', fontWeight: 'normal', textTransform: 'capitalize' }}
                  >Listings</Button>
                  <Button
                      component={Link} to="/agentFinder"
                      sx={{fontSize: '17px',mx: 1, display: 'block',color: 'rgb(42, 42, 53)', fontWeight: 'normal', textTransform: 'capitalize' }}
                  >Agent finder</Button>
                  <Button
                      component={Link} to="/sell_home"
                      sx={{fontSize: '17px',mx: 1, display: 'block',color: 'rgb(42, 42, 53)', fontWeight: 'normal', textTransform: 'capitalize' }}
                  >Sell Property</Button>
              </Box>

              <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                  <SwipeableTemporaryDrawer />
              </Box>
            </Grid>
            <Grid item xs={6} md={2} align="center">
              <Typography
                  component={Link} to="/"
                  variant="h5"
                  noWrap
              >
                  <img className='logo' src={Logo} alt=''/>
              </Typography>
            </Grid>
            <Grid item xs={3} md={5} align="right" >
              <Box sx={{display: { xs: 'none', md:'block'}}}>
                  <Button
                      component={Link} to="/aboutus"
                      sx={{ fontSize: '17px',mx: 1, color: 'rgb(42, 42, 53)', fontWeight: 'normal', textTransform: 'capitalize'}}
                  >About Us</Button>

                  {isAuthenticated ?  <LogOutAuth /> : <LoginAuth /> }

                  
              </Box>
              <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                  <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                  </IconButton>
                  </Tooltip>
                  <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                  >
                  {settings.map((setting) => (
                      <MenuItem key={setting} >
                      <Typography textAlign="center">{setting}</Typography>
                      </MenuItem>
                  ))}
                  </Menu>
              </Box>
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default NavBar;