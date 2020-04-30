// npm imports
import { connect } from 'react-redux';

// local imports
import Event from '../components/Event';
import { nextSequence, findEvent } from '../actions/gamePlay';

// state
const mapStateToProps = (state) => ({
  eventDifficulty: state.gameplay.difficulty,
  playerRoll: state.gameplay.playerRoll,
  hacking: state.gameplay.player.hacking,
  php: state.gameplay.phpTimer,
});

// actions
const mapDispatchToProps = (dispatch) => ({
  nextSequence: () => {
    dispatch(nextSequence());
  },
  findEvent: () => {
    dispatch(findEvent());
  },
});


// export
export default connect(mapStateToProps, mapDispatchToProps)(Event);
