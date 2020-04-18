// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Header from 'src/components/Header';
import { changeGameStatus } from '../actions/gamePlay';

// Action Creators

/* === State (données) === */
const mapStateToProps = (state, ownProps) => ({
  isLogged: false,
});

/* === Actions === */
const mapDispatchToProps = (dispatch) => ({
  startGame: () => {
    dispatch(changeGameStatus());
  },
});

// Container
const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);

// == Export
export default HeaderContainer;
