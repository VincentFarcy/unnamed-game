// == Action types
export const CHANGE_FIELD = 'CHANGE_FIELD';
export const SIGNUP = 'SIGNUP';
export const ADD_USER = 'ADD_USER';
export const USER_ERROR_MESSAGES = 'USER_ERROR_MESSAGES';
export const SET_USER_ERROR_MESSAGE = 'SET_USER_ERROR_MESSAGE';

// == Action creators
export const changeField = (value, name) => ({
  type: CHANGE_FIELD,
  value,
  name,
});

export const signUp = (pseudo, email, password, confirmPassword, ageChecked) => ({
  type: SIGNUP,
  pseudo,
  email,
  password,
  confirmPassword,
  ageChecked,
});

export const addUser = (userData) => ({
  type: ADD_USER,
  userData,
});

export const userErrorMessages = (errorMessages) => ({
  type: USER_ERROR_MESSAGES,
  errorMessages,
});

export const setUserErrorMessage = (errorMessage) => ({
  type: SET_USER_ERROR_MESSAGE,
  errorMessage,
});
