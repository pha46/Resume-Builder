import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';

function EducationDetails() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.between('xs', 'sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  const [educations, setEducations] = useState([{}]);

  const addEducation = () => {
    setEducations([...educations, {}]);
  };

  const removeEducation = () => {
    setEducations(educations.slice(0, -1));
  };

  return (
    <div>
      <h2>Education Details</h2>
      {educations.map((education, index) => (
        <div key={index}>
          <h3>Education {index + 1}</h3>
          <hr />
          <Grid container spacing={isDesktop ? 2 : 1}>
            <Grid item xs={12}>
              <TextField
                label="Type"
                // required
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={isDesktop ? 6 : 12}>
              <TextField
                label="University/College Name"
                // required
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={isDesktop ? 6 : 12}>
              <TextField
                label="Grade/Score"
                // required
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={isDesktop ? 6 : 12}>
              <TextField
                label="Start Year"
                // required
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={isDesktop ? 6 : 12}>
              <TextField
                label="End Year"
                variant="outlined"
                fullWidth
              />
            </Grid>
          </Grid>
        </div>
      ))}
      <Grid item xs={12}>
        <Button color="primary" onClick={addEducation}>Add More</Button>
        {educations.length > 1 && <Button color="secondary" onClick={removeEducation}>Remove</Button>}
      </Grid>
    </div>
  );
}

export default EducationDetails;