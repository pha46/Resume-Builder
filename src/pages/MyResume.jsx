import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { useSelector } from 'react-redux';
// import noDataImage from './no-data.png'; // replace with your actual image path
// import YourTemplatePage from './YourTemplatePage';

const MyResume = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.between('xs', 'md'));
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'))
  // const isEmpty = Object.values(formData).every(x => (x === null || x === ''));
  
  const formData = useSelector((state) => state.formR.formData);

  const handleBack = () => {
    // Navigate to the key skills filling page
  };

  const handleSave = () => {
    // Generate a PDF file of the preview
  };



  return (
    <Grid container style={{display: 'flex', flexDirection: 'column'}}>
      <Grid item>
        <h2 style={{marginLeft: isMobile ? '5%' : '10%'}}>Resume Preview</h2>
        <hr />
      </Grid>
      <Grid item style={{display: 'flex', flexDirection: isMobile? 'column' : 'row' }}>
        <Grid item xs={12} md={6}>
          <Paper
            style={{
              width: isMobile ? '100%' : '300px',
              height: isMobile ? '400px' : '400px',
              border: '1px solid black',
              margin: '20px',
              justifyContent: isMobile ? 'center' : 'left',
            }}
          >
            {/* {isEmpty ? (
              <img src={noDataImage} alt="No data" />
            ) : (
              <YourTemplatePage />
            )} */}

            <h3>Form Data:</h3>
            <pre>{JSON.stringify(formData, null, 2)}</pre>

          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          {/* <div style={{ padding: '2rem' }}> */}
            <h3>Create File Name</h3>
            <Box
              display="flex"
              flexDirection={'column'}
              justifyContent="space-between"
              alignContent={'center'}
            >
              <TextField style={{ width: isMobile ? '300px' : '300px' }} />
              <Box display="flex" flexDirection="row" justifyContent="space-between" height={'3rem'}>
                <Button color="primary" onClick={handleBack}>
                  Back
                </Button>
                <Button color="secondary" onClick={handleSave} style={{ marginTop: '1rem' }}>
                  Save
                </Button>
              </Box>
            </Box>
          {/* </div> */}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MyResume;