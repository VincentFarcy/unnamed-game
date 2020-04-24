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
  COMBAT_IN_PROGRESS,
  APPLY_DAMAGE,
  NEXT_SEQUENCE,
  END_FIGHT,
  FIND_SEQUENCE,
  RESTART_NEW_GAME,
  FIND_RANDOM_REWARD,
  FIND_EXPLORATION,
  EVENT_NOTHING,
  REST_ACTION,
  MEDIC_ACTION,
  ADD_OPPONNENT_REWARD,
  CHANGE_BG,
  UPDATE_TIMER,
  EVENT_WIN,
  FIND_EVENT,
}
  from '../actions/gamePlay';
// import selectors
import {
  findUpAbility,
  findDownAbility,
  findOpponentForCombat,
  findInfoForSequence,
  findRandomReward,
  addOpponnentReward,
} from '../selectors/gameplay';
// import functions
import { rollDice } from '../func';
import { StaticRouter } from 'react-router';


// == State

const initialState = {
  gameOn: false,
  isLoading: false,
  loadingErrMessage: '',
  hasError: false,
  phpTimer: 1,
  rewards: {
    xpRoll: 0,
    jsxRoll: 0,
  },
  sequenceToTell: '',
  currentEvent: '',
  exploration: {
    type: 'string',
  },
  difficulty: 1,
  playerRoll: 1,
  player: {
    pool: 0,
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
    // Total player's health point
    playerTotalHP: 0,
    // player current health point which is initialized at the same time as playerTotalHP
    playerCurrentHP: 0,
    xp: 0,
    jsx: 0,
  },
  combat: {
    isCombatOn: true,
    combatInProgress: false,
    // currentOponent is empty until OpponentCombatInfo is rendered
    currentOpponent: {
      opponentCurrentHP: 0,
      speed: 0,
      touch: 0,
      dodge: 0,
      xpGain: 0,
      moneyGain: 0,
    },
  },
  bgImageCssClass: '',
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
      return {
        gameOn: false,
        isLoading: false,
        loadingErrMessage: '',
        hasError: false,
        phpTimer: 1,
        rewards: {
          xpRoll: 0,
          jsxRoll: 0,
        },
        opponentRewards: {
          xpCombatReward: 0,
          jsxCombatReward: 0,
        },
        sequenceToTell: '',
        currentEvent: '',
        difficulty: 1,
        playerRoll: 1,
        exploration: {
          type: 'string',
        },
        player: {
          pool: 0,
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
          // Total player's health point
          playerTotalHP: 0,
          playerCurrentHP: 0,
          xp: 0,
          jsx: 0,
        },
        combat: {
          isCombatOn: true,
          combatInProgress: false,
          // currentOponent is empty until OpponentCombatInfo is rendered
          currentOpponent: {
            opponentCurrentHP: 0,
            speed: 0,
            touch: 0,
            dodge: 0,
          },
        },
        bgImageCssClass: '',
      };
    case CHANGE_GAME_STATUS:
      return {
        gameOn: true,
        isLoading: false,
        loadingErrMessage: '',
        hasError: false,
        phpTimer: 1,
        rewards: {
          xpRoll: 0,
          jsxRoll: 0,
        },
        opponentRewards: {
          xpCombatReward: 0,
          jsxCombatReward: 0,
        },
        sequenceToTell: '',
        currentEvent: '',
        difficulty: 1,
        playerRoll: 1,
        exploration: {
          type: 'string',
        },
        player: {
          pool: 0,
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
          // Total player's health point
          playerTotalHP: 0,
          playerCurrentHP: 0,
          xp: 0,
          jsx: 0,
        },
        combat: {
          isCombatOn: true,
          combatInProgress: false,
          // currentOponent is empty until OpponentCombatInfo is rendered
          currentOpponent: {
            opponentCurrentHP: 0,
            speed: 0,
            touch: 0,
            dodge: 0,
          },
        },
        bgImageCssClass: '',
      };
    case GAME_DATA_SUCCESS:
      return {
        ...state,
        ...action.payload,
        player: {
          ...state.player,
          pool: action.payload.gameParameters.attribute_points,
        }
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
          playerTotalHP: ((state.player.abilities[3].value / 2) + (state.player.abilities[2].value)) * 10,
          playerCurrentHP: ((state.player.abilities[3].value / 2) + (state.player.abilities[2].value)) * 10,
          hacking: ((state.player.abilities[4].value) + Math.floor((state.player.abilities[3].value / 3))),
          baseTouch: ((state.player.abilities[1].value) + Math.floor((state.player.abilities[4].value / 3))),
          dodge: ((state.player.abilities[1].value) + Math.floor((state.player.abilities[4].value / 2))),
          baseDamage: state.player.abilities[0].value,
          baseSpeed: state.player.abilities[1].value,
          baseHealing: Math.floor(
            ((state.player.abilities[3].value / 2) + (state.player.abilities[4].value / 2)),
          ),
        },
      };
    case DECREMENT_CREATE_CHARACTER:
      findDownAbility(state, action.payload);
      return {
        ...state,
        player: {
          ...state.player,
          playerTotalHP: ((state.player.abilities[3].value / 2) + (state.player.abilities[2].value)) * 10,
          playerCurrentHP: ((state.player.abilities[3].value / 2) + (state.player.abilities[2].value)) * 10,
          hacking: ((state.player.abilities[4].value) + Math.floor((state.player.abilities[3].value / 3))),
          baseTouch: ((state.player.abilities[1].value) + Math.floor((state.player.abilities[4].value / 3))),
          dodge: ((state.player.abilities[1].value) + Math.floor((state.player.abilities[4].value / 2))),
          baseDamage: state.player.abilities[0].value,
          baseSpeed: state.player.abilities[1].value,
          baseHealing: Math.floor(((state.player.abilities[3].value / 2) + (state.player.abilities[4].value / 2))),
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
    case COMBAT_IN_PROGRESS:
      return {
        ...state,
        combat: {
          ...state.combat,
          combatInProgress: true,
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
          combatInProgress: false,
        },
      };
    case FIND_RANDOM_REWARD:
      const randomReward = findRandomReward(state);
      return {
        ...state,
        rewards: randomReward,
        player: {
          ...state.player,
          jsx: state.player.jsx + randomReward.jsxRoll,
          xp: state.player.xp + randomReward.xpRoll,
        },
      };
    case FIND_EVENT:
      return {
        ...state,
        difficulty: rollDice(3, 10),
        playerRoll: rollDice(1, 6),
      };

    case FIND_EXPLORATION:
      return {
        ...state,
        exploration: findRandomExploration(state),
      };
    case EVENT_NOTHING:
      return {
        ...state,
        sequenceToTell: '',
        phpTimer: state.phpTimer + 1,
      };

    case ADD_OPPONNENT_REWARD:
      const opponentReward = addOpponnentReward(state);
      return {
        ...state,
        opponentRewards: addOpponnentReward,
        player: {
          ...state.player,
          jsx: state.player.jsx + opponentReward.jsxCombatReward,
          xp: state.player.xp + opponentReward.xpCombatReward,
        },
      };
    case CHANGE_BG:
      return {
        ...state,
        bgImageCssClass: action.bgImageCssClass,

      };
    case REST_ACTION:
      return {
        ...state,
        phpTimer: state.phpTimer + 1,
        sequenceToTell: '',
        player: {
          ...state.player,
          playerCurrentHP: (state.player.playerCurrentHP + state.player.baseHealing + rollDice(1, 2)),
        },
      };
    case MEDIC_ACTION:
      return {
        ...state,
        phpTimer: state.phpTimer + 1,
        sequenceToTell: '',
        player: {
          ...state.player,
          jsx: state.player.jsx - 10,
          playerCurrentHP: state.player.playerTotalHP,
        },
      };
    case UPDATE_TIMER:
      return {
        ...state,
        phpTimer: state.phpTimer + 1,
        sequenceToTell: '',
      };
    case EVENT_WIN:
      return {
        ...state,
        phpTimer: state.phpTimer + 1,
        sequenceToTell: '',
        player: {
          ...state.player,
          jsx: state.player.jsx + rollDice(1, 3),
          xp: state.player.xp + rollDice(2, 4),
        },
      };
    default:
      return state;
  }

};


// == Export
export default gameplay;


export const findRandomExploration = (state) => {
  const RandomExplorationTable = state.chapters[0].randomEvents;

  const findExplorationTable = rollDice(1, 100);

  const rightExplorationTable = RandomExplorationTable.find(
    (explorationRange) => (findExplorationTable >= explorationRange.rollFrom
      && findExplorationTable <= explorationRange.rollTo),
  );

  return rightExplorationTable;
};
