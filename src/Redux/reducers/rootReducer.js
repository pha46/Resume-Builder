// Importing combineReducers from redux
import { combineReducers } from 'redux';
// Importing the formReducer
import { formReducer } from './saveFormData';

// Combining all the reducers into a rootReducer
const rootReducer = combineReducers({
  root: formReducer, // Assigning formReducer to 'root' key
})

// Exporting the rootReducer
export default rootReducer;