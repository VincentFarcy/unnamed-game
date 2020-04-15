// == Import : local
import { GAME_DATA_SUCCESS, INCREMENT_CREATE_CHARACTER, DECREMENT_CREATE_CHARACTER } from '../actions/gamePlay';

import Force from '../../docs/images/strength.png';
import Agilité from '../../docs/images/agility.png';
import Constitution from '../../docs/images/endurance.png';
import Volonté from '../../docs/images/will.png';
import Intelligence from '../../docs/images/intelligence.png';

// == State
const initialState = {
  abilities: [
    {
      name: 'Force',
      value: 1,
      image: Force,
    },
    {
      name: 'Agilité',
      value: 1,
      image: Agilité,
    },
    {
      name: 'Constitution',
      value: 1,
      image: Constitution,
    },
    {
      name: 'Volonté',
      value: 1,
      image: Volonté,
    },
    {
      name: 'Intelligence',
      value: 1,
      image: Intelligence,
    },
  ]
};

// == Reducer
const gameplay = (state = initialState, action = {}) => {
  switch (action.type) {
    case GAME_DATA_SUCCESS:
      return {
        ...state,
        ...action.payload,
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
