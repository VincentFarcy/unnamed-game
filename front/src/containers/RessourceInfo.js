// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import RessourceInfo from 'src/components/RessourceInfo';

// Action Creators

/* === State (données) === */
const mapStateToProps = (state) => ({
  mainCounter: state.gameplay.phpTimer,
  experience: state.gameplay.player.xp,
  money: state.gameplay.player.jsx,
});

/* === Actions === */
const mapDispatchToProps = {};

// Container
const RessourceInfoContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(RessourceInfo);

// == Export
export default RessourceInfoContainer;
