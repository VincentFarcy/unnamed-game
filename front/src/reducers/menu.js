// == Import : local
import { TOGGLE_MENU } from '../actions/menu';

// == State
const initialState = {
  isExpanded: false,
};

// == Reducer
const menu = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_MENU:
      return {
        isExpanded: action.toggle,
      };
    default:
      return state;
  }
};

// == Export
export default menu;
