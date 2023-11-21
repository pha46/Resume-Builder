// actions.js
export const selectTemplate = id => ({
  type: 'SELECT_TEMPLATE',
  payload: id,
});

export const setProfilePhoto = (photo) => ({
    type: 'SET_PROFILE_PHOTO',
    payload: photo,
  });

export const saveFormData = (data) => ({
  type: 'SAVE_FORM_DATA',
  payload: data,
});

export const removeExperience  = (index) => {
  return {
    type: 'REMOVE_EXPERIENCE',
    payload: index,
  };
};

export const removeEducation = (index) => {
  return {
    type: 'REMOVE_EDUCATION',
    payload: index,
  };
};

export const resetFormData = () => ({
  type: 'RESET_FORM_DATA',
});

export const removeSkills = (index) => {
  return {
    type: 'REMOVE_SKILLS',
    payload: index,
  };
};