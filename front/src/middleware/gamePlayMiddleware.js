// == npm imports
import axios from 'axios';

// local imports
import { FETCH_INITIALE_GAME_DATA, gameDataSuccess, gameDataError } from '../actions/gamePlay';
import { BASE_API_URI } from '../app.config';

// == Api Middleware
const apiMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_INITIALE_GAME_DATA:
      store.getState().gameplay.isLoading = true;
      axios({
        url: `${BASE_API_URI}/api/game/loa`,
        method: 'get',
      })
        .then((res) => {
          store.getState().gameplay.isLoading = false;
          store.dispatch(gameDataSuccess(res.data));
        })
        .catch(() => {
          store.getState().gameplay.hasError = true;
          store.dispatch(gameDataError());
        });
      break;
    default:
      next(action);
  }
};

// == Export
export default apiMiddleware;
