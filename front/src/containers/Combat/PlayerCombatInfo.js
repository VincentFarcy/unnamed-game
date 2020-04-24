// npm imports
import { connect } from 'react-redux';

// local imports
import PlayerCombatInfo from '../../components/Combat/PlayerCombatInfo';

// state
const mapStateToProps = (state) => ({
  playerTotalHP: state.gameplay.player.playerTotalHP,
  playerCurrentHP: state.gameplay.player.playerCurrentHP,
});

// actions
const mapDispatchToProps = {};


// export
export default connect(mapStateToProps, mapDispatchToProps)(PlayerCombatInfo);
