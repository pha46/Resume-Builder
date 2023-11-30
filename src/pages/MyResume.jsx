import React, {useState, useRef } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useSelector } from 'react-redux';
import { useNavigate,  } from 'react-router-dom';
import noDataImage from '../assets/nodata.png';
import Template1 from '../components/templates/template1';
import Template2 from '../components/templates/template2';
import Template3 from '../components/templates/template3';
import Template4 from '../components/templates/template4';
import ReactToPrint from 'react-to-print';
import html2pdf from 'html2pdf.js';

const MyResume = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();
  const componentRef = useRef();
  const paperRef = useRef();
  const formData = useSelector(state => state.root.formData.personalInfo) || {};
  const selectedTemplateId = useSelector(state => state.root.selectedTemplateID);
  const [filename, setFilename] = useState('');
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  
  const handleBack = () => {
    navigate('/template-form', { state: { activeTab: 'Key Skills' } });
  };

  const handleSave = () => {
    if (!filename) {
      alert('Please enter a filename');
      return;
    }
  
    const opt = {
      margin: 0,
      filename: `${filename}.pdf`,
      image: { type: 'jpeg', quality: 1 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };
  
    html2pdf().set(opt).from(componentRef.current).save().then(() => {
      setOpen(true);
    });
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
    <Box display="flex" flexDirection="column">
      <Box>
        <h1>Resume Preview</h1><br></br>
      </Box>
      <Box display="flex" flexDirection={isMobile ? 'column' : 'row'} overflow="auto">
        <Box width={isMobile ? '100%' : '60%'} height={isMobile ? '800px' : '100vh'}>
          <Paper
            ref={paperRef}
            style={{
              width: isMobile ? '90%':'65%',
              height: '80%',
              border: '1px solid black',
              padding: '0px',
              margin: isMobile? '1%':'0px 80px',
              overflow: 'scroll',
            }}
          >
             {TemplateComponent ? (
             <div style={{width:'100%', height:'100%'}} ref={componentRef}>
               <TemplateComponent/>
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
              <Button onClick={handleSave}
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
      <Box>
      <Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box 
    sx={{ 
      position: 'absolute', 
      top: '50%', 
      left: '50%', 
      transform: 'translate(-50%, -50%)', 
      width: 400, 
      bgcolor: 'background.paper', 
      border: '1px solid blue', 
      boxShadow: 24, 
      p: 4 
    }}
  >
    <h2 id="modal-modal-title">Download Successful</h2>
    <p id="modal-modal-description">Your file has been downloaded successfully.</p>
    <Button onClick={handleClose}>Close</Button>
  </Box>
</Modal>
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