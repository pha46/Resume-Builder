import { combineReducers } from 'redux';
import { formReducer } from './saveFormData';

const rootReducer = combineReducers({
  root: formReducer,
})

export default rootReducer;