// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import ConnectedUserNav from 'src/components/Header/ConnectedUserNav';

// Action Creators


/* === State (données) === */
const mapStateToProps = (state, ownProps) => ({
  pseudo: state.user.connectedUser.user.pseudo,
});

/* === Actions === */
const mapDispatchToProps = (dispatch) => ({
});

// Container
const ConnectedUserNavContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ConnectedUserNav);

// == Export
export default ConnectedUserNavContainer;
