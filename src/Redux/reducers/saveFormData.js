const initialState = {
    formData: {},
  };

  export const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SAVE_FORM_DATA':
        return {
          ...state,
          formData: action.payload,
        };
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