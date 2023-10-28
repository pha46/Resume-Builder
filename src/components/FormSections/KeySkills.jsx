import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

function KeySkills() {
  const [skills, setSkills] = useState(Array(4).fill({}));

  const addSkill = () => {
    setSkills([...skills, {}]);
  };

  const removeSkill = () => {
    setSkills(skills.slice(0, -1));
  };

  return (
    <div>
      <h2>Key Skills</h2>
      <Grid container spacing={2}>
        {skills.map((skill, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <TextField
              label={`Skill ${index + 1}`}
            //   required
              variant="outlined"
              fullWidth
            />
          </Grid>
        ))}
        <Grid item xs={12}>
          <Button color="primary" onClick={addSkill}>Add More</Button>
          {skills.length > 4 && <Button color="secondary" onClick={removeSkill}>Remove</Button>}
        </Grid>
      </Grid>
    </div>
  );
}

export default KeySkills;