const initialState = {
  formData: {},
  profilePhoto: null,
  selectedTemplate: {},
};

export const resetR = (state = initialState, action) => {
  switch (action.type) {
      case 'RESET_FORM_DATA':
        return {
          ...state,
          formData: initialState.formData,
          profilePhoto: null,
          selectedTemplate: initialState.selectedTemplate,
        };
    default:
      return state;
  }
};