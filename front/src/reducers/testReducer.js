// == Import : local
import { TEST_MIDDLEWARE } from '../actions';

// == State
const initialState = {
  name: 'initial state',
};

// == Reducer
const demo = (state = initialState, action = {}) => {
  switch (action.type) {
    case TEST_MIDDLEWARE:
      return {
        propriety: 'after action propriety',
      };
    default:
      return state;
  }
};

// == Export
export default demo;
