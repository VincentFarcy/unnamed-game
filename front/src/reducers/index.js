// == Import : local
import { combineReducers } from 'redux';
import gameplay from './gameplay';
import user from './user';
import menu from './menu';

// == Export
const rootReducer = combineReducers({
  gameplay,
  user,
  menu,
});

export default rootReducer;
