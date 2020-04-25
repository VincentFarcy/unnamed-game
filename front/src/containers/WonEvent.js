// npm imports
import { connect } from 'react-redux';

// local imports
import WonEvent from '../components/Event/WonEvent';
import { eventWin } from '../actions/gamePlay';

// state
const mapStateToProps = (state) => ({
  playerXp: state.gameplay.player.xp,
  playerJsx: state.gameplay.player.jsx,
});

// actions
const mapDispatchToProps = (dispatch) => ({
  eventWin: () => {
    dispatch(eventWin());
  },
});

// export
export default connect(mapStateToProps, mapDispatchToProps)(WonEvent);
