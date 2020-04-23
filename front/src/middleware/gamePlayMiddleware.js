// == npm imports
import axios from 'axios';

// local imports
import { 
  FETCH_INITIALE_GAME_DATA,
  GAME_BACKUP,
  gameDataSuccess,
  gameDataError,
} from '../actions/gamePlay';

import { BASE_API_URI } from '../app.config';

// == Api Middleware
const apiMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_INITIALE_GAME_DATA:
      store.getState().gameplay.isLoading = true;
      axios({
        url: `${BASE_API_URI}/api/game/load`,
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
      case GAME_BACKUP:
        const state = store.getState();
        axios({
          method: 'post',
          url: `${BASE_API_URI}/api/game/backup`,
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${state.user.tokenJWT}`,
          },
          data: {
            'sequenceId' : state.gameplay.sequenceToTell.id,
            'hero' : {
              'name' : 'hero',
              'gender' : 'm',
            },
            'name' : 'save',
            'strength' : state.gameplay.abilities.find(ability => name='Force').value,
            'agility' :  state.gameplay.abilities.find(ability => name='Agilité').value,
            'constitution' : state.gameplay.abilities.find(ability => name='Constitution').value,
            'will' : state.gameplay.abilities.find(ability => name='Volonté').value,
            'intelligence' : state.gameplay.abilities.find(ability => name='Intelligence').value,
            'health' : state.gameplay.player.playerCurrentHP,
            'money' :  state.gameplay.jsx,
            'xp' : state.gameplay.xp,
          },
        })
          .then((res) => {
            console.log("backup res", res);
          })
          .catch((err) => {
            console.log("backup err", err.response.data);
          });
        break;
    default:
      next(action);
  }
};

// == Export
export default apiMiddleware;
