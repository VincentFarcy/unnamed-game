// == npm imports
import axios from 'axios';

// local imports
import {
  SIGNIN,
  SIGNUP,
  addUser,
  getUser,
  getUserErrorMessages,
  setUserErrorMessage
} from '../actions/user';
import { BASE_API_URI } from '../app.config';

// == Api Middleware
const apiMiddleware = (store) => (next) => (action) => {

  switch (action.type) {

    case SIGNUP: {
      const state = store.getState();
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
          console.log('add user : error', err, err.response.data.errorMessages);
          store.dispatch(getUserErrorMessages(err.response.data.errorMessages));
        });
      break;
    }

    case SIGNIN: {
      const state = store.getState();
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
          console.log('login check : response', res, res.data.token);
          const tokenJWT = res.data.token;
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
              store.dispatch(setUserErrorMessage(err.response.data.message));
            });
        })
        .catch((err) => {
          console.log('login check : error', err, err.response.data);
          store.dispatch(setUserErrorMessage(err.response.data.message));
        });
      break;
    }

    default:
  }
  next(action);
};

// == Export
export default apiMiddleware;
