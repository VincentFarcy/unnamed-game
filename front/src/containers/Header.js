// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Header from 'src/components/Header';

// Action Creators
import { initUserState } from '../actions/user';
import { toggleMenu } from '../actions/menu';
import { changeGameStatus, resetGame, changeBg } from '../actions/gamePlay';

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
  changeBg: (bgImageCssClass) => {
    dispatch(changeBg(bgImageCssClass));
  },
});

// Container
const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);

// == Export
export default HeaderContainer;
