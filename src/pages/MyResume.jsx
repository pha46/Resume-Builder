import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { useSelector } from 'react-redux';
import { useNavigate,  } from 'react-router-dom';
import noDataImage from '../assets/nodata.png'; // replace with your actual image path
// import YourTemplatePage from './YourTemplatePage';
import Template1 from '../components/templates/template1';
import Template2 from '../components/templates/template2';
import Template3 from '../components/templates/template3';
import Template4 from '../components/templates/template4';

const MyResume = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.between('xs', 'md'));
  // const isDesktop = useMediaQuery(theme.breakpoints.up('md'))
  // const isEmpty = Object.values(formData).every(x => (x === null || x === ''));
  const navigate = useNavigate();
  // const formData = useSelector((state) => state.formR.formData);
  const formData = useSelector(state => state.formR.formData); // Adjust this line based on your actual Redux state structure

  const selectedTemplateId = useSelector(state => state.templateRE.selectedTemplate);

  const handleBack = () => {
    // Navigate to the key skills filling page
    navigate('/template-form');
  };

  const handleSave = () => {
    // Generate a PDF file of the preview
  };

  let TemplateComponent;
  switch (selectedTemplateId) {
    case 1:
      TemplateComponent = Template1;
      break;
    case 2:
      TemplateComponent = Template2;
      break;
    case 3:
      TemplateComponent = Template3;
      break;
    case 4:
      TemplateComponent = Template4;
      break;
    default:
      TemplateComponent = null;
  }

  const isDataEmpty = !formData || Object.keys(formData).length === 0;


  return (!isDataEmpty && TemplateComponent) ? (
    <Grid container style={{display: 'flex', flexDirection: 'column'}}>
      <Grid item>
        <h2 style={{marginLeft: '10%'}}>Resume Preview</h2>
        <hr />
      </Grid>
      <Grid item style={{display: 'flex', flexDirection: isMobile? 'column' : 'row' }}>
        <Grid item xs={12} md={6}>
          <Paper
            style={{
              width: isMobile ? '400px' : '400px' ,
              height: isMobile ? '500px' : '500px',
              border: '1px solid black',
              margin: '20px',
              justifyContent: 'center',
              overflow: 'auto',
            }}
          > 
            {TemplateComponent ? (
              <div style={{ transform: 'scale(0.9)', transformOrigin: '0 0' }}>
                <TemplateComponent />
              </div>
              ) : (
                <div style={{ width: '400px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                  <img width='300px' height='400px' src={noDataImage} alt="No data" />
                  <h3>Please select a template</h3>
                </div>
              )}

            <h3>Form Data:</h3>
            <pre>{JSON.stringify(formData, null, 2)}</pre>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} alignItems={'left'}>
            <h3 align={'left'} margin={'10px'}>Create File Name</h3>
            <Box
              display="flex"
              flexDirection={'column'}
              justifyContent={'space-between'}
              alignItems={'left'}
              width={'500px'}
              margin={'10px'}
            >
              <TextField style={{ width:'300px' }} />
              <Box display="flex" flexDirection="row" justifyContent={'start'} alignContent={'center'}>
                <Button color="primary" onClick={handleBack}>
                  Back
                </Button>
                <Button color="secondary" onClick={handleSave}>
                  Save
                </Button>
              </Box>
            </Box>
        </Grid>
      </Grid>
    </Grid>
  ) : (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <img src={noDataImage} alt="No data" />
      <p>Please select a template</p>
    </div>
  );
};

export default MyResume;