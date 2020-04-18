// == npm imports
import axios from 'axios';

// local imports
import { SIGNUP, addUser, userErrorMessages } from '../actions/user';
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
          store.dispatch(userErrorMessages(err.response.data.errorMessages));
        });
      break;
    }
    default:
  }
  next(action);
};

// == Export
export default apiMiddleware;
