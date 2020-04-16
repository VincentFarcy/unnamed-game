// == Action types
export const FETCH_INITIALE_GAME_DATA = 'FETCH_INITIALE_GAME_DATA';
export const GAME_DATA_SUCCESS = 'GAME_DATA_SUCCESS';
export const GAME_DATA_ERROR = 'GAME_DATA_ERROR';
export const INCREMENT_CREATE_CHARACTER = 'INCREMENT_CREATE_CHARACTER';
export const DECREMENT_CREATE_CHARACTER = 'DECREMENT_CREATE_CHARACTER';

// == Action creators
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

export const increment = () => ({
  type: INCREMENT_CREATE_CHARACTER,
});

export const decrement = () => ({
  type: DECREMENT_CREATE_CHARACTER,
});