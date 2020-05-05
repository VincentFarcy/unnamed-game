// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Header from 'src/components/Header';

// Action Creators
import { initUserState } from '../../actions/user';
import { toggleMenu } from '../../actions/menu';
import { changeBg, restartMusic } from '../../actions/gamePlay';


/* === State (données) === */
const mapStateToProps = (state) => ({
  isLogged: state.user.isLogged,
  isExpanded: state.menu.isExpanded,
});

/* === Actions === */
const mapDispatchToProps = (dispatch) => ({
  initUserState: () => {
    dispatch(initUserState());
  },
  toggleMenu: (toggle) => {
    dispatch(toggleMenu(toggle));
  },
  changeBg: (bgImageCssClass) => {
    dispatch(changeBg(bgImageCssClass));
  },
  restartMusic: () => {
    dispatch(restartMusic());
  },
});

// Container
const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);

// == Export
export default HeaderContainer;
