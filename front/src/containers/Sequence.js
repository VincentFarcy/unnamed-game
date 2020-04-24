// npm imports
import { connect } from 'react-redux';

// local imports
import Sequence from '../components/Sequence';

// Action Creators
import { findSequence, changeBg } from '../actions/gamePlay';

// state
const mapStateToProps = (state) => ({
  sequence: state.gameplay.sequenceToTell,
  php: state.gameplay.phpTimer,
});

// actions
const mapDispatchToProps = (dispatch) => ({
  findSequence: () => {
    dispatch(findSequence());
  },
  changeBg: (bgImageCssClass) => {
    dispatch(changeBg(bgImageCssClass));
  },
});

// export
export default connect(mapStateToProps, mapDispatchToProps)(Sequence);
