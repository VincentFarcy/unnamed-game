// npm imports
import { connect } from 'react-redux';

// local imports
import WonEvent from '../components/Event/WonEvent';
import { eventWin } from '../actions/gamePlay';

// state
const mapStateToProps = (state) => ({
  eventRewardXp: state.gameplay.eventRewards.xp,
  eventRewardJsx: state.gameplay.eventRewards.jsx,
});

// actions
const mapDispatchToProps = (dispatch) => ({
  eventWin: () => {
    dispatch(eventWin());
  },
});

// export
export default connect(mapStateToProps, mapDispatchToProps)(WonEvent);
