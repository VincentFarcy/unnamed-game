// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import ConnectedUserNav from 'src/components/Header/ConnectedUserNav';

// Action Creators
import { logout } from '../../actions/user';

/* === State (données) === */
const mapStateToProps = (state) => ({
  pseudo: state.user.connectedUser.pseudo,
});

/* === Actions === */
const mapDispatchToProps = (dispatch) => ({
  handleLogout: () => {
    dispatch(logout());
  },
});

// Container
const ConnectedUserNavContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ConnectedUserNav);

// == Export
export default ConnectedUserNavContainer;
