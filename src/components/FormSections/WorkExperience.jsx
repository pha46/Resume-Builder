import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

function WorkExperience() {
  const [experiences, setExperiences] = useState([0]);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.between('xs', 'sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  const addExperience = () => {
    setExperiences([...experiences, experiences.length]);
  };

  const removeExperience = () => {
    setExperiences(experiences.slice(0, -1));
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <h2>Work Experience</h2>
      </Grid>
      {experiences.map((experience, index) => (
        <Grid item xs={12} key={index}>
          <h3>Experience {index + 1}</h3><hr></hr>
          <Grid container spacing={2}>
            <Grid item xs={isMobile ? 12 : isTablet ? 6 : 5}>
              <TextField label="Job Title" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={isMobile ? 12 : isTablet ? 6 : 5}>
              <TextField label="Organization Name" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={isMobile ? 12 : isTablet ? 6 : 5}>
              <TextField label="Start Year" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={isMobile ? 12 : isTablet ? 6 : 5}>
              <TextField label="End Year" variant="outlined" fullWidth />
            </Grid>
          </Grid>
        </Grid>
      ))}
      <Grid item xs={12}>
        <Button color="primary" onClick={addExperience}>Add More</Button>
        {experiences.length > 1 && <Button color="secondary" onClick={removeExperience}>Remove</Button>}
      </Grid>
    </Grid>
  );
}

export default WorkExperience;