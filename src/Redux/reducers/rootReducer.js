// rootReducer.js
import { combineReducers } from 'redux';
import { photoReducer } from './photoReducer';
import { formReducer } from './saveFormData';
import { resetR } from './resetR';
import { templateR } from './template';

// This is Root Reducer Which Exports All reducer with one Defined Variable Named "ROOT REDUCER"
const rootReducer = combineReducers({
  photo: photoReducer,
  formR: formReducer,
  resetRR: resetR,
  templateRE: templateR,
})

export default rootReducer;