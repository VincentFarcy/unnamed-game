// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import App from 'src/components/App';

// Action Creators

/* === State (données) === */
const mapStateToProps = (state, ownProps) => ({
  isGameOn: state.gameplay.gameOn,
});

/* === Actions === */
const mapDispatchToProps = {};

// Container
const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

// == Export
export default AppContainer;
