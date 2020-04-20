// npm imports
import { connect } from 'react-redux';

// local imports
import PlayerInfo from '../components/PlayerInfo';

// state
const mapStateToProps = (state) => ({
  // mainCounter: state.gameplay.phpTimer,
  playerHp: state.gameplay.playerHp,
});

// actions
const mapDispatchToProps = {};


// export
export default connect(mapStateToProps, mapDispatchToProps)(PlayerInfo);
