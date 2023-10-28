import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

const MyResume = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.between('xs', 'sm'));

  const handleBack = () => {
    // Navigate to the key skills filling page
  };

  const handleSave = () => {
    // Generate a PDF file of the preview
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6} style={{ marginTop:'3rem'}}>
        <h2 style={{ textAlign: isMobile ? 'center' : 'left', marginLeft: isMobile ? '5%' : '20%', marginBottom: '3rem' }}>Resume Preview</h2>
        <Paper style={{ 
          width: isMobile ? '90%' : '400px', 
          height: isMobile ? 'auto' : '500px', 
          border: '1px solid black',
          margin: 'auto',
          marginLeft: isMobile ? '5%' : '20%',
          marginRight: '5px',
          padding: '1rem'
        }}>
          {/* Resume preview goes here */}
        </Paper>
      </Grid>
      <Grid item xs={12} md={6} style={{ marginTop:'8rem', align:'relative'}}>
        <h3>Create File Name</h3>
        <Box display="flex" flexDirection={isMobile ? 'column' : 'row'} justifyContent="space-between">
          <TextField
            style={{ width: isMobile ? '100%' : '45%', marginBottom: isMobile ? '1rem' : '0' }}
          />
          <Box display="flex" flexDirection="column" justifyContent="space-between" height={isMobile ? 'auto' : '3rem'}>
            <Button color="primary" onClick={handleBack}>
              Back
            </Button>
            <Button color="secondary" onClick={handleSave} style={{ marginTop: '1rem' }}>
              Save
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default MyResume;