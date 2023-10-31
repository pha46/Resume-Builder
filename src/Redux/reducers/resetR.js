const initialState = {
  formData: {},
  profilePhoto: null,
};

export const resetR = (state = initialState, action) => {
  switch (action.type) {
      case 'RESET_FORM_DATA':
        return {
          ...state,
          formData: initialState.formData,
          profilePhoto: null,
        };
    default:
      return state;
  }
};