// == Action types
export const START_GAME = 'START_GAME';
export const FETCH_INITIALE_GAME_DATA = 'FETCH_INITIALE_GAME_DATA';
export const GAME_DATA_SUCCESS = 'GAME_DATA_SUCCESS';
export const GAME_DATA_ERROR = 'GAME_DATA_ERROR';
export const INCREMENT_CREATE_CHARACTER = 'INCREMENT_CREATE_CHARACTER';
export const DECREMENT_CREATE_CHARACTER = 'DECREMENT_CREATE_CHARACTER';
export const FIND_OPPONENT = 'FIND_OPPONENT';
export const COMBAT_IN_PROGRESS = 'COMBAT_IN_PROGRESS';
export const APPLY_DAMAGE = 'APPLY_DAMAGE';
export const END_FIGHT = 'END_FIGHT';
export const NEXT_SEQUENCE = 'NEXT_SEQUENCE';
export const FIND_SEQUENCE = 'FIND_SEQUENCE';
export const FIND_RANDOM_REWARD = 'FIND_RANDOM_REWARD';
export const EVENT_WIN = 'EVENT_WIN';
export const FIND_EVENT = 'FIND_EVENT';
export const CHANGE_BG = 'CHANGE_BG';
export const RESTART_MUSIC = 'RESTART_MUSIC';
export const FIND_EXPLORATION = 'FIND_EXPLORATION';
export const EVENT_NOTHING = 'EVENT_NOTHING';
export const REST_ACTION = 'REST_ACTION';
export const MEDIC_ACTION = 'MEDIC_ACTION';
export const ADD_OPPONNENT_REWARD = 'ADD_OPPONNENT_REWARD';
export const INCREMENT_ABILITY = 'INCREMENT_ABILITY';
export const GAME_BACKUP = 'GAME_BACKUP';
export const LOAD_BACKUP_DATA = 'LOAD_BACKUP_DATA';
export const START_BACKUP_LOADING = 'START_BACKUP_LOADING';
export const END_BACKUP_LOADING = 'END_BACKUP_LOADING';
export const START_MISSION = 'START_MISSION';


// == Action creators
export const startGame = () => ({
  type: START_GAME,
});

export const fetchInitialeGameData = () => ({
  type: FETCH_INITIALE_GAME_DATA,
});

export const gameDataSuccess = (payload) => ({
  type: GAME_DATA_SUCCESS,
  payload,
});

export const gameDataError = () => ({
  type: GAME_DATA_ERROR,
});

export const increment = (payload) => ({
  type: INCREMENT_CREATE_CHARACTER,
  payload,
});

export const decrement = (payload) => ({
  type: DECREMENT_CREATE_CHARACTER,
  payload,
});

export const findOpponent = () => ({
  type: FIND_OPPONENT,
});

export const combatInProgress = () => ({
  type: COMBAT_IN_PROGRESS,
});

export const applyDamage = (payload) => ({
  type: APPLY_DAMAGE,
  payload,
});

export const endFight = () => ({
  type: END_FIGHT,
});

export const findSequence = () => ({
  type: FIND_SEQUENCE,
});

export const nextSequence = () => ({
  type: NEXT_SEQUENCE,
});

export const findRandomReward = () => ({
  type: FIND_RANDOM_REWARD,
});

export const findEvent = () => ({
  type: FIND_EVENT,
});

export const findExploration = () => ({
  type: FIND_EXPLORATION,
});

export const eventNothing = () => ({
  type: EVENT_NOTHING,
});


export const actionRest = () => ({
  type: REST_ACTION,
});

export const actionMedic = () => ({
  type: MEDIC_ACTION,
});

export const addOpponnentReward = () => ({
  type: ADD_OPPONNENT_REWARD,
});

export const changeBg = (bgImageCssClass) => ({
  type: CHANGE_BG,
  bgImageCssClass,
});

export const restartMusic = () => ({
  type: RESTART_MUSIC,
});


export const gameBackup = () => ({
  type: GAME_BACKUP,
});

export const loadBackupData = (backups) => ({
  type: LOAD_BACKUP_DATA,
  backups,
});

export const startBackupLoading = () => ({
  type: START_BACKUP_LOADING,
});

export const endBackupLoading = () => ({
  type: END_BACKUP_LOADING,
});

export const eventWin = () => ({
  type: EVENT_WIN,
});

export const incrementAbility = (payload) => ({
  type: INCREMENT_ABILITY,
  payload,
});

export const startMission = () => ({
  type: START_MISSION,
});
