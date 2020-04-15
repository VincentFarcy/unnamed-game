// == npm imports

// local imports
import { FETCH_INITIALE_GAME_DATA } from '../actions/api';

// == Api Middleware
const apiMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_INITIALE_GAME_DATA:
      console.log('action pour récupérer les datas dans le middleware');
      break;
    default: 
    console.log('apiState :', store.getState());
    console.log('apiMiddleware: ', action);
    next(action);
  }
};

// == Export
export default apiMiddleware;
