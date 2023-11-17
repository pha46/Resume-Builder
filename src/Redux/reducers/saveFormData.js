import { SELECT_TEMPLATE } from '../actions/actions';

const initialState = {
  formData: {},
  profilePhoto: null,
  selectedTemplateID: {},
};

export const formReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'SAVE_FORM_DATA':
    return {
      ...state,
      formData: {
        ...state.formData,
        ...action.payload
        },
      };
    case 'SET_PROFILE_PHOTO':
      return {
        ...state,
        profilePhoto: action.payload,
      };
    case SELECT_TEMPLATE:
      return {
        ...state,
        selectedTemplateID: action.payload,
      };

    case 'REMOVE_EXPERIENCE':
          const newState1 = { ...state };
          delete newState1.formData.experience[`experience${action.payload + 1}`];
          return newState1;

    case 'REMOVE_EDUCATION':
        const newState2 = { ...state };
        delete newState2.formData.education[`education${action.payload + 1}`];
        return newState2;
    
        case 'REMOVE_SKILLS':
          if (state && state.skills && state.skills[action.payload]) {
            const newState = { ...state };
            delete newState.skills[action.payload];
            return newState;
          }
          return state;

    case 'RESET_FORM_DATA':
      return {
        ...state,
        formData: initialState.formData,
        profilePhoto: initialState.profilePhoto,
        selectedTemplate: initialState.selectedTemplate,
      };
    default:
      return state;
  }
};