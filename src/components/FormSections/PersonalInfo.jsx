import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import Link from '@mui/material/Link';
import './PersonalInfo.css';
import { useDispatch, useSelector } from 'react-redux';
import { setProfilePhoto, } from '../../Redux/actions/actions';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

function PersonalInfo({ setPersonalInfo }) {
  
  const dispatch = useDispatch();
  const profilePhoto = useSelector((state) => state.root.profilePhoto);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.between('xs', 'sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const values = useSelector((state) => state.root.formData.personalInfo);
  const [localData, setLocalData] = useState(values || {});

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

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLocalData((data) => ({ ...data, [name]: value }));
  };

  useEffect(() => {
    setPersonalInfo({ personalInfo: localData });
  }, [localData, setPersonalInfo]);

  return (
    <>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <h2>Personal Details</h2><hr></hr>
      </Grid>
      <Grid item xs={12} container alignItems="center" spacing={2}>
        <Grid item>
          <Avatar alt="Profile Photo" sx={{ width: 100, height: 100 }} src={profilePhoto}/>
        </Grid>
        <Grid item>
          {!profilePhoto && <Link component="button" variant="body2" onClick={() => document.getElementById('fileInput').click()}>Add Photo</Link>}
          {profilePhoto && <Link component="button" variant="body2" onClick={handleRemovePhoto}>Remove Photo</Link>}
          <input id="fileInput" type="file" style={{ display: 'none' }} onChange={handleFileChange} />
        </Grid>
      </Grid>

      <Grid item xs={isMobile ? 12 : isTablet ? 6 : 3}>
        <TextField name="firstName" value={localData.firstName || ''} onChange={handleChange} label="First Name" variant="outlined" fullWidth />
      </Grid>
      <Grid item xs={isMobile ? 12 : isTablet ? 6 : 3}>
        <TextField name="lastName" value={localData.lastName || ''} onChange={handleChange} label="Last Name" variant="outlined" fullWidth />
      </Grid>
      <Grid item xs={isMobile ? 12 : isTablet ? 6 : 3}>
        <TextField name="email" value={localData.email || ''} onChange={handleChange} label="Email" variant="outlined" fullWidth />
      </Grid>
      <Grid item xs={isMobile ? 12 : isTablet ? 6 : 3}>
        <TextField name="mobile" value={localData.mobile || ''} onChange={handleChange} label="Mobile" variant="outlined" fullWidth />
      </Grid>

      <Grid item xs={12}>
        <TextField name="address" value={localData.address || ''} onChange={handleChange} label="Address" variant="outlined" fullWidth />
      </Grid>

      <Grid item xs={isMobile ? 12 : isTablet ? 6 : 4}>
        <TextField name="city" value={localData.city || ''} onChange={handleChange} label="City" variant="outlined" fullWidth />
      </Grid>
      <Grid item xs={isMobile ? 12 : isTablet ? 6 : 4}>
        <TextField name="state" value={localData.state || ''} onChange={handleChange} label="State" variant="outlined" fullWidth />
      </Grid>
      <Grid item xs={isMobile ? 12 : isTablet ? 6 : 4}>
        <TextField name="postalCode" value={localData.postalCode || ''} onChange={handleChange} label="Postal Code" variant="outlined" fullWidth />
      </Grid>

      <Grid item xs={12}>
        <TextField name="overview" value={localData.overview || ''} onChange={handleChange} label="Overview" variant="outlined" multiline rows={6} fullWidth />
      </Grid>
    </Grid>
    </>
  );
}

export default PersonalInfo;