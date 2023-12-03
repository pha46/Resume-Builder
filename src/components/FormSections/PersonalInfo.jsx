import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import Link from '@mui/material/Link';
import './styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { setProfilePhoto } from '../../Redux/actions/actions';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

// PersonalInfo component for managing personal information
function PersonalInfo({ setPersonalInfo }) {
  
  const dispatch = useDispatch();
  const profilePhoto = useSelector((state) => state.root.profilePhoto);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.between('xs', 'sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const values = useSelector((state) => state.root.formData.personalInfo);

  // Using React's useState hook for local state management
  const [localData, setLocalData] = useState(values);
  const [errors, setErrors] = useState({});

  // Function to handle file change event
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

  // Function to handle remove photo event
  const handleRemovePhoto = () => {
    dispatch(setProfilePhoto(null));
  };

  // Function to handle change event of input fields
  const handleChange = (event) => {
    const { name, value } = event.target;
  
    let errors = {};
  
    // Email validation
    if (name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        errors.email = 'Please enter a valid email address';
      }
    }
  
    // Mobile validation
    if (name === 'mobile') {
      const mobileRegex = /^[0-9]{10}$/;
      if (!mobileRegex.test(value)) {
        errors.mobile = 'Please enter a valid mobile number';
      }
    }
  
    setErrors(errors);
    setLocalData((data) => ({ ...data, [name]: value }));
  };

  // Using React's useEffect hook to update personal info when localData changes
  useEffect(() => {
    if (localData) {
      setPersonalInfo(({personalInfo: localData, }));
    }
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
        <TextField name="firstName" value={localData?.firstName || ''} onChange={handleChange} label="First Name" variant="outlined" required fullWidth />
      </Grid>
      <Grid item xs={isMobile ? 12 : isTablet ? 6 : 3}>
        <TextField name="lastName" value={localData?.lastName || ''} onChange={handleChange} label="Last Name" variant="outlined" required fullWidth />
      </Grid>
      <Grid item xs={isMobile ? 12 : isTablet ? 6 : 3}>
        <TextField 
          name="email" 
          value={localData?.email || ''} 
          onChange={handleChange} 
          label="Email" 
          variant="outlined" 
          required 
          fullWidth 
          error={!!errors.email} 
          helperText={errors.email}
        />
      </Grid>
      <Grid item xs={isMobile ? 12 : isTablet ? 6 : 3}>
        <TextField 
          name="mobile" 
          value={localData?.mobile || ''} 
          onChange={handleChange} 
          label="Mobile" 
          variant="outlined" 
          required 
          fullWidth 
          error={!!errors.mobile} 
          helperText={errors.mobile}
        />
      </Grid>

      <Grid item xs={12}>
        <TextField name="address" value={localData?.address || ''} onChange={handleChange} label="Address" variant="outlined" required fullWidth />
      </Grid>

      <Grid item xs={isMobile ? 12 : isTablet ? 6 : 4}>
        <TextField name="city" value={localData?.city || ''} onChange={handleChange} label="City" variant="outlined" fullWidth />
      </Grid>
      <Grid item xs={isMobile ? 12 : isTablet ? 6 : 4}>
        <TextField name="state" value={localData?.state || ''} onChange={handleChange} label="State" variant="outlined" fullWidth />
      </Grid>
      <Grid item xs={isMobile ? 12 : isTablet ? 6 : 4}>
        <TextField name="postalCode" value={localData?.postalCode || ''} onChange={handleChange} label="Postal Code" variant="outlined" fullWidth />
      </Grid>

      <Grid item xs={12}>
        <TextField name="overview" value={localData?.overview || ''} onChange={handleChange} label="Overview" variant="outlined" multiline rows={6} required fullWidth />
      </Grid>
    </Grid>
    </>
  );
}

export default React.memo(PersonalInfo); // Using React.memo to prevent unnecessary re-renders