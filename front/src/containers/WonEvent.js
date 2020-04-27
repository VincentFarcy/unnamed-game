// npm imports
import { connect } from 'react-redux';

// local imports
import WonEvent from '../components/Event/WonEvent';
import { eventWin } from '../actions/gamePlay';

// state
const mapStateToProps = (state) => ({
  php: state.gameplay.phpTimer,
});

// actions
const mapDispatchToProps = (dispatch) => ({
  eventWin: () => {
    dispatch(eventWin());
  },
});

// export
export default connect(mapStateToProps, mapDispatchToProps)(WonEvent);
