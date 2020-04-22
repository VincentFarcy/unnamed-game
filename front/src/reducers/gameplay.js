// == Import : assets
import Force from 'src/assets/images/strength.png';
import Agilité from 'src/assets/images/agility.png';
import Constitution from 'src/assets/images/endurance.png';
import Volonté from 'src/assets/images/will.png';
import Intelligence from 'src/assets/images/intelligence.png';


// == Import : local
import {
  RESET_GAME,
  CHANGE_GAME_STATUS,
  GAME_DATA_SUCCESS,
  GAME_DATA_ERROR,
  INCREMENT_CREATE_CHARACTER,
  DECREMENT_CREATE_CHARACTER,
  FIND_OPPONENT,
  APPLY_DAMAGE,
  NEXT_SEQUENCE,
  END_FIGHT,
  FIND_SEQUENCE,
  RESTART_NEW_GAME,
  FIND_RANDOM_REWARD,
}
  from '../actions/gamePlay';
import { rollDice } from '../func';


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
  pool: 0,
  phpTimer: 1,
  xp: 0,
  jsx: 0,
  rewards: '',
  sequenceToTell: '',
  player: {
    // Total player's health point
    playerTotalHP: 0,
    // player current health point which is initialized at the same time as playerTotalHP
    playerCurrentHP: 0,
  },
  combat: {
    isCombatOn: true,
    // currentOponent is empty until OpponentCombatInfo is rendered
    currentOpponent: {
      opponentCurrentHP: 0,
    },
  },
  gameParameters: {
    minTouchRoll: 1,
    maxTouchRoll: 6,
    minDamageRoll: 1,
    maxDamageRoll: 4,
    minSpeedRoll: 1,
    maxSpeedRoll: 10,
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
    case RESTART_NEW_GAME:
      console.log('restart');
      return {
        initialState,
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
        pool: action.payload.gameParameters.attribute_points,
        gameParameters: {
          ...state.gameParameters,
          ...action.payload.gameParameters,
        },
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
          baseHealing: Math.floor(
            ((state.abilities[3].value / 2) + (state.abilities[4].value / 2)),
          ),
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
        sequenceToTell: '',
        combat: {
          ...state.combat,
          isCombatOn: true,
          currentOpponent: {
            opponentCurrentHP: opponent.health,
            ...opponent,
          },
        },
      };
    case APPLY_DAMAGE:
      return {
        ...state,
        player: {
          ...state.player,
          playerCurrentHP: action.payload.playerCurrentHP,
        },
        combat: {
          ...state.combat,
          currentOpponent: {
            ...state.combat.currentOpponent,
            opponentCurrentHP: action.payload.opponentCurrentHP,
          },
        },
      };
    case FIND_SEQUENCE:
      const sequence = findInfoForSequence(state);
      return {
        ...state,
        sequenceToTell: sequence,
      };
    case NEXT_SEQUENCE:
      return {
        ...state,
        phpTimer: state.phpTimer + 1,
      };
    case END_FIGHT:
      return {
        ...state,
        combat: {
          ...state.combat,
          isCombatOn: false,
        },
      };
    case FIND_RANDOM_REWARD:
      const randomReward = findRandomReward(state);
      console.log('get random rewards', randomReward);
      return {
        ...state,
        rewards: randomReward,
        jsx: state.jsx + randomReward.jsxRoll,
        xp: state.xp + randomReward.xpRoll,
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
    if (ability.name === abilityName && ability.value < state.gameParameters.attribute_max && state.pool > 0) {
      ability.value++;
      state.pool--;
    }
  })
);

export const findDownAbility = (state, abilityName) => (
  state.abilities.map((ability) => {
    if (ability.name === abilityName && ability.value > state.gameParameters.attribute_min && state.pool <  state.gameParameters.attributePoints) {
      ability.value--;
      state.pool++;
    }
  })
);

export const findOpponentForCombat = (state) => {
  // console.log(state);

  const { opponents } = state;
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

export const findRandomReward = (state) => {
  const rewardTable = state.chapters[0].randomRewards;
  // == Dice Roll to manage the Random Loot Table
  const rollDiceReward = rollDice(1, 100);

  // == Here we find in the database which Loot Table to pick the rewards from
  const rollRange = rewardTable.find(
    (reward) => (rollDiceReward >= reward.rollFrom && rollDiceReward <= reward.rollTo),
  );

  // == Here we determine from the Loot Table above the amount of moneyu (JSX)
  // and Experience (XP) the player wins
  const xpRoll = rollDice(rollRange.minXp, rollRange.maxXp);
  const jsxRoll = rollDice(rollRange.minMoney, rollRange.maxMoney);

  return {
    xpRoll,
    jsxRoll,
  };
};
