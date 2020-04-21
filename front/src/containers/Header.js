// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Header from 'src/components/Header';
import { changeGameStatus, resetGame } from '../actions/gamePlay';

// Action Creators
import { initUserState } from '../actions/user';
import { toggleMenu } from '../actions/menu';

/* === State (données) === */
const mapStateToProps = (state) => ({
  isLogged: state.user.isLogged,
  isExpanded: state.menu.isExpanded,
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
  toggleMenu: (toggle) => {
    dispatch(toggleMenu(toggle));
  },
});

// Container
const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);

// == Export
export default HeaderContainer;
