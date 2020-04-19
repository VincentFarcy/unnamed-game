// == Action types
export const CHANGE_FIELD = 'CHANGE_FIELD';
export const SIGNIN = 'SIGNIN';
export const SIGNUP = 'SIGNUP';
export const ADD_USER = 'ADD_USER';
export const GET_USER = 'GET_USER';
export const GET_USER_ERROR_MESSAGES = 'GET_USER_ERROR_MESSAGES';
export const SET_USER_ERROR_MESSAGE = 'SET_USER_ERROR_MESSAGE';
export const LOGOUT = 'LOGOUT';

// == Action creators
export const changeField = (value, name) => ({
  type: CHANGE_FIELD,
  value,
  name,
});

export const signIn = (userId, password) => ({
  type: SIGNIN,
  userId,
  password,
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

export const getUser = (tokenJWT, userData) => ({
  type: GET_USER,
  tokenJWT,
  userData,
});

export const setUserErrorMessage = (errorMessage) => ({
  type: SET_USER_ERROR_MESSAGE,
  errorMessage,
});

export const getUserErrorMessages = (errorMessages) => ({
  type: GET_USER_ERROR_MESSAGES,
  errorMessages,
});

export const logout = () => ({
  type: LOGOUT,
});
