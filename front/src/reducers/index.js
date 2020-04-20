// == Import : local
import { combineReducers } from 'redux';
import gameplay from './gameplay';
import user from './user';

// == Export
const rootReducer = combineReducers({
  gameplay,
  user,
});

export default rootReducer;
