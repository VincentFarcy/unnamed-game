// == Import : local
import {
  CHANGE_FIELD,
  SIGNUP,
  ADD_USER,
  USER_ERROR_MESSAGES,
  SET_USER_ERROR_MESSAGE,
} from '../actions/user';


const initialState = {
  input: {
    pseudo: '',
    email: '',
    password: '',
    confirmPassword: '',
    ageChecked: false,
  },
  connectedUser: {
    pseudo: '',
    email: '',
    tokenJWT: '',
    roles: [],
    backups: [],
  },
  isLogged: false,
  errorMessages: [],
};

// == Reducer
const user = (state = initialState, action = {}) => {
  console.log('reducer-state:', state);
  console.log('reducer-action:', action);
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
    case SIGNUP:
      return {
        ...state,
      };
    case ADD_USER:
      return {
        ...state,
        isLogged: true,
        connectedUser: action.userData,
        errorMessages: [],
      };
    case USER_ERROR_MESSAGES:
      return {
        ...state,
        errorMessages: action.errorMessages,
      };
    case SET_USER_ERROR_MESSAGE:
      return {
        ...state,
        errorMessages: [action.errorMessage],
      };
    default:
      return state;
  }
};

// == Export
export default user;
