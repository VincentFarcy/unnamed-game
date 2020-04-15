// == Import : local
import { GAME_DATA_SUCCESS, GAME_DATA_ERROR } from '../actions/gamePlay';

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
    case GAME_DATA_ERROR:
      return {
        ...state,
      };
    default:
      return state;
  }
};


// == Export
export default gameplay;
