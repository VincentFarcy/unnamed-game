// == Import : local
import { GAME_DATA_SUCCESS } from '../actions/gamePlay';

// == State
const initialState = {
};

// == Reducer
const gameplay = (state = initialState, action = {}) => {
  switch (action.type) {
    case GAME_DATA_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

// == Export
export default gameplay;
