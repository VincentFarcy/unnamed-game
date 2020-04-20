// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Header from 'src/components/Header';

// Action Creators
import { initUserState } from '../actions/user';

/* === State (données) === */
const mapStateToProps = (state) => ({
  isLogged: state.user.isLogged,
});

/* === Actions === */
const mapDispatchToProps = (dispatch) => ({
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
