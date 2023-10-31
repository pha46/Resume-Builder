// photoReducer.js
const initialState = {
    profilePhoto: null,
  };
  
  export const photoReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_PROFILE_PHOTO':
        return {
          ...state,
          profilePhoto: action.payload,
        };
      case 'RESET_FORM_DATA':
        return {
          ...state,
          profilePhoto: null,
        };
      default:
        return state;
    }
  };