// == npm imports
import axios from 'axios';

// local imports
import {
  SIGNIN,
  SIGNUP,
  addUser,
  getUser,
  sendErrorMessages,
} from '../actions/user';
import { BASE_API_URI } from '../app.config';

const handleSendErrorMessages = (store, data) => {
  // Init error messages array
  const errorMessages = [];
  // Automatic technical message (ex: invalid credential)
  if (data.message) {
    errorMessages.push(data.message);
  }
  // Messages sent because of funcionnal rule non respected (ex: unique email)
  if (data.errorMessages) {
    errorMessages.push(data.errorMessages);
  }
  // Sending all messages to state
  store.dispatch(sendErrorMessages(errorMessages));
};

// == Api Middleware
const apiMiddleware = (store) => (next) => (action) => {

  switch (action.type) {

    case SIGNUP: {
      const state = store.getState();

      // ========== API : api/user/add
      console.log('action pour enregistrer un nouvel utilisateur', state);
      axios({
        url: `${BASE_API_URI}/api/user/add`,
        method: 'post',
        data: {
          pseudo: state.user.input.pseudo,
          email: state.user.input.email,
          password: state.user.input.password,
          ageChecked: state.user.input.ageChecked,
        },
      })
        .then((res) => {
          console.log('add user : response', res, res.data);
          store.dispatch(addUser(res.data));
        })
        .catch((err) => {
          console.log('add user : error', err, err.response.data);
          handleSendErrorMessages(store, err.response.data);
        });
      break;
    }

    case SIGNIN: {
      const state = store.getState();

      // ========== API : api/login_check
      console.log('action pour connecter un utilisateur', state);
      axios({
        method: 'post',
        url: `${BASE_API_URI}/api/login_check`,
        withCredentials: true,
        data: {
          username: state.user.input.userId,
          password: state.user.input.password,
        },
      })
        .then((res) => {
          const tokenJWT = res.data.token;

          // ========== API : api/user/read
          console.log('login check : response', res, res.data.token);
          axios({
            method: 'get',
            url: `${BASE_API_URI}/api/user/read`,
            withCredentials: true,
            headers: {
              Authorization: `Bearer ${tokenJWT}`,
            },
          })
            .then((res) => {
              console.log('user read : response', res, res.data);
              store.dispatch(getUser(tokenJWT, res.data));
            })
            .catch((err) => {
              console.log('user read : error', err, err.response.data);
              handleSendErrorMessages(store, err.response.data);
            });
        })
        .catch((err) => {
          console.log('login check : error', err, err.response.data);
          handleSendErrorMessages(store, err.response.data);
        });
      break;
    }

    default:
  }
  next(action);
};

// == Export
export default apiMiddleware;
