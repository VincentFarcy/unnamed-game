// npm imports
import { connect } from 'react-redux';

// local imports
import Event from '../components/Event';
import { updateTimer } from '../actions/gamePlay';

// state
const mapStateToProps = (state) => ({
  eventDifficulty: state.gameplay.difficulty,
  playerRoll: state.gameplay.playerRoll,
  hacking: state.gameplay.player.hacking,
});

// actions
const mapDispatchToProps = (dispatch) => ({
  updateTimer: () => {
    dispatch(updateTimer());
  },
});


// export
export default connect(mapStateToProps, mapDispatchToProps)(Event);
