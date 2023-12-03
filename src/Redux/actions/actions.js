// actions.js

// Action creator for selecting a template
export const selectTemplate = id => ({
  type: 'SELECT_TEMPLATE', // Action type
  payload: id, // Payload is the id of the selected template
});

// Action creator for setting a profile photo
export const setProfilePhoto = (photo) => ({
  type: 'SET_PROFILE_PHOTO', // Action type
  payload: photo, // Payload is the photo object
});

// Action creator for saving form data
export const saveFormData = (data) => ({
  type: 'SAVE_FORM_DATA', // Action type
  payload: data, // Payload is the data object containing form data
});

// Action creator for removing an experience entry
export const removeExperience  = (index) => {
  return {
    type: 'REMOVE_EXPERIENCE', // Action type
    payload: index, // Payload is the index of the experience entry to be removed
  };
};

// Action creator for removing an education entry
export const removeEducation = (index) => {
  return {
    type: 'REMOVE_EDUCATION', // Action type
    payload: index, // Payload is the index of the education entry to be removed
  };
};

// Action creator for resetting form data
export const resetFormData = () => ({
  type: 'RESET_FORM_DATA', // Action type
  // No payload is required for this action
});

// Action creator for removing a skill
export const removeSkills = (index) => {
  return {
    type: 'REMOVE_SKILLS', // Action type
    payload: index, // Payload is the index of the skill to be removed
  };
};