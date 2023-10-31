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

export const SELECT_TEMPLATE = 'SELECT_TEMPLATE';

export const selectTemplate = id => ({
  type: SELECT_TEMPLATE,
  payload: id,
});