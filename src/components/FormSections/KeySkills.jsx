import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux';
import { removeSkills } from '../../Redux/actions/actions';

function KeySkills({ setFormData }) {
  const skillsDataFromStore = useSelector((state) => state.root.formData.skills);
  const initialSkills = skillsDataFromStore ? Object.values(skillsDataFromStore) : [""];
  const dispatch = useDispatch();
  const [skills, setSkills] = useState(initialSkills);

  const addSkill = () => {
    setSkills([...skills, ""]);
  };

  const removeSkillsFromStateAndStore = () => {
    const newSkills = skills.slice(0, -1);
    setSkills(newSkills);
    dispatch(removeSkills(skills.length - 1));
  };

  const handleSkillChange = (event, index) => {
    const newSkills = [...skills];
    newSkills[index] = event.target.value;
    setSkills(newSkills);
    setFormData((prevState) => ({ ...prevState, skills: newSkills }));
  };

  useEffect(() => {
    setFormData((prevState) => ({ ...prevState, skills: skills }));
  }, [skills, setFormData]);

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
              fullWidth
            />
          </Grid>
        ))}
        <Grid item xs={12}>
          <Button color="primary" onClick={addSkill}>Add More</Button>
          {skills.length > 2 && <Button color="secondary" onClick={removeSkillsFromStateAndStore}>Remove</Button>}
        </Grid>
      </Grid>
    </div>
  );
}

export default KeySkills;