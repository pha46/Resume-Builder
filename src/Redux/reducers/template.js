import { SELECT_TEMPLATE } from '../actions/actions';

const initialState = {
  selectedTemplate: {},
};

export const templateR = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_TEMPLATE:
      return {
        ...state,
        selectedTemplate: action.payload,
      };
    default:
      return state;
  }
};