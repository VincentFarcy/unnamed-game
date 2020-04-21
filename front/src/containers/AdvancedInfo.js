// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import AdvancedInfo from 'src/components/AdvancedInfo';

// Action Creators

/* === State (données) === */
const mapStateToProps = (state, ownProps) => ({
  abilities: state.gameplay.abilities,
  playerHp: state.gameplay.playerTotalHP,
  baseToHit: state.gameplay.player.baseToHit,
  baseAvoid: state.gameplay.player.baseAvoid,
  baseDamage: state.gameplay.player.baseDamage,
  baseInitiative: state.gameplay.player.baseInitiative,
  healing: state.gameplay.player.healing,
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


