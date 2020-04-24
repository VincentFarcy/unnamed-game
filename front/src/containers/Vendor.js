// npm imports
import { connect } from 'react-redux';

// local imports
import Vendor from '../components/Vendor';
import { updateTimer } from '../actions/gamePlay';

// state
const mapStateToProps = (state) => ({
  jsx: state.gameplay.player.jsx,
  php: state.gameplay.playerRoll,
});

// actions
const mapDispatchToProps = (dispatch) => ({
  updateTimer: () => {
    dispatch(updateTimer());
  },
});


// export
export default connect(mapStateToProps, mapDispatchToProps)(Vendor);
