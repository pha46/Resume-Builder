import React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import Link from '@mui/material/Link';
import './PersonalInfo.css';
import { useDispatch, useSelector } from 'react-redux';
import { setProfilePhoto } from '../../Redux/actions/action';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

function PersonalInfo() {
  
  const dispatch = useDispatch();
  const profilePhoto = useSelector((state) => state.profilePhoto);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.between('xs', 'sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        dispatch(setProfilePhoto(reader.result));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemovePhoto = () => {
    dispatch(setProfilePhoto(null));
  };
  
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <h2>Personal Details</h2>
      </Grid>
      <Grid item xs={12} container alignItems="center" spacing={2}>
        <Grid item>
          <Avatar alt="Profile Photo" src={profilePhoto} />
        </Grid>
        <Grid item>
          {!profilePhoto && <Link component="button" variant="body2" onClick={() => document.getElementById('fileInput').click()}>Add Photo</Link>}
          {profilePhoto && <Link component="button" variant="body2" onClick={handleRemovePhoto}>Remove Photo</Link>}
          <input id="fileInput" type="file" style={{ display: 'none' }} onChange={handleFileChange} />
        </Grid>
      </Grid>

      <Grid item xs={isMobile ? 12 : isTablet ? 6 : 3}>
        <TextField label="First Name" variant="outlined" fullWidth />
      </Grid>
      <Grid item xs={isMobile ? 12 : isTablet ? 6 : 3}>
        <TextField label="Last Name" variant="outlined" fullWidth />
      </Grid>
      <Grid item xs={isMobile ? 12 : isTablet ? 6 : 3}>
        <TextField label="Email" variant="outlined" fullWidth />
      </Grid>
      <Grid item xs={isMobile ? 12 : isTablet ? 6 : 3}>
        <TextField label="Mobile" variant="outlined" fullWidth />
      </Grid>

      <Grid item xs={12}>
        <TextField label="Address" variant="outlined" fullWidth />
      </Grid>

      <Grid item xs={isMobile ? 12 : isTablet ? 6 : 4}>
        <TextField label="City" variant="outlined" fullWidth />
      </Grid>
      <Grid item xs={isMobile ? 12 : isTablet ? 6 : 4}>
        <TextField label="State" variant="outlined" fullWidth />
      </Grid>
      <Grid item xs={isMobile ? 12 : isTablet ? 6 : 4}>
        <TextField label="Postal Code" variant="outlined" fullWidth />
      </Grid>

      <Grid item xs={12}>
        <TextField label="Overview" variant="outlined" multiline rows={6} fullWidth />
      </Grid>
    </Grid>
  );
}

export default PersonalInfo;