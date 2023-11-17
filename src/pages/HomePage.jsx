import React from 'react';
import { Button, Box, Typography, useTheme, useMediaQuery } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();
  const TemplateGo = () => { 
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
      <Button variant="contained" onClick={TemplateGo}>
        Get Started
      </Button>
    </Box>
    </>
  );
};

export default HomePage;