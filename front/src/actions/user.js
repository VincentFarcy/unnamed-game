// == Action types
export const CHANGE_FIELD = 'CHANGE_FIELD';
export const SIGNIN = 'SIGNIN';
export const SIGNUP = 'SIGNUP';
export const ADD_USER = 'ADD_USER';
export const GET_USER = 'GET_USER';
export const SEND_ERROR_MESSAGES = 'SEND_ERROR_MESSAGES';
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

export const sendErrorMessages = (errorMessages) => ({
  type: SEND_ERROR_MESSAGES,
  errorMessages,
});

export const logout = () => ({
  type: LOGOUT,
});

