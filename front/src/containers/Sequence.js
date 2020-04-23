// npm imports
import { connect } from 'react-redux';

// local imports
import Sequence from '../components/Sequence';
import { findSequence } from '../actions/gamePlay';

// Action Creators
import { changeBg } from '../actions/gamePlay';

// state
const mapStateToProps = (state) => ({
  sequence: state.gameplay.sequenceToTell,
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
