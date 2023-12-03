// Initial state for the reducer
const initialState = {
  formData: {
    personalInfo: null,
    experience: null,
    education: null,
    skills: null,
  },
  profilePhoto: null,
  selectedTemplateID: null,
};

// Reducer function for handling form-related actions
export const formReducer = (state = initialState, action) => {
  switch (action.type) {
    // Handle action for selecting a template
    case 'SELECT_TEMPLATE':
      return {
        ...state, // Spread the current state
        selectedTemplateID: action.payload, // Update selectedTemplateID with the payload
      };

    // Handle action for setting a profile photo
    case 'SET_PROFILE_PHOTO':
      return {
        ...state, // Spread the current state
        profilePhoto: action.payload, // Update profilePhoto with the payload
      };

    // Handle action for saving form data
    case 'SAVE_FORM_DATA':
      return {
        ...state, // Spread the current state
        formData: {
          ...state.formData, // Spread the current formData
          personalInfo: {
            ...state.formData.personalInfo, // Spread the current personalInfo
            ...action.payload.personalInfo // Update personalInfo with the payload
          },
          experience: action.payload.experience
            ? {
              ...state.formData.experience, // Spread the current experience
              ...action.payload.experience // Update experience with the payload
            }
            : state.formData.experience,
          education: action.payload.education
            ? {
              ...state.formData.education, // Spread the current education
              ...action.payload.education // Update education with the payload
            }
            : state.formData.education,
          skills: action.payload.skills ? action.payload.skills : state.formData.skills
        }
      };

    // Handle action for resetting form data
    case 'RESET_FORM_DATA':
      return {
        ...state, // Spread the current state
        formData: initialState.formData, // Reset formData to initial state
        profilePhoto: initialState.profilePhoto, // Reset profilePhoto to initial state
        selectedTemplate: initialState.selectedTemplate, // Reset selectedTemplate to initial state
      };

    // Handle action for removing an experience entry
    case 'REMOVE_EXPERIENCE':
      if (state.formData.experience) {
        const newState1 = { ...state }; // Create a copy of the current state
        delete newState1.formData.experience[`experience${action.payload + 1}`]; // Remove the specified experience entry
        return newState1; // Return the updated state
      }
      return state; // If no experience entry to remove, return the current state

    // Handle action for removing an education entry
    case 'REMOVE_EDUCATION':
      if (state.formData.education) {
        const newState2 = { ...state }; // Create a copy of the current state
        delete newState2.formData.education[`education${action.payload + 1}`]; // Remove the specified education entry
        return newState2; // Return the updated state
      }
      return state; // If no education entry to remove, return the current state

    // Handle action for removing a skill
    case 'REMOVE_SKILLS':
      if (state.formData.skills && state.formData.skills[action.payload]) {
        const newState = { ...state }; // Create a copy of the current state
        newState.formData.skills = newState.formData.skills.filter((_, index) => index !== action.payload); // Remove the specified skill
        return newState; // Return the updated state
      }
      return state; // If no skill to remove, return the current state

    // Default case: if no matching action type, return the current state
    default:
      return state;
  }
};