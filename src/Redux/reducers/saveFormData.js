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