// == Import : local
import {
  RESET_GAME, CHANGE_GAME_STATUS,
  GAME_DATA_SUCCESS, GAME_DATA_ERROR,
  INCREMENT_CREATE_CHARACTER, DECREMENT_CREATE_CHARACTER, 
  FIND_OPPONENT
}
  from '../actions/gamePlay';
import roll from '../func';

import Force from 'src/assets/images/strength.png';
import Agilité from 'src/assets/images/agility.png';
import Constitution from 'src/assets/images/endurance.png';
import Volonté from 'src/assets/images/will.png';
import Intelligence from 'src/assets/images/intelligence.png';

// == State

const initialState = {
  gameOn: false,
  isLoading: false,
  loadingErrMessage: '',
  hasError: false,
  abilities: [
    {
      name: 'Force',
      value: 1,
      image: Force,
      description: 'Affecte les dégâts',
    },
    {
      name: 'Agilité',
      value: 1,
      image: Agilité,
      description: 'Affecte le toucher, l\'initiative, l\'esquive',
    },
    {
      name: 'Constitution',
      value: 1,
      image: Constitution,
      description: 'Affecte les PV',
    },
    {
      name: 'Volonté',
      value: 1,
      image: Volonté,
      description: 'Affecte les PV, la guérison, permet de réaliser certaines actions',
    },
    {
      name: 'Intelligence',
      value: 1,
      image: Intelligence,
      description: 'Affecte le toucher, l\'esquive, la guérison, permet de réaliser certaines actions',
    },
  ],
  pool: 10,
  phpTimer: 1,
  xp: 0,
  jsx: 0,
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
    case RESET_GAME:
      return {
        ...state,
        loadingErrMessage: '',
        hasError: false,
      };
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
    case GAME_DATA_ERROR:
      return {
        ...state,
        gameOn: false,
        isLoading: false,
        loadingErrMessage: 'Une erreur s\'est produite, merci de réessayer ultérieurement ou de cliquer à nouveau sur Jouer.',
      };
    case INCREMENT_CREATE_CHARACTER:
      findUpAbility(state, action.payload);

      // if (state.pool > 0) {
      //   console.log("up");
      return {
        ...state,
        playerHp: ((state.abilities[3].value / 2) + (state.abilities[2].value)) * 10,
        baseToHit: ((state.abilities[1].value) + Math.floor((state.abilities[4].value / 3))),
        baseAvoid: ((state.abilities[1].value) + Math.floor((state.abilities[4].value / 2))),
        baseDamage: state.abilities[0].value,
        baseInitiative: state.abilities[1].value,
        healing:  Math.floor(((state.abilities[3].value / 2) + (state.abilities[4].value / 2))),
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
        playerHp: ((state.abilities[3].value / 2) + (state.abilities[2].value)) * 10,
        baseToHit: ((state.abilities[1].value) + Math.floor((state.abilities[4].value / 3))),
        baseAvoid: ((state.abilities[1].value) + Math.floor((state.abilities[4].value / 2))),
        baseDamage: state.abilities[0].value,
        baseInitiative: state.abilities[1].value,
        healing: Math.floor(((state.abilities[3].value / 2) + (state.abilities[4].value / 2))),
      };
    // }
    // else
    //   console.log("min");
    // return {
    //   ...state,
    // };
    // case FIND_OPPONENT:
    //   findOpponentForCombat(state, action.payload)
    //   console.log(action.payload);
    //   return {
    //     ...state,
    //     tata: "yoyo",
    //   };

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
      state.pool--;
    }
  })
);

export const findDownAbility = (state, abilityName) => (
  state.abilities.map((ability) => {
    if (ability.name === abilityName && ability.value > 1 && state.pool < 10) {
      ability.value--;
      state.pool++;
    }
  })
);

export const findOpponentForCombat = (state) => {
  // console.log(state);

  const opponents = state.gameplay.opponents;
  const opponentsTable = state.gameplay.chapters[0].randomFightContests;
  // console.log(opponentsTable, opponents);

  const findOpponentId = roll(1, 100);
  const opponentTableId = opponentsTable.find(
    (opponent) => (findOpponentId > opponent.rollFrom && findOpponentId < opponent.rollTo));
  // console.log(opponentTableId);

  const opponentId = opponentTableId.opponent.id;
  // soucis parfois cela plante sur la l139
  // console.log(opponentId);

  const opponent = opponents.find(
    (opponent) => (opponentId === opponent.id));
  // console.log(opponent);

  return opponent;
};
