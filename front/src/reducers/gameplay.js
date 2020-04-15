// == Import : local
import { GAME_DATA_SUCCESS, INCREMENT_CREATE_CHARACTER, DECREMENT_CREATE_CHARACTER } from '../actions/gamePlay';

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
        player: {
          Force: 1,
          Agilite: 1,
          Constitution: 1,
          Volonté: 1,
          Intelligence: 1,  
        }
      };
      case INCREMENT_CREATE_CHARACTER:
        return {
          ...state,
          value: state.value + 1,
        };
      case DECREMENT_CREATE_CHARACTER:
        return {
          ...state,
          value: state.value - 1,
        };  
    default:
      return state;
  }
};

// == Export
export default gameplay;
