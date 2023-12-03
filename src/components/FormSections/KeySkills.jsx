import React, { useState, useEffect } from 'react';
import './styles.css';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux';
import { removeSkills } from '../../Redux/actions/actions';

// This component is used to handle the key skills of the user
function KeySkills({ setKeySkillsData }) {
  // Fetching the skills data from the redux store
  const skillsDataFromStore = useSelector((state) => state.root.formData.skills);

  // Initial skills array
  const initialSkills = skillsDataFromStore ? Object.values(skillsDataFromStore) : [""];
  const dispatch = useDispatch();

  // Local state to manage the skills
  const [skills, setSkills] = useState(initialSkills);

  // Function to add a new skill field
  const addSkill = () => {
    setSkills([...skills, ""]);
  };

  // Function to remove the last skill field
  const removeSkillsFromStateAndStore = () => {
    const newSkills = skills.slice(0, -1);
    setSkills(newSkills);
    dispatch(removeSkills(skills.length - 1)); // Dispatching the removeSkills action
  };

  // Function to handle the change in the input fields
  const handleSkillChange = (event, index) => {
    const newSkills = [...skills];
    newSkills[index] = event.target.value;
    setSkills(newSkills);
    setKeySkillsData((prevState) => ({ ...prevState, skills: newSkills })); // Updating the parent state
  };

  // useEffect to update the parent state whenever the skills state changes
  useEffect(() => {
    setKeySkillsData(({skills: skills }));
  }, [skills, setKeySkillsData]);

  return (
    <div>
      <h2>Key Skills</h2><hr></hr><br></br>
      <Grid container spacing={2}>
        {skills.map((skill, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <TextField
              label={`Skill ${index + 1}`}
              variant="outlined"
              value={skill}
              onChange={(event) => handleSkillChange(event, index)}
              required
              fullWidth
            />
          </Grid>
        ))}
        <Grid item xs={12}>
          {/* Buttons to add and remove skill fields */}
          <Button color="primary" onClick={addSkill}>Add More</Button>
          {skills.length > 1 && <Button color="secondary" onClick={removeSkillsFromStateAndStore}>Remove</Button>}
        </Grid>
      </Grid>
    </div>
  );
}

export default KeySkills;