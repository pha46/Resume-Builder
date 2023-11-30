import React from 'react';
import './Styles.css';
import { Button, Box, Typography, useTheme, useMediaQuery } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  // Function to navigate to the resume template page
  const navigateToResumeTemplate = () => { 
    navigate('/resume-template');
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
    <Box 
      sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        height: '100vh', 
        textAlign: 'center',
        gap: '20px',
        px: isMobile ? 2 : 10, // padding on x-axis
      }}
    >
      <Typography variant={isMobile ? "h4" : "h2"} component="div">
        Welcome to our Resume Builder!
      </Typography>
      <Typography variant={isMobile ? "subtitle1" : "h6"} component="div">
        Get started by selecting a template.
      </Typography>
      
        <Button className='block' variant="contained" onClick={navigateToResumeTemplate}>
          Get Started
        </Button>
      
      
    </Box>
    </>
  );
};

export default HomePage;