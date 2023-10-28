// reducer.js
const initialState = {
    profilePhoto: null,
  };
  
  export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_PROFILE_PHOTO':
        return {
          ...state,
          profilePhoto: action.payload,
        };
      default:
        return state;
    }
  };