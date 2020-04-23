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
  CHANGE_BG,
}
  from '../actions/gamePlay';
import {
  findUpAbility,
  findDownAbility,
  findOpponentForCombat,
  findInfoForSequence,
  findRandomReward
} from '../selectors/gameplay';


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
  rewards: {
    xpRoll: 0,
    jsxRoll: 0,
  },
  sequenceToTell: '',
  player: {
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
        initialState,
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
        rewards: {
          xpRoll: 0,
          jsxRoll: 0,
        },
        sequenceToTell: '',
        player: {
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
          },
        },
        bgImageCssClass: '',
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
    case COMBAT_IN_PROGRESS:
      return {
        ...state,
        combat: {
          ...state.combat,
          combatInProgress: true,
        }
      }
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
        }
      };
    case CHANGE_BG:
      return {
        ...state,
        bgImageCssClass: action.bgImageCssClass,
      };
    default:
      return state;
  }
};


// == Export
export default gameplay;
