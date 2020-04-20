// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Header from 'src/components/Header';
import { changeGameStatus, resetGame } from '../actions/gamePlay';

// Action Creators
import { initUserState } from '../actions/user';

/* === State (données) === */
const mapStateToProps = (state) => ({
  isLogged: state.user.isLogged,
});

/* === Actions === */
const mapDispatchToProps = (dispatch) => ({
  resetGame: () => {
    console.log('resetGame');
    dispatch(resetGame());
  },
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
