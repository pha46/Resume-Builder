import React, {useState, useRef } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { useSelector } from 'react-redux';
import { useNavigate,  } from 'react-router-dom';
import noDataImage from '../assets/nodata.png';
import Template1 from '../components/templates/template1';
import Template2 from '../components/templates/template2';
import Template3 from '../components/templates/template3';
import Template4 from '../components/templates/template4';
import ReactToPrint from 'react-to-print';

const MyResume = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();
  const componentRef = useRef();
  const formData = useSelector(state => state.root.formData);
  const selectedTemplateId = useSelector(state => state.root.selectedTemplateID);
  const [filename, setFilename] = useState('');
  
  const handleBack = () => {
    navigate('/template-form', { state: { activeTab: 'Key Skills' } });
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
        <h1>Resume Preview</h1><br></br>
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
             <div style={{height:'100%', width:'100%'}} ref={componentRef}>
               <TemplateComponent />
             </div>
             ) : (
                 <div style={{ width: '70%', height: '70%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <img width='300px' height='400px' src={noDataImage} alt="No data" />
                    <h3>Please select a template</h3>
                 </div>
             )}
          </Paper>
        </Box>
        <Box width={isMobile ? '100%' : '40%'} display={'flex'} flexDirection={'column'} alignItems={'center'} height={isMobile ? 'auto' : '40vw'}>
          <h3>Create File Name</h3>
          <Box
            display="flex"
            flexDirection={'column'}
            alignItems={'center'}
          >
            <TextField style={{ width:'300px' }} onChange={(e) => setFilename(e.target.value)} />
            <Box 
              display="flex" 
              flexDirection="row"
              paddingTop={'20px'}
            >
              <Button onClick={handleBack}
                style={{
                  height: '40px',
                  width: '100px',
                  color: 'white',
                  backgroundColor: 'gray'
                  }}>
                Back
              </Button>
              <ReactToPrint
                trigger={() => <Button onClick={() => {alert(`Please enter "${filename}" as the filename in the print dialog.`);}}
                style={{
                  height: '40px',
                  width: '100px',
                  color: 'white',
                  backgroundColor: 'gray',
                  marginLeft:'10px',
                }}
                >Print</Button>}
                content={() => componentRef.current}
              />
              <Button onClick={handleBack}
                style={{
                  height: '40px',
                  width: '100px',
                  color: 'white',
                  backgroundColor: 'blue',
                  marginLeft:'10px',
                  }}>
                Save
              </Button>
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