// == Import : assets
import Force from 'src/assets/images/strength.png';
import Agilité from 'src/assets/images/agility.png';
import Constitution from 'src/assets/images/endurance.png';
import Volonté from 'src/assets/images/will.png';
import Intelligence from 'src/assets/images/intelligence.png';


// == Import : local
import {
  START_GAME,
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
  FIND_RANDOM_REWARD,
  FIND_EXPLORATION,
  EVENT_NOTHING,
  REST_ACTION,
  MEDIC_ACTION,
  ADD_OPPONNENT_REWARD,
  CHANGE_BG,
  RESTART_MUSIC,
  LOAD_BACKUP_DATA,
  START_BACKUP_LOADING,
  END_BACKUP_LOADING,
  EVENT_WIN,
  FIND_EVENT,
  INCREMENT_ABILITY,
  START_MISSION,
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
  findTrainAbility,
  findRandomExploration,
} from '../selectors/gameplay';
// import functions
import { rollDice } from '../func';

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
  eventRewards: {
    xp: null,
    jsx: null,
  },
  opponentRewards: {
    xpCombatReward: 0,
    jsxCombatReward: 0,
  },
  sequenceToTell: {
    title: '',
    id: 0,
    mainText: '',
  },
  currentEvent: '',
  exploration: {
    rollFrom: 0,
    rollTo: 0,
    type: '',
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
  hero: {},
  backupIsLoading: false,
  chapters: [
    {},
  ],
};

