// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Header from 'src/components/Header';
import { changeGameStatus } from '../actions/gamePlay';

// Action Creators
import { initUserState } from '../actions/user';

/* === State (données) === */
const mapStateToProps = (state) => ({
  isLogged: state.user.isLogged,
});

/* === Actions === */
const mapDispatchToProps = (dispatch) => ({
  startGame: () => {
    dispatch(changeGameStatus());
  },
  initUserState: () => {
    dispatch(initUserState());
  },
});

// Container
const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);

// == Export
export default HeaderContainer;
