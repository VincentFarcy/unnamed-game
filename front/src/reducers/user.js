// == Import : local
import {
  CHANGE_FIELD,
  SIGNIN,
  SIGNUP,
  ADD_USER,
  GET_USER,
  SET_USER_ERROR_MESSAGE,
  GET_USER_ERROR_MESSAGES,
  LOGOUT,
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
    case SIGNIN:
      return {
        ...state,
      };
    case SIGNUP:
      return {
        ...state,
      };
    case ADD_USER:
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
    case SET_USER_ERROR_MESSAGE:
      return {
        ...state,
        errorMessages: [action.errorMessage],
      };
    case GET_USER_ERROR_MESSAGES:
      return {
        ...state,
        errorMessages: action.errorMessages,
      };
    case LOGOUT:
      return {
        ...state,
        isLogged: false,
        connectedUser: null,
        backups: null,
        tokenJWT: '',
        errorMessages: [],
      };
    default:
      return state;
  }
};

// == Export
export default user;
