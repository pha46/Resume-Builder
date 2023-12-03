// Importing necessary modules from redux and redux-thunk
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
// Importing the root reducer
import rootReducer from '../reducers/rootReducer';

// Setting up Redux DevTools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Creating the Redux store with the root reducer, applying the thunk middleware
// and setting up the Redux DevTools
const store = createStore(
  rootReducer, // Root reducer to handle state changes
  composeEnhancers(applyMiddleware(thunk)) // Applying thunk middleware and setting up Redux DevTools
);

// Exporting the store to be used in the application
export default store;