// npm imports
import { connect } from 'react-redux';

// local imports
import PlayerCombatInfo from '../components/Combat/PlayerCombatInfo.js';

// state
const mapStateToProps = (state) => ({
  playerHp: state.gameplay.playerHp,
});

// actions
const mapDispatchToProps = {};


// export
export default connect(mapStateToProps, mapDispatchToProps)(PlayerCombatInfo);
