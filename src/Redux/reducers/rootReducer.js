// rootReducer.js
import { combineReducers } from 'redux';
// import { photoReducer } from './photoReducer';
import { formReducer } from './saveFormData';
// import { resetReducer } from './resetReducer';
// import { templateReducer } from './template';

// This is Root Reducer Which Exports All reducer with one Defined Variable Named "ROOT REDUCER"
const rootReducer = combineReducers({
  // photo: photoReducer,
  formData: formReducer,
  // resetR: resetReducer,
  // templateID: templateReducer,
})

export default rootReducer;