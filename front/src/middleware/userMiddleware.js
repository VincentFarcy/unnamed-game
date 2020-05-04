// == npm imports
import axios from 'axios';

// local imports
import {
  SIGNIN,
  SIGNUP,
  EDIT_USER,
  DELETE_USER,
  getNewUser,
  getUser,
  sendErrorMessages,
  logout,
} from '../actions/user';
import { BASE_API_URI } from '../app.config';

const handleSendErrorMessages = (store, data) => {
  // Init error messages array
  let errorMessages = [];
  // Automatic technical message (ex: invalid credential)
  if (data.message) {
    let message = data.message;
    if (data.code === 401) {
      message = 'Identification incorrecte.';
    }
    errorMessages.push(message);
  }
  // Messages sent because of functionnal rule non respected (ex: unique email)
  if (data.errorMessages) {
    errorMessages = errorMessages.concat(data.errorMessages);
  }
  // Sending all messages to state
  store.dispatch(sendErrorMessages(errorMessages));
};

// == Api Middleware
const apiMiddleware = (store) => (next) => (action) => {
  //
  switch (action.type) {
    //
    case SIGNUP: {
      const state = store.getState();

      // ========== API : api/user/add
      // console.log('action pour enregistrer un nouvel utilisateur', state);
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
          // console.log('add user : response', res, res.data);
          store.dispatch(getNewUser(res.data));
        })
        .catch((err) => {
          // console.log('add user : error', err, err.response.data);
          handleSendErrorMessages(store, err.response.data);
        });
      break;
    }

    case SIGNIN: {
      const state = store.getState();

      // ========== API : api/login_check
      // console.log('action pour connecter un utilisateur', state);
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
          // console.log('login check : response', res, res.data.token);
          axios({
            method: 'get',
            url: `${BASE_API_URI}/api/user/read`,
            withCredentials: true,
            headers: {
              Authorization: `Bearer ${tokenJWT}`,
            },
          })
            .then((response) => {
              // console.log('user read : response', res, res.data);
              store.dispatch(getUser(tokenJWT, response.data));
            })
            .catch((err) => {
              // console.log('user read : error', err, err.response.data);
              handleSendErrorMessages(store, err.response.data);
            });
        })
        .catch((err) => {
          // console.log('login check : error', err, err.response.data);
          handleSendErrorMessages(store, err.response.data);
        });
      break;
    }

    case EDIT_USER: {
      const state = store.getState();

      // ========== API : api/user/edit
      // console.log('action pour modifier un utilisateur', state);
      axios({
        method: 'put',
        url: `${BASE_API_URI}/api/user/edit`,
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${state.user.tokenJWT}`,
        },
        data: {
          pseudo: state.user.input.pseudo,
          email: state.user.input.email,
        },
      })
        .then((res) => {
          // console.log('user edit : response', res, res.data);
          store.dispatch(getUser(res.data.token, res.data));
        })
        .catch((err) => {
          // console.log('user edit : error', err, err.response.data);
          handleSendErrorMessages(store, err.response.data);
        });
      break;
    }

    case DELETE_USER: {
      const state = store.getState();

      // ========== API : api/user/delete
      // console.log('action pour supprimer un utilisateur', state);
      axios({
        method: 'delete',
        url: `${BASE_API_URI}/api/user/delete`,
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${state.user.tokenJWT}`,
        },
      })
        .then(() => {
          // console.log('user delete : response', res, res.data);
          store.dispatch(logout());
        })
        .catch((err) => {
          // console.log('user delete : error', err, err.response.data);
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
