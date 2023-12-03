import React, { useState, useEffect } from 'react';
import './styles.css';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux';
import { removeEducation } from '../../Redux/actions/actions'; 

// This component is used to handle the education details of the user
function EducationDetails({ setEducationfillingData }) {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const dispatch = useDispatch();

  // Fetching the education data from the redux store
  const educationDataFromStore = useSelector((state) => state.root.formData.education);
  
  // Local state to manage the education data
  const [educationData, setEducationData] = useState(educationDataFromStore);

  // Initial educations array
  const initialEducations = educationDataFromStore ? Object.keys(educationDataFromStore).map((key, index) => index) : [0];
  const [educations, setEducations] = useState(initialEducations);

  // Function to add a new education field
  const addEducation = () => {
    setEducations([...educations, {}]);
  };

  // Function to remove the last education field
  const removeEducationFromStateAndStore = () => {
    if (educations.length > 1) {
      const newEducations = educations.slice(0, -1);
      setEducations(newEducations);
      const newEducationData = { ...educationData };
      delete newEducationData[`education${educations.length}`];
      setEducationData(newEducationData); // Update the educationData state
      setEducationfillingData(newEducationData); // Update the parent state
      dispatch(removeEducation(educations.length - 1)); // Dispatching the removeEducation action
    }
  };

  // Function to handle the change in the input fields
  const handleChange = (index) => (event) => {
    const { name, value } = event.target;
    if (educationData) {
      setEducationData((data) => ({ ...data, [`education${index + 1}`]: { ...data[`education${index + 1}`], [name]: value } }));
    } else {
      setEducationData({ [`education${index + 1}`]: { [name]: value } });
    }
  };

  // useEffect to update the parent state whenever the educationData state changes
  useEffect(() => {
    if (educationData) {
      setEducationfillingData(({ education: educationData }));
    }
  }, [educationData, setEducationfillingData]);

  return (
    <div>
      <h2>Education Details</h2><hr />
      {educations.map((education, index) => (
        <div key={index}>
          <h3>Education {index + 1}</h3>
          <br></br>
          <Grid container spacing={isDesktop ? 2 : 1}>
            {/* Input fields for the education details */}
            <Grid item xs={12}>
            <TextField
              label="Type of Education"
              name="type"
              value={educationData?.[`education${index + 1}`]?.type || ''}
              onChange={handleChange(index)}
              variant="outlined"
              required
              fullWidth
            />
            </Grid>
            <Grid item xs={isDesktop ? 6 : 12}>
            <TextField
              label="University / College Name"
              name="university_collegeName"
              value={educationData?.[`education${index + 1}`]?.university_collegeName || ''}
              onChange={handleChange(index)}
              variant="outlined"
               required
              fullWidth
            />
            </Grid>
            <Grid item xs={isDesktop ? 6 : 12}>
            <TextField
              label="Grade / Score"
              name="Grade_Score"
              value={educationData?.[`education${index + 1}`]?.Grade_Score || ''}
              onChange={handleChange(index)}
              variant="outlined"
               required
              fullWidth
            />
            </Grid>
            <Grid item xs={isDesktop ? 6 : 12}>
            <TextField
              label="Start Year"
              name="Start_Year"
              value={educationData?.[`education${index + 1}`]?.Start_Year || ''}
              onChange={handleChange(index)}
              variant="outlined"
               required
              fullWidth
            />
            </Grid>
            <Grid item xs={isDesktop ? 6 : 12}>
            <TextField
              label="End Year"
              name="End_Year"
              value={educationData?.[`education${index + 1}`]?.End_Year || ''}
              onChange={handleChange(index)}
              variant="outlined"
               required
              fullWidth
            />
            </Grid>
          </Grid>
        </div>
      ))}
      <Grid item xs={12}>
        {/* Buttons to add and remove education fields */}
        <Button color="primary" onClick={addEducation}>Add More</Button>
        {educations.length > 1 && <Button color="secondary" onClick={removeEducationFromStateAndStore}>Remove</Button>}
      </Grid>
    </div>
  );
}

export default EducationDetails;