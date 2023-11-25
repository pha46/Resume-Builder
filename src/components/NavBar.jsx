import React, { useState,  useEffect } from 'react';
import './NavBar.css';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, List, ListItem, ListItemText, Drawer, useTheme, useMediaQuery, Box, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../assets/logo.svg';
import { resetFormData } from '../Redux/actions/actions';
import { useDispatch } from 'react-redux';

const NavBar = () => {
  const [drawer, setDrawer] = useState(false);
  const location = useLocation();
  const theme = useTheme();
  const dispatch = useDispatch();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    // console.log('Current Path:', location.pathname);

    if (location.pathname !== '/my-resume' && location.pathname !== '/about-us'
    && location.pathname !== '/Resume-Builder' && location.pathname !== '/template-form'
    ) {
      // console.log('Resetting form data...');
      dispatch(resetFormData());
    }
  }, [dispatch, location.pathname]);

  const toggleDrawer = (open) => (event) => {
    setDrawer(open);
  };

  const list = () => (
    <Box
      sx={{ width: '100%'}}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <List>
        {[
          { text: 'Resume Templates', path: '/resume-template' },
          { text: 'My Resume', path: '/my-resume' },
          { text: 'About Us', path: '/about-us' }
        ].map((item) => {
          return (
            <ListItem
              key={item.text}
              component={RouterLink}
              to={item.path}
              sx={{ color: location.pathname === item.path ? '#F00037' : 'inherit', textDecoration: 'none' }}
            >
              <ListItemText primary={<Typography variant="body1">{item.text}</Typography>} />
            </ListItem>
          );
        })}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="static" className='AppBar'>
        <Toolbar
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <RouterLink to="/Resume-Builder">
            <img src={logo} alt="Resume Builder" height="100px" />
          </RouterLink>
          {isMobile ? (
            <>
              <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
                <MenuIcon />
              </IconButton>
              <Drawer anchor="left" open={drawer} onClose={toggleDrawer(false)}>
                {list()}
              </Drawer>
            </>
          ) : (
            <List
              sx={{
                display: `flex`,
                justifyContent: `space-between`,
                backgroundColor: 'transparent'
              }}
            >
              {[
                { text: 'Resume Templates', path: '/resume-template' },
                { text: 'My Resume', path: '/my-resume' },
                { text: 'About Us', path: '/about-us' } 
              ].map((item) => {
                return (
                  <ListItem
                    key={item.text}
                    component={RouterLink}
                    to={item.path}
                    sx={{ color: location.pathname === item.path ? 'black' : 'inherit', textDecoration: 'none' }}
                  >
                    <ListItemText primary={<Typography variant="body1" align="center">{item.text}</Typography>} />
                  </ListItem>
                );
              })}
            </List>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
}

export default NavBar;