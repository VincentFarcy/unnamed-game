// == Import : local
import {
  CHANGE_FIELD,
  GET_NEW_USER,
  GET_USER,
  SEND_ERROR_MESSAGES,
  LOGOUT,
  SET_EDIT_MODE,
  SET_DELETE_MODE,
  EDIT_USER,
  DELETE_USER,
  INIT_USER_STATE,
  REFRESH_USER_BACKUPS,
} from '../actions/user';


const initialState = {
  input: {
    userId: '',
    pseudo: '',
    email: '',
    password: '',
    confirmPassword: '',
    ageChecked: false,
  },
  connectedUser: {
    pseudo: '',
    email: '',
    roles: [],
  },
  mode: {
    editMode: false,
    deleteMode: false,
  },
  backups: [],
  tokenJWT: '',
  isLogged: false,
  errorMessages: [],
};

// == Reducer
const user = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_FIELD:
      return {
        ...state,
        input: {
          ...state.input,
          [action.name]: action.value,
        },
        errorMessages: [],
      };
    case GET_NEW_USER:
      return {
        ...state,
        isLogged: true,
        connectedUser: action.userData.user,
        tokenJWT: action.userData.token,
        errorMessages: [],
      };
    case GET_USER:
      return {
        ...state,
        isLogged: true,
        connectedUser: action.userData.user,
        backups: action.userData.backups,
        tokenJWT: action.tokenJWT,
        errorMessages: [],
      };
    case SEND_ERROR_MESSAGES:
      return {
        ...state,
        errorMessages: action.errorMessages,
      };
    case LOGOUT:
      return {
        ...state,
        isLogged: false,
        input: {
          userId: '',
          pseudo: '',
          email: '',
          password: '',
          confirmPassword: '',
          ageChecked: false,
        },
        connectedUser: {
          pseudo: '',
          email: '',
          roles: [],
        },
        backups: [],
        tokenJWT: '',
        errorMessages: [],
      };
    case SET_EDIT_MODE:
      return {
        ...state,
        mode: {
          ...state.mode,
          editMode: !state.mode.editMode,
        },
        input: {
          ...state.input,
          pseudo: state.connectedUser.pseudo,
          email: state.connectedUser.email,
        },
      };
    case EDIT_USER:
      return {
        ...state,
        mode: {
          ...state.mode,
          editMode: false,
        },
      };
    case SET_DELETE_MODE:
      return {
        ...state,
        mode: {
          ...state.mode,
          deleteMode: !state.mode.deleteMode,
        },
      };
    case DELETE_USER:
      return {
        ...state,
        mode: {
          ...state.mode,
          deleteMode: false,
        },
      };
    case INIT_USER_STATE:
      return {
        ...state,
        input: {
          ...state.input,
          userId: '',
          pseudo: '',
          email: '',
          password: '',
          confirmPassword: '',
          ageChecked: false,
        },
        mode: {
          ...state.mode,
          editMode: false,
          deleteMode: false,
        },
        errorMessages: [],
      };
    case REFRESH_USER_BACKUPS:
      // console.log(REFRESH_USER_BACKUPS, action.backups);
      return {
        ...state,
        backups: action.backups,
      };
    default:
      return state;
  }
};

// == Export
export default user;
