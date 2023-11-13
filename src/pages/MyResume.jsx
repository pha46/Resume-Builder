import React, {useState, useRef } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
// import Grid from '@mui/material/Grid';
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
import ReactToPrint from 'react-to-print';

const MyResume = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  // const Mobile = useMediaQuery(theme.breakpoints.down('sm'));
  // const isDesktop = useMediaQuery(theme.breakpoints.up('md'))
  // const isEmpty = Object.values(formData).every(x => (x === null || x === ''));
  const navigate = useNavigate();
  // const formData = useSelector((state) => state.formR.formData);
  const componentRef = useRef();
  const formData = useSelector(state => state.formData.formData);
  const selectedTemplateId = useSelector(state => state.formData.selectedTemplateID);
  // const usestate = useState();
  const [filename, setFilename] = useState('');
  const handleBack = () => {
    // Navigate to the key skills filling page
    // navigate('/template-form');
    navigate('/template-form', { activeTab: 'Key Skills' });
  };

  // const handleSave = () => {
  //   // Generate a PDF file of the preview
  //   componentRef.current.handlePrint();
  // };

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
    <Box display="flex" flexDirection="column">
      <Box>
        <h1>Resume Preview</h1>
        <hr/>
      </Box>
      <Box display="flex" flexDirection={isMobile ? 'column' : 'row'} overflow="auto">
        <Box width={isMobile ? '100%' : '60%'} height={isMobile ? 'auto' : '100vh'}>
          <Paper
            style={{
               width: '105mm', 
               height: '148.5mm', 
               border: '1px solid black',
               margin: 'auto',
               overflow: 'auto',
            }}
          > 
             {TemplateComponent ? (
                <div ref={componentRef} style={{ transform: 'scale(1)', transformOrigin: '0 0' }}>
                  <TemplateComponent />
                </div>
             ) : (
                 <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <img width='300px' height='400px' src={noDataImage} alt="No data" />
                    <h3>Please select a template</h3>
                 </div>
             )}
          </Paper>
        </Box>
        <Box width={isMobile ? '100%' : '40%'} display={'flex'} flexDirection={'column'} alignItems={isMobile ? 'center' : 'left'} height={isMobile ? 'auto' : '40vw'}>
          <h3>Create File Name</h3>
          <Box
            display="flex"
            flexDirection={'column'}
            justifyContent={'space-between'}
            alignItems={isMobile ? 'center' : 'left'}
            width={'500px'}
            margin={'10px'}
          >
            <TextField style={{ width:'300px' }} onChange={(e) => setFilename(e.target.value)} />
            <Box display="flex" flexDirection="row" justifyContent={'start'} alignItems={isMobile ? 'center' : 'left'}>
              <Button color="primary" onClick={handleBack}>
                Back
              </Button>
              <ReactToPrint
                trigger={() => <Button color="secondary" onClick={() => {alert(`Please enter "${filename}" as the filename in the print dialog.`);}}>Save</Button>}
                content={() => componentRef.current}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  ) : (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100vh">
      <img src={noDataImage} alt="No data" />
      <p>Please select a template</p>
    </Box>
  );
};

export default MyResume;