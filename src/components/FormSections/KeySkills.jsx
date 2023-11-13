import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

function KeySkills({ setFormData }) {
  const [skills, setSkills] = useState(Array(4).fill(""));

  const addSkill = () => {
    setSkills([...skills, ""]);
  };

  const removeSkill = () => {
    const newSkills = skills.slice(0, -1);
    setSkills(newSkills);
    setFormData((prevState) => ({ ...prevState, skills: newSkills }));
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
      <h2>Key Skills</h2>
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
          {skills.length > 2 && <Button color="secondary" onClick={removeSkill}>Remove</Button>}
        </Grid>
      </Grid>
    </div>
  );
}

export default KeySkills;