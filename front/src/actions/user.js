// == Action types
export const CHANGE_FIELD = 'CHANGE_FIELD';
export const SIGNIN = 'SIGNIN';
export const SIGNUP = 'SIGNUP';
export const GET_NEW_USER = 'GET_NEW_USER';
export const GET_USER = 'GET_USER';
export const SEND_ERROR_MESSAGES = 'SEND_ERROR_MESSAGES';
export const LOGOUT = 'LOGOUT';
export const SET_EDIT_MODE = 'SET_EDIT_MODE';
export const SET_DELETE_MODE = 'SET_DELETE_MODE';
export const EDIT_USER = 'EDIT_USER';
export const DELETE_USER = 'DELETE_USER';
export const INIT_USER_STATE = 'INIT_USER_STATE';
export const REFRESH_USER_BACKUPS = 'REFRESH_USER_BACKUPS';

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

export const getNewUser = (userData) => ({
  type: GET_NEW_USER,
  // tokenJWT included in userData :
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

export const setEditMode = () => ({
  type: SET_EDIT_MODE,
});

export const setDeleteMode = () => ({
  type: SET_DELETE_MODE,
});

export const editUser = () => ({
  type: EDIT_USER,
});

export const deleteUser = () => ({
  type: DELETE_USER,
});

export const initUserState = () => ({
  type: INIT_USER_STATE,
});

export const refreshUserBackups = (backups) => ({
  type: REFRESH_USER_BACKUPS,
  backups,
});
