// == Import : local
import { combineReducers } from 'redux';
import gameplay from './gameplay';
import user from './user';
import menu from './menu';

// == Export
export default combineReducers({
  gameplay,
  user,
  menu,
});
