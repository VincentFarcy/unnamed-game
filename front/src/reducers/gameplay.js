// == Import : local
import {
  RESET_GAME, CHANGE_GAME_STATUS,
  GAME_DATA_SUCCESS, GAME_DATA_ERROR,
  INCREMENT_CREATE_CHARACTER, DECREMENT_CREATE_CHARACTER,
  FIND_OPPONENT, FIND_SEQUENCE,
  RUN_AWAY
}
  from '../actions/gamePlay';
import { rollDice } from '../func';

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
  phpTimer: 2,
  xp: 0,
  jsx: 0,
  sequenceToTell: '',
  player: {
    // Total player's health point
    playerTotalHP: 0,
    // player current health point which is initialized at the same time as playerTotalHP
    playerCurrentHP: 0,
  },
  combat: {
    combatStatus: false,
    // currentOponent is empty until OpponentCombatInfo is rendered
    currentOpponent: {
      opponentCurrentHP: 0,
    },
  },
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
      return {
        ...state,
        player: {
          ...state.player,
          playerTotalHP: ((state.abilities[3].value / 2) + (state.abilities[2].value)) * 10,
          playerCurrentHP: ((state.abilities[3].value / 2) + (state.abilities[2].value)) * 10,
          baseTouch: ((state.abilities[1].value) + Math.floor((state.abilities[4].value / 3))),
          dodge: ((state.abilities[1].value) + Math.floor((state.abilities[4].value / 2))),
          baseDamage: state.abilities[0].value,
          baseSpeed: state.abilities[1].value,
          baseHealing: Math.floor(((state.abilities[3].value / 2) + (state.abilities[4].value / 2))),
        },
      };
    case DECREMENT_CREATE_CHARACTER:
      findDownAbility(state, action.payload);
      return {
        ...state,
        player: {
          ...state.player,
          playerTotalHP: ((state.abilities[3].value / 2) + (state.abilities[2].value)) * 10,
          playerCurrentHP: ((state.abilities[3].value / 2) + (state.abilities[2].value)) * 10,
          baseTouch: ((state.abilities[1].value) + Math.floor((state.abilities[4].value / 3))),
          dodge: ((state.abilities[1].value) + Math.floor((state.abilities[4].value / 2))),
          baseDamage: state.abilities[0].value,
          baseSpeed: state.abilities[1].value,
          baseHealing: Math.floor(((state.abilities[3].value / 2) + (state.abilities[4].value / 2))),
        },
      };
    case FIND_OPPONENT:
      const opponent = findOpponentForCombat(state);
      return {
        ...state,
        combat: {
          ...state.combat,
          currentOpponent: {
            opponentCurrentHP: opponent.health,
            ...opponent
          }
        }
      };
    case FIND_SEQUENCE:
      const sequence = findInfoForSequence(state);
      return {
        ...state,
        sequenceToTell: sequence,
      }

    case RUN_AWAY:
      return {
        ...state,
        phpTimer: state.phpTimer + 1,
      };
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

  const opponents = state.opponents;
  const opponentsTable = state.chapters[0].randomFightContests;
  // console.log(opponentsTable, opponents);

  const findOpponentId = rollDice(1, 100);
  console.log(findOpponentId);

  const opponentTableId = opponentsTable.find(
    (opponent) => (findOpponentId >= opponent.rollFrom && findOpponentId <= opponent.rollTo));
  // console.log(opponentTableId);

  const opponentId = opponentTableId.opponent.id;
  // console.log(opponentId);

  const opponent = opponents.find(
    (opponent) => (opponentId === opponent.id));
  // console.log(opponent);

  return opponent;
};

export const findInfoForSequence = (state) => {

  const sequenceList = state.chapters[0].sequences;
  const timing = state.phpTimer;
  console.log(sequenceList, timing);

  const sequenceTable = sequenceList.find(
    (sequence) => (timing == sequence.id));
  console.log(sequenceTable);

  return sequenceTable;
};
