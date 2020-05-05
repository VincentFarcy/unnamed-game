// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import App from 'src/components/App';

// Action Creators

/* === State (données) === */
const mapStateToProps = (state) => ({
  isGameOn: state.gameplay.gameOn,
  bgImageCssClass: state.gameplay.bgImageCssClass,
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
