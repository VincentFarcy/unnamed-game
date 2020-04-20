// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import AdvancedInfo from 'src/components/AdvancedInfo';

// Action Creators

/* === State (données) === */
const mapStateToProps = (state, ownProps) => ({
  abilities: state.gameplay.abilities,
  playerHp: state.gameplay.playerHp,
  baseToHit: state.gameplay.baseToHit,
  baseAvoid: state.gameplay.baseAvoid,
  baseDamage: state.gameplay.baseDamage,
  baseInitiative: state.gameplay.baseInitiative,
});

/* === Actions === */
const mapDispatchToProps = {};

// Container
const AdvancedInfoContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AdvancedInfo);

// == Export
export default AdvancedInfoContainer;


