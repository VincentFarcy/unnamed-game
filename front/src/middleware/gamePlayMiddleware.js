// == npm imports
import axios from 'axios';

// local imports
import { FETCH_INITIALE_GAME_DATA, gameDataSuccess, gameDataError, FIND_OPPONENT } from '../actions/gamePlay';
import { BASE_API_URI } from '../app.config';
import roll from '../func';

// == Api Middleware
const apiMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_INITIALE_GAME_DATA:
      console.log('action pour récupérer les datas dans le middleware');
      axios({
        url: `${BASE_API_URI}/api/game/load`,
        method: 'get',
      })
        .then((res) => {
          store.dispatch(gameDataSuccess(res.data));
        })
        .catch(() => {
          store.dispatch(gameDataError());
        });
      break;
      case FIND_OPPONENT:
        console.log("test");
        break;
    default:
      next(action);
  }
};

// == Export
export default apiMiddleware;
