// == Action types
export const RESET_GAME = 'RESET_GAME';
export const CHANGE_GAME_STATUS = 'CHANGE_GAME_STATUS';
export const FETCH_INITIALE_GAME_DATA = 'FETCH_INITIALE_GAME_DATA';
export const GAME_DATA_SUCCESS = 'GAME_DATA_SUCCESS';
export const GAME_DATA_ERROR = 'GAME_DATA_ERROR';
export const INCREMENT_CREATE_CHARACTER = 'INCREMENT_CREATE_CHARACTER';
export const DECREMENT_CREATE_CHARACTER = 'DECREMENT_CREATE_CHARACTER';
export const FIND_OPPONENT = 'FIND_OPPONENT';
export const APPLY_DAMAGE = 'APPLY_DAMAGE';
export const NEXT_SEQUENCE = 'NEXT_SEQUENCE';
export const END_FIGHT = 'END_FIGHT';
export const FIND_SEQUENCE = 'FIND_SEQUENCE';
export const RESTART_NEW_GAME = 'RESTART_NEW_GAME';
export const FIND_RANDOM_REWARD = 'FIND_RANDOM_REWARD';
export const CHANGE_BG = 'CHANGE_BG';

// == Action creators
export const resetGame = () => ({
  type: RESET_GAME,
});

export const changeGameStatus = () => ({
  type: CHANGE_GAME_STATUS,
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

export const applyDamage = (payload) => ({
  type: APPLY_DAMAGE,
  payload,
});

export const findSequence = () => ({
  type: FIND_SEQUENCE,
});

export const nextSequence = () => ({
  type: NEXT_SEQUENCE,
});

export const endFight = () => ({
  type: END_FIGHT,
});

export const restartNewGame = () => ({
  type: RESTART_NEW_GAME,
});

export const findRandomReward = () => ({
  type: FIND_RANDOM_REWARD,
});

export const changeBg = (bgImageCssClass) => ({
  type: CHANGE_BG,
  bgImageCssClass,
});
