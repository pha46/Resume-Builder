import React, { useState, } from 'react';
import './TemplateForm.css';
import { useTheme } from '@mui/material/styles';
import { useDispatch} from 'react-redux';
import { useNavigate,  } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import Modal from '@mui/material/Modal';
import { List, ListItem, ListItemText, Typography, Box, Button } from '@mui/material';
import PersonalInfo from '../components/FormSections/PersonalInfo';
import WorkExperience from '../components/FormSections/WorkExperience';
import EducationDetails from '../components/FormSections/EducationDetails';
import KeySkills from '../components/FormSections/KeySkills';
import { saveFormData } from '../Redux/actions/actions';
import { useLocation } from 'react-router-dom';

function TemplateForm() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.between('xs', 'md'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const location = useLocation();
  const initialTab = location.state?.activeTab || 'Personal Info';
  const tabs = ['Personal Info', 'Work Experience', 'Education', 'Key Skills'];
  const tabIndex = tabs.indexOf(initialTab);
  const [activeTab, setActiveTab] = useState(tabIndex >= 0 ? tabIndex : 0);
  const dispatch = useDispatch();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [localData, setFormData] = useState({ 
    personalInfo: {}, 
    education: {},
    experience: {},
  });
  const [localD, skilld] = useState({
    skills: [],})
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  const handleSubmit = () => {
      dispatch(saveFormData(localD));
      alert('Submitted');
      navigate('/my-resume');
  };

  const goBack = () => {
    if (activeTab > 0) {
      setActiveTab(activeTab - 1);
    }
  };

  const goNext = () => {
    if (activeTab < tabs.length - 1) {
      let canGoNext = true;
  
      // Check if required fields are filled based on the active tab
      switch (tabs[activeTab]) {
        case 'Personal Info':
          const { firstName, lastName, email, mobile, address, overview } = localData.personalInfo;
          if (!firstName || !lastName || !email || !mobile || !address || !overview) {
            canGoNext = false;
          }
          break;
          case 'Work Experience':
            if (localData.experience) {
              Object.keys(localData.experience).forEach((key) => {
                const { jobTitle, orgName, startYear, endYear } = localData.experience[key];
                if (!jobTitle || !orgName || !startYear || !endYear ) {
                  canGoNext = false;
                }
              });
            }
            break;

            case 'Education':
            if (localData.education) {
              Object.keys(localData.education).forEach((key) => {
                const { type, university_collegeName, Start_Year, End_Year } = localData.education[key];
                if (!type || !university_collegeName || !Start_Year || !End_Year ) {
                  canGoNext = false;
                }
              });
            }
            break;
        default:
          break;
      }
  
      if (canGoNext) {
        setActiveTab(activeTab + 1);
        dispatch(saveFormData(localData));
      } else {
        setOpen(true);
      }
    }
  };

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const containerStyles = {
    width: isMobile ? '100%' : 'auto',
    margin: isMobile ? 0 : 'auto',
  };

  return (
    <Grid container spacing={1} style={containerStyles}>
      {(isTablet || isMobile) && (
        <>
          <IconButton onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
          <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
          <List>
              {tabs.map((tab, index) => (
                <ListItem
                  key={index}
                  onClick={() => setActiveTab(index)}
                  sx={{ color: activeTab === index ? '#F00037' : 'inherit', textDecoration: 'none' }}
                >
                  <ListItemText primary={<Typography variant="body1">{tab}</Typography>} />
                </ListItem>
              ))}
            </List>
          </Drawer>
        </>
      )}
      {isDesktop && (
        <Grid item xs={3}>
          <Box className="tabs"
            sx={{
              position: 'sticky',
              top: 0,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              marginRight: '20px',
              padding: '20px',
              borderRadius: '5px',
              marginLeft: '1px',
            }}
          >
            {tabs.map((tab, index) => (
        <Box
          component="button"
          key={index}
          onClick={() => setActiveTab(index)}
          sx={{
            background: 'none',
            border: 'none',
            width: '200px',
            paddingBottom: '20px',
            paddingTop: '20px',
            paddingRight: '50px',
            paddingLeft: '50px',
            cursor: 'pointer',
            textAlign: 'center',
            marginBottom: '10px',
            color: activeTab === index ? 'blue' : '#000',
            boxShadow: '0 0 10px rgba(0,0,0,0.1)',
            borderLeft: activeTab === index ? '5px solid blue' : '5px solid transparent',
            transition: 'all 0.3s ease',
          }}
        >
          {tab}
        </Box>
      ))}
    </Box>
        </Grid>
      )}
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
              width: 300, 
              bgcolor: 'background.paper', 
              border: '1px solid blue', 
              boxShadow: 24, 
              p: 4 
            }}
          >
            <h2 id="modal-modal-title">Required Fields Missing</h2>
            <p id="modal-modal-description">Please fill all required fields before proceeding.</p>
            <Button onClick={handleClose}>Close</Button>
          </Box>
        </Modal>
      <Grid item xs={isDesktop ? 9 : 12}>
        <div className="template-form">
            {tabs[activeTab] === 'Personal Info' && 
              <PersonalInfo setPersonalInfo={setFormData} />
            }
            {tabs[activeTab] === 'Work Experience' && (
              <WorkExperience setWorkExperienceData={setFormData} />
            )}

            {tabs[activeTab] === 'Education' && (
              <EducationDetails setEducationfillingData={setFormData} />
            )}
            {tabs[activeTab] === 'Key Skills' && (
              <div><KeySkills setKeySkillsData={skilld} />
              </div>
            )}
            <hr></hr>
            {activeTab > 0 && activeTab  && <button type="button" className='back' onClick={goBack}>Back</button>}
            {activeTab < tabs.length - 1 && <button type="button" className='next' onClick={goNext}>Next</button>}
            {activeTab === tabs.length - 1 && 
              <button 
                type="submit" 
                className='submit' 
                onClick={handleSubmit} 
                style={{
                  height: '40px',
                  width: '100px',
                  backgroundColor: 'blue',
                  border: '1px solid white',
                  borderRadius: '5%',
                  color: 'white',
                  textAlign: 'center',
                  textDecoration: 'none',
                  display: 'inline-block',
                  fontSize: '16px',
                  margin: '4px 2px',
                  cursor: 'pointer',
                  lineHeight: '40px'
                }}
              >
                Submit
              </button>
            }
        </div>
      </Grid>
    </Grid>
  );
}

export default TemplateForm;