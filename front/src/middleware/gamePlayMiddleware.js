// == npm imports
import axios from 'axios';

// local imports
import { FETCH_INITIALE_GAME_DATA } from '../actions/gamePlay';
import { BASE_API_URI } from '../app.config.js';

// == Api Middleware
const apiMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_INITIALE_GAME_DATA:
      console.log('action pour récupérer les datas dans le middleware');
      axios({
        url: `${BASE_API_URI}/api/game/load`,
        method: 'get',
        withCredentials: true,
      })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
      break;
    default: 
    console.log('apiState :', store.getState());
    console.log('apiMiddleware: ', action);
    next(action);
  }
};

// == Export
export default apiMiddleware;
