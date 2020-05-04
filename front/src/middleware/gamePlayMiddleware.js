// == npm imports
import axios from 'axios';

// local imports
import {
  FETCH_INITIALE_GAME_DATA,
  GAME_BACKUP,
  gameDataSuccess,
  gameDataError,
  loadBackupData,
} from '../actions/gamePlay';
import {
  refreshUserBackups,
} from '../actions/user';

import { BASE_API_URI } from '../app.config';

// == Api Middleware
const apiMiddleware = (store) => (next) => (action) => {
  const state = store.getState();

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

          // Load backups
          if (store.getState().gameplay.backupIsLoading) {
            store.dispatch(loadBackupData(store.getState().user.backups));
          }
        })
        .catch(() => {
          store.getState().gameplay.hasError = true;
          store.dispatch(gameDataError());
        });
      break;
    case GAME_BACKUP:
      // Check if token JWT exist
      if (state.user.tokenJWT !== '' && state.gameplay.sequenceToTell.id !== 99) {
        // HeroId if exists
        let heroId = null;
        if (state.user.backups.length > 0) {
          heroId = state.user.backups[0].hero.id;
        }
        axios({
          method: 'post',
          url: `${BASE_API_URI}/api/game/backup`,
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${state.user.tokenJWT}`,
          },
          data: {
            sequenceId: state.gameplay.sequenceToTell.id,
            hero: {
              id: heroId,
              name: 'hero',
              gender: 'm',
            },
            name: 'save',
            strength: state.gameplay.player.abilities.find((ability) => ability.name === 'Force').value,
            agility: state.gameplay.player.abilities.find((ability) => ability.name === 'Agilité').value,
            constitution: state.gameplay.player.abilities.find((ability) => ability.name === 'Constitution').value,
            will: state.gameplay.player.abilities.find((ability) => ability.name === 'Volonté').value,
            intelligence: state.gameplay.player.abilities.find((ability) => ability.name === 'Intelligence').value,
            health: state.gameplay.player.playerCurrentHP,
            money: state.gameplay.player.jsx,
            xp: state.gameplay.player.xp,
          },
        })
          .then((res) => {
            store.dispatch(refreshUserBackups(res.data.backups));
          })
          .catch((err) => {
            console.log('backup impossible', err.data);
          });
      }
      break;
    default:
      next(action);
  }
};

// == Export
export default apiMiddleware;
