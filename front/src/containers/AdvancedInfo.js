// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import AdvancedInfo from 'src/components/AdvancedInfo';

// Action Creators

/* === State (données) === */
const mapStateToProps = (state) => ({
  abilities: state.gameplay.player.abilities,
  baseToHit: state.gameplay.player.baseTouch,
  baseAvoid: state.gameplay.player.dodge,
  baseDamage: state.gameplay.player.baseDamage,
  baseInitiative: state.gameplay.player.baseSpeed,
  healing: state.gameplay.player.baseHealing,
  hacking: state.gameplay.player.hacking,
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
