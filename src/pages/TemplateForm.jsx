import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useTheme } from '@mui/material/styles';
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

function TemplateForm() {
  const tabs = ['Personal Info', 'Work Experience', 'Education', 'Key Skills'];
  const [activeTab, setActiveTab] = useState(0);
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const dispatch = useDispatch();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.between('xs', 'md'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const onSubmit = data => {
    alert('A form was submitted: ' + JSON.stringify(data));
    dispatch({ type: 'SAVE_FORM_DATA', payload: data });
  };

  const goBack = () => {
    if (activeTab > 0) {
      setActiveTab(activeTab - 1);
    }
  };

  const goNext = () => {
    if (activeTab < tabs.length - 1) {
      setActiveTab(activeTab + 1);
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
                  button
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
          <form onSubmit={handleSubmit(onSubmit)}>
            {tabs[activeTab] === 'Personal Info' && 
              <PersonalInfo register={register} errors={errors} />
            }
            {tabs[activeTab] === 'Work Experience' && (
              <WorkExperience register={register} errors={errors} />
            )}

            {tabs[activeTab] === 'Education' && (
              <EducationDetails register={register} errors={errors} watch={watch} />
            )}
            {tabs[activeTab] === 'Key Skills' && (
              <div><KeySkills register={register} errors={errors} />
                {/* {activeTab === tabs.length - 1 ? 
                  <input type="submit" value="Submit" /> :
                  <button type="button" onClick={goNext}>Next</button>
                } */}
              </div>
            )}
            <hr></hr>
            {activeTab > 0 && activeTab < tabs.length - 1 && <button type="button" onClick={goBack}>Back</button>}
            {activeTab < tabs.length - 1 && <button type="button" onClick={goNext}>Next</button>}
            {activeTab === tabs.length - 1 && <input type="submit" value="Submit" />}
          </form>
        </div>
      </Grid>
    </Grid>
  );
}

export default TemplateForm;