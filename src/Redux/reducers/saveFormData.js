const initialState = {
  formData: {
    personalInfo: null,
    experience: {},
    education: {},
    skills: [],
  },
  profilePhoto: null,
  selectedTemplateID: null,
};

export const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SELECT_TEMPLATE':
      return {
        ...state,
        selectedTemplateID: action.payload,
      };

    case 'SET_PROFILE_PHOTO':
      return {
        ...state,
        profilePhoto: action.payload,
      };

    case 'SAVE_FORM_DATA':
      return {
        ...state,
        formData: {
          ...state.formData,
          ...action.payload
        }
      };

    case 'RESET_FORM_DATA':
      return {
        ...state,
        formData: initialState.formData,
        profilePhoto: initialState.profilePhoto,
        selectedTemplate: initialState.selectedTemplate,
      };

    case 'REMOVE_EXPERIENCE':
      if (state.formData.experience) {
        const newState1 = { ...state };
        delete newState1.formData.experience[`experience${action.payload + 1}`];
        return newState1;
      }
      return state;
  
      case 'REMOVE_EDUCATION':
        if (state.formData.education) {
          const newState2 = { ...state };
          delete newState2.formData.education[`education${action.payload + 1}`];
          return newState2;
        }
        return state
    
      case 'REMOVE_SKILLS':
        if (state.formData.skills && state.formData.skills[action.payload]) {
          const newState = { ...state };
          newState.formData.skills = newState.formData.skills.filter((_, index) => index !== action.payload);
          return newState;
        }
        return state;

    default:
      return state;
  }
};