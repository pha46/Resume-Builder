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

function WorkExperience({ setWorkExperienceData}) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.between('xs', 'sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const dispatch = useDispatch();
  const experienceDataFromStore = useSelector((state) => state.root.formData.experience);
  const [experienceData, setExperienceData] = useState(experienceDataFromStore || {});
  const initialExperiences = experienceDataFromStore ? Object.keys(experienceDataFromStore).map((key, index) => index) : [0];
  const [experiences, setExperiences] = useState(initialExperiences);


  const addExperience = () => {
    setExperiences([...experiences, {}]);
  };

  const removeExperienceFromStateAndStore = () => {
    const newExperiences = experiences.slice(0, -1);
    setExperiences(newExperiences);
    setWorkExperienceData(newExperiences);
    dispatch(removeExperience(experiences.length - 1));
  }

  const handleChange = (index) => (event) => {
    const { name, value } = event.target;
    setExperienceData((data) => ({ ...data, [`experience${index + 1}`]: { ...data[`experience${index + 1}`], [name]: value } }));
  };

  useEffect(() => {
    setWorkExperienceData(({ experience: experienceData }));
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
              value={experienceData[`experience${index + 1}`]?.jobTitle || ''} 
              variant="outlined" required fullWidth />
            </Grid>
            <Grid item xs={isMobile ? 12 : isTablet ? 6 : 5}>
              <TextField label="Organization Name" name="orgName" onChange={handleChange(index)}
              value={experienceData[`experience${index + 1}`]?.orgName || ''} 
               variant="outlined" required fullWidth />
            </Grid>
            <Grid item xs={isMobile ? 12 : isTablet ? 6 : 5}>
              <TextField label="Start Year" name="startYear" onChange={handleChange(index)}
              value={experienceData[`experience${index + 1}`]?.startYear || ''} 
               variant="outlined" required fullWidth />
            </Grid>
            <Grid item xs={isMobile ? 12 : isTablet ? 6 : 5}>
              <TextField label="End Year" name="endYear" onChange={handleChange(index)}
              value={experienceData[`experience${index + 1}`]?.endYear || ''} 
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