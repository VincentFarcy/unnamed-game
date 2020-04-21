// npm imports
import { connect } from 'react-redux';

// local imports
import PlayerInfo from '../components/PlayerInfo';

// state
const mapStateToProps = (state) => ({
  mainCounter: state.gameplay.phpTimer,
  totalPlayerHP: state.gameplay.player.totalPlayerHP,
  playerCurrentHP: state.gameplay.player.playerCurrentHP,
});

// actions
const mapDispatchToProps = {};


// export
export default connect(mapStateToProps, mapDispatchToProps)(PlayerInfo);
