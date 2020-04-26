// npm imports
import { connect } from 'react-redux';

// local imports
import Event from '../components/Event';
import { updateTimer, eventWin, findEvent } from '../actions/gamePlay';

// state
const mapStateToProps = (state) => ({
  eventDifficulty: state.gameplay.difficulty,
  playerRoll: state.gameplay.playerRoll,
  hacking: state.gameplay.player.hacking,
  php: state.gameplay.phpTimer,
});

// actions
const mapDispatchToProps = (dispatch) => ({
  updateTimer: () => {
    dispatch(updateTimer());
  },
  eventWin: () => {
    dispatch(eventWin());
  },
  findEvent: () => {
    dispatch(findEvent());
  },
});


// export
export default connect(mapStateToProps, mapDispatchToProps)(Event);
