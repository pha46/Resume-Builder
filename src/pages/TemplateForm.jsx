import React, { useState, } from 'react';
import { useTheme } from '@mui/material/styles';
import { useDispatch} from 'react-redux';
import { useNavigate,  } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import { List, ListItem, ListItemText, Typography, Box } from '@mui/material';
import PersonalInfo from '../components/FormSections/PersonalInfo';
import WorkExperience from '../components/FormSections/WorkExperience';
import EducationDetails from '../components/FormSections/EducationDetails';
import KeySkills from '../components/FormSections/KeySkills';
import '../styles/TemplateForm.css';
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
    skills: {},
    experience: {},
  });
  const navigate = useNavigate();

  const handleSubmit = () => {
      dispatch(saveFormData(localData));
      alert('A form was submitted: ');
      navigate('/my-resume');
  };

  const goBack = () => {
    if (activeTab > 0) {
      setActiveTab(activeTab - 1);
    }
  };

  const goNext = () => {
    if (activeTab < tabs.length - 1) {
      setActiveTab(activeTab + 1);
      dispatch(saveFormData(localData));
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
      <Grid item xs={isDesktop ? 9 : 12}>
        <div className="template-form">
            {tabs[activeTab] === 'Personal Info' && 
              <PersonalInfo setPersonalInfo={setFormData} />
            }
            {tabs[activeTab] === 'Work Experience' && (
              <WorkExperience setFormData={setFormData} />
            )}

            {tabs[activeTab] === 'Education' && (
              <EducationDetails setFormData={setFormData} />
            )}
            {tabs[activeTab] === 'Key Skills' && (
              <div><KeySkills setFormData={setFormData} />
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
                  border: 'none',
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