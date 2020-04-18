// == Import : local
import {
  CHANGE_GAME_STATUS,
  GAME_DATA_SUCCESS, GAME_DATA_ERROR,
  INCREMENT_CREATE_CHARACTER, DECREMENT_CREATE_CHARACTER }
  from '../actions/gamePlay';

import Force from 'src/assets/images/strength.png';
import Agilité from 'src/assets/images/agility.png';
import Constitution from 'src/assets/images/endurance.png';
import Volonté from 'src/assets/images/will.png';
import Intelligence from 'src/assets/images/intelligence.png';

// == State

const initialState = {
  gameOn: false,
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
  ],
  pool: 10,
  phpTimer: 1, 
  rewards: [
    {
      content: 'Point(s) d\'expérience',
      value: 3,
    },
    {
      content: 'Points de vie',
      value: 10,
    },
  ],
};

// == Reducer
const gameplay = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_GAME_STATUS:
      return {
        ...state,
        gameOn: true,
      };
    case GAME_DATA_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    case INCREMENT_CREATE_CHARACTER:
      findUpAbility(state, action.payload);

      // if (state.pool > 0) {
      //   console.log("up");
        return {
          ...state,
        };
      // }
      // else
      //   console.log("max");
      // return {
      //   ...state,
      // };
    case DECREMENT_CREATE_CHARACTER:
      findDownAbility(state, action.payload);

      // if (state.pool < 10) {
      //   console.log("down");
        return {
          ...state,
        };
      // }
      // else
      //   console.log("min");
      // return {
      //   ...state,
      // };
    default:
      return state;
  }
};


// == Export
export default gameplay;

// == Selector
export const findUpAbility = (state, abilityName) => (
  state.abilities.map((ability) => {
    if (ability.name === abilityName && ability.value < 5 && state.pool > 0) {
      ability.value++;
      state.pool --;
    }
  })
);

export const findDownAbility = (state, abilityName) => (
  state.abilities.map((ability) => {
    if (ability.name === abilityName && ability.value > 1 && state.pool < 10) {
      ability.value--;
      state.pool ++;
    }
  })
);
