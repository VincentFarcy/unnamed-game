// npm imports
import { connect } from 'react-redux';

// local imports
import PlayerCombatInfo from '../components/Combat/PlayerCombatInfo.js';

// state
const mapStateToProps = (state) => ({
  totalPlayerHP: state.gameplay.player.totalPlayerHP,
  playerCurrentHP: state.gameplay.player.playerCurrentHP,
});

// actions
const mapDispatchToProps = {};


// export
export default connect(mapStateToProps, mapDispatchToProps)(PlayerCombatInfo);
