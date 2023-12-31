import React, { useState, useEffect } from 'react';
import './styles.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { removeExperience } from '../../Redux/actions/actions';

// WorkExperience component allows users to add and remove their work experiences.
function WorkExperience({ setWorkExperienceData}) {
  const theme = useTheme();
  // Check the screen size for responsive design
  const isMobile = useMediaQuery(theme.breakpoints.between('xs', 'sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const dispatch = useDispatch();
  // Get experience data from Redux store
  const experienceDataFromStore = useSelector((state) => state.root.formData.experience);
  // Local state for experience data
  const [experienceData, setExperienceData] = useState(experienceDataFromStore);
  // Initial experiences are set based on the data from the store
  const initialExperiences = experienceDataFromStore ? Object.keys(experienceDataFromStore).map((key, index) => index) : [0];
  const [experiences, setExperiences] = useState(initialExperiences);

  // Function to add a new experience
  const addExperience = () => {
    setExperiences([...experiences, {}]);
  };

  // Function to remove the last experience from both local state and Redux store
  const removeExperienceFromStateAndStore = () => {
    const newExperiences = experiences.slice(0, -1);
    setExperiences(newExperiences);
    const newExperienceData = { ...experienceData };
    delete newExperienceData[`experience${experiences.length}`];
    setExperienceData(newExperienceData); // Update the experienceData state
    setWorkExperienceData(newExperienceData); // Update the parent state
    dispatch(removeExperience(experiences.length - 1));
  }

  // Function to handle changes in the input fields
  const handleChange = (index) => (event) => {
    const { name, value } = event.target;
    if (experienceData) {
      setExperienceData((data) => ({ ...data, [`experience${index + 1}`]: { ...data[`experience${index + 1}`], [name]: value } }));
    } else {
      setExperienceData({ [`experience${index + 1}`]: { [name]: value } });
    }
  };

  // Update the parent state whenever experienceData changes
  useEffect(() => {
    if (experienceData) {
      setWorkExperienceData(({ experience: experienceData }));
    }
  }, [experienceData, setWorkExperienceData]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <h2>Work Experience</h2><hr></hr>
      </Grid>
      {experiences.map((experience, index) => (
        <Grid item xs={12} key={index}>
          <h3>Experience {index + 1}</h3><br></br>
          <Grid container spacing={2}>
            <Grid item xs={isMobile ? 12 : isTablet ? 6 : 5}>
              <TextField label="Job Title" name="jobTitle" onChange={handleChange(index)}
              value={experienceData?.[`experience${index + 1}`]?.jobTitle || ''} 
              variant="outlined" required fullWidth />
            </Grid>
            <Grid item xs={isMobile ? 12 : isTablet ? 6 : 5}>
              <TextField label="Organization Name" name="orgName" onChange={handleChange(index)}
              value={experienceData?.[`experience${index + 1}`]?.orgName || ''} 
               variant="outlined" required fullWidth />
            </Grid>
            <Grid item xs={isMobile ? 12 : isTablet ? 6 : 5}>
              <TextField label="Start Year" name="startYear" onChange={handleChange(index)}
              value={experienceData?.[`experience${index + 1}`]?.startYear || ''} 
               variant="outlined" required fullWidth />
            </Grid>
            <Grid item xs={isMobile ? 12 : isTablet ? 6 : 5}>
              <TextField label="End Year" name="endYear" onChange={handleChange(index)}
              value={experienceData?.[`experience${index + 1}`]?.endYear || ''} 
               variant="outlined" required fullWidth />
            </Grid>
          </Grid>
        </Grid>
      ))}
      <Grid item xs={12}>
        <Button color="primary" onClick={addExperience}>Add More</Button>
        {experiences.length > 1 && <Button color="secondary" onClick={removeExperienceFromStateAndStore}>Remove</Button>}
      </Grid>
    </Grid>
  );
}

export default WorkExperience;