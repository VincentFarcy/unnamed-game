// == Action types
export const RESET_GAME = 'RESET_GAME';
export const CHANGE_GAME_STATUS = 'CHANGE_GAME_STATUS';
export const FETCH_INITIALE_GAME_DATA = 'FETCH_INITIALE_GAME_DATA';
export const GAME_DATA_SUCCESS = 'GAME_DATA_SUCCESS';
export const GAME_DATA_ERROR = 'GAME_DATA_ERROR';
export const FETCH_USER_SAVED_GAMES = 'FETCH_USER_SAVED_GAMES';
export const SAVED_DATA_SUCCESS = 'SAVED_DATA_SUCCESS';
export const SAVED_DATA_ERROR = 'SAVED_DATA_ERROR';
export const INCREMENT_CREATE_CHARACTER = 'INCREMENT_CREATE_CHARACTER';
export const DECREMENT_CREATE_CHARACTER = 'DECREMENT_CREATE_CHARACTER';
export const FIND_OPPONENT = 'FIND_OPPONENT';
export const RUN_AWAY = 'RUN_AWAY';

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

export const fetchUserSavedGames = () => ({
  type: FETCH_USER_SAVED_GAMES,
});

export const savedDataSuccess = (payload) => ({
  type: SAVED_DATA_SUCCESS,
  payload,
});

export const savedDataError = () => ({
  type: SAVED_DATA_ERROR,
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

export const runAway = () => ({
  type: RUN_AWAY,
});