// == Reducer
const gameplay = (state = initialState, action = {}) => {
  switch (action.type) {
    case START_GAME:
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
        eventRewards: {
          xp: null,
          jsx: null,
        },
        opponentRewards: {
          xpCombatReward: 0,
          jsxCombatReward: 0,
        },
        sequenceToTell: {
          title: '',
          id: 0,
          mainText: '',
        },
        currentEvent: '',
        difficulty: 1,
        playerRoll: 1,
        exploration: {
          rollFrom: 0,
          rollTo: 0,
          type: '',
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
            xpGain: 0,
            moneyGain: 0,
          },
        },
        bgImageCssClass: '',
        hero: {},
        backupIsLoading: false,
        gameParameters: {
          ...state.gameParameters,
        },
        chapters: [
          {},
        ],
      };
    case GAME_DATA_SUCCESS:
      return {
        ...state,
        ...action.payload,
        player: {
          ...state.player,
          pool: action.payload.gameParameters.attribute_points,
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
          playerTotalHP: ((state.player.abilities[3].value / 2)
            + (state.player.abilities[2].value)) * 10,
          playerCurrentHP: ((state.player.abilities[3].value / 2)
            + (state.player.abilities[2].value)) * 10,
          hacking: ((state.player.abilities[4].value)
            + Math.floor((state.player.abilities[3].value / 2))),
          baseTouch: ((state.player.abilities[1].value)
            + Math.floor((state.player.abilities[4].value / 3))),
          dodge: ((state.player.abilities[1].value)
            + Math.floor((state.player.abilities[4].value / 2))),
          baseDamage: state.player.abilities[0].value,
          baseSpeed: state.player.abilities[1].value,
          baseHealing: Math.floor(
            ((state.player.abilities[3].value) + (state.player.abilities[4].value)),
          ),
        },
      };
    case DECREMENT_CREATE_CHARACTER:
      findDownAbility(state, action.payload);
      return {
        ...state,
        player: {
          ...state.player,
          playerTotalHP: ((state.player.abilities[3].value / 2)
            + (state.player.abilities[2].value)) * 10,
          playerCurrentHP: ((state.player.abilities[3].value / 2)
            + (state.player.abilities[2].value)) * 10,
          hacking: ((state.player.abilities[4].value)
            + Math.floor((state.player.abilities[3].value / 2))),
          baseTouch: ((state.player.abilities[1].value)
            + Math.floor((state.player.abilities[4].value / 3))),
          dodge: ((state.player.abilities[1].value)
            + Math.floor((state.player.abilities[4].value / 2))),
          baseDamage: state.player.abilities[0].value,
          baseSpeed: state.player.abilities[1].value,
          baseHealing: Math.floor(
            ((state.player.abilities[3].value) + (state.player.abilities[4].value)),
          ),
        },
      };
    case FIND_OPPONENT:
      const opponent = findOpponentForCombat(state);
      return {
        ...state,
        sequenceToTell: {
          title: '',
          id: 0,
          mainText: '',
        },
        combat: {
          ...state.combat,
          isCombatOn: true,
          currentOpponent: {
            ...opponent,
            opponentCurrentHP: opponent.health,
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
        rewards: {
          xpRoll: 0,
          jsxRoll: 0,
        },
        eventRewards: {
          xp: null,
          jsx: null,
        },
        opponentRewards: {
          xpCombatReward: 0,
          jsxCombatReward: 0,
        },
        sequenceToTell: {
          title: '',
          id: 0,
          mainText: '',
        },
        exploration: {
          rollFrom: 0,
          rollTo: 0,
          type: '',
        },
        combat: {
          ...state.combat,
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
          jsx: state.player.jsx
            + (state.eventRewards.jsx !== null ? state.eventRewards.jsx : randomReward.jsxRoll),
          xp: state.player.xp
            + (state.eventRewards.xp !== null ? state.eventRewards.xp : randomReward.xpRoll),
        },
      };
    case FIND_EVENT:
      return {
        ...state,
        difficulty: rollDice(4, 9),
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
        exploration: {
          rollFrom: 0,
          rollTo: 0,
          type: '',
        },
        sequenceToTell: {
          title: '',
          id: 0,
          mainText: '',
        },
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
        sequenceToTell: {
          title: '',
          id: 0,
          mainText: '',
        },
        player: {
          ...state.player,
          playerCurrentHP:
            (state.player.playerCurrentHP
              + state.player.baseHealing + rollDice(1, 2)) < state.player.playerTotalHP
              ? state.player.playerCurrentHP
                + state.player.baseHealing + rollDice(1, 2) : state.player.playerTotalHP,
        },
      };
    case MEDIC_ACTION:
      return {
        ...state,
        phpTimer: state.phpTimer + 1,
        sequenceToTell: {
          title: '',
          id: 0,
          mainText: '',
        },
        exploration: {
          rollFrom: 0,
          rollTo: 0,
          type: '',
        },
        player: {
          ...state.player,
          jsx: state.player.jsx - 10,
          playerCurrentHP: state.player.playerTotalHP,
        },
      };
    case EVENT_WIN:
      return {
        ...state,
        sequenceToTell: {
          title: '',
          id: 0,
          mainText: '',
        },
        eventRewards: {
          xp: rollDice(4, 8),
          jsx: rollDice(4, 8),
        },
      };

    case INCREMENT_ABILITY:
      findTrainAbility(state, action.payload);
      return {
        ...state,
        sequenceToTell: {
          title: '',
          id: 0,
          mainText: '',
        },
        player: {
          ...state.player,
          xp: state.player.xp - state.gameParameters.train_xp_cost,
          jsx: state.player.jsx - state.gameParameters.train_money_cost,
          playerTotalHP: ((state.player.abilities[3].value / 2)
            + (state.player.abilities[2].value)) * 10,
          playerCurrentHP: state.player.playerCurrentHP,
          hacking: ((state.player.abilities[4].value)
            + Math.floor((state.player.abilities[3].value / 2))),
          baseTouch: ((state.player.abilities[1].value)
            + Math.floor((state.player.abilities[4].value / 3))),
          dodge: ((state.player.abilities[1].value)
            + Math.floor((state.player.abilities[4].value / 2))),
          baseDamage: state.player.abilities[0].value,
          baseSpeed: state.player.abilities[1].value,
          baseHealing: Math.floor(((state.player.abilities[3].value)
            + (state.player.abilities[4].value))),
        },
      };

    case LOAD_BACKUP_DATA:
      const sequenceId = action.backups[0].sequence.id;
      const phpTimer = state.chapters[0].sequences.find(
        (sequence) => sequence.id === sequenceId,
      ).orderBy;
      return {
        ...state,
        phpTimer: phpTimer,
        player: {
          ...state.player,
          pool: 0,
          playerCurrentHP: action.backups[0].health,
          playerTotalHP: ((action.backups[0].will / 2) + (action.backups[0].constitution)) * 10,
          baseTouch: ((action.backups[0].agility)
            + Math.floor((action.backups[0].intelligence / 3))),
          dodge: ((action.backups[0].agility) + Math.floor((action.backups[0].intelligence / 2))),
          baseDamage: action.backups[0].strength,
          baseSpeed: action.backups[0].agility,
          baseHealing: Math.floor(
            ((action.backups[0].will) + (action.backups[0].intelligence)),
          ),
          hacking: ((action.backups[0].intelligence) + Math.floor((action.backups[0].will / 2))),
          abilities: [
            {
              ...state.player.abilities[0],
              value: action.backups[0].strength,
            },
            {
              ...state.player.abilities[1],
              value: action.backups[0].agility,
            },
            {
              ...state.player.abilities[2],
              value: action.backups[0].constitution,
            },
            {
              ...state.player.abilities[3],
              value: action.backups[0].will,
            },
            {
              ...state.player.abilities[4],
              value: action.backups[0].intelligence,
            },
          ],
          xp: action.backups[0].xp,
          jsx: action.backups[0].money,
        },
      };
    case START_BACKUP_LOADING:
      return {
        ...state,
        backupIsLoading: true,
      };
    case END_BACKUP_LOADING:
      return {
        ...state,
        backupIsLoading: false,
      };
    case START_MISSION:
      return {
        ...state,
        phpTimer: 30,
      };
    case RESTART_MUSIC:
      return {
        ...state,
        gameOn: false,

      };
    default:
      return state;
  }
};

// == Export
export default gameplay;
