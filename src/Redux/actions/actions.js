// actions.js
export const setProfilePhoto = (photo) => ({
    type: 'SET_PROFILE_PHOTO',
    payload: photo,
  });

export const saveFormData = (data) => ({
  type: 'SAVE_FORM_DATA',
  payload: data,
});

export const resetFormData = () => ({
  type: 'RESET_FORM_DATA',
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

export const removeSkills = (index) => {
  return {
    type: 'REMOVE_SKILLS',
    payload: index,
  };
};

export const SELECT_TEMPLATE = 'SELECT_TEMPLATE';

export const selectTemplate = id => ({
  type: SELECT_TEMPLATE,
  payload: id,
});