import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
// import Link from '@mui/material/Link';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';

function EducationDetails({ setFormData}) {
  const theme = useTheme();
  // const isMobile = useMediaQuery(theme.breakpoints.between('xs', 'sm'));
  // const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const [educationData, setEducationData] = useState({});
  const [educations, setEducations] = useState([{}]);

  const addEducation = () => {
    setEducations([...educations, {}]);
  };

  const removeEducation = () => {
    const newEducations = educations.slice(0, -1);
    setEducations(newEducations);
    setFormData(newEducations);
  }

  const handleChange = (index) => (event) => {
    const { name, value } = event.target;
    setEducationData((data) => ({ ...data, [`education${index + 1}`]: { ...data[`education${index + 1}`], [name]: value } }));
  };

  useEffect(() => {
    setFormData((prevState) => ({ ...prevState, education: educationData }));
  }, [educationData, setFormData]);

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
              name="type"
              onChange={handleChange(index)}
              variant="outlined"
              fullWidth
            />
            </Grid>
            <Grid item xs={isDesktop ? 6 : 12}>
            <TextField
              label="university_collegeName"
              name="university_collegeName"
              onChange={handleChange(index)}
              variant="outlined"
              fullWidth
            />
            </Grid>
            <Grid item xs={isDesktop ? 6 : 12}>
            <TextField
              label="Grade_Score"
              name="Grade_Score"
              onChange={handleChange(index)}
              variant="outlined"
              fullWidth
            />
            </Grid>
            <Grid item xs={isDesktop ? 6 : 12}>
            <TextField
              label="Start_Year"
              name="Start_Year"
              onChange={handleChange(index)}
              variant="outlined"
              fullWidth
            />
            </Grid>
            <Grid item xs={isDesktop ? 6 : 12}>
            <TextField
              label="End_Year"
              name="End_Year"
              onChange={handleChange(index)}
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