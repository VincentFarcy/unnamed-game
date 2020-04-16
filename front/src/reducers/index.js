// == Import : local
import { combineReducers } from 'redux';
import gameplay from './gameplay';
import user from './user';

// == Export
export default combineReducers({
  gameplay,
  user,
});
