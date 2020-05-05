// npm imports
import { connect } from 'react-redux';

// local imports
import Sequence from '../components/Sequence';

// Action Creators
import { findSequence, changeBg, gameBackup } from '../actions/gamePlay';

// state
const mapStateToProps = (state) => ({
  sequence: state.gameplay.sequenceToTell,
  php: state.gameplay.phpTimer,
  hp: state.gameplay.player.playerCurrentHP,
});

// actions
const mapDispatchToProps = (dispatch) => ({
  findSequence: () => {
    dispatch(findSequence());
  },
  changeBg: (bgImageCssClass) => {
    dispatch(changeBg(bgImageCssClass));
  },
  gameBackup: () => {
    dispatch(gameBackup());
  },
});

// export
export default connect(mapStateToProps, mapDispatchToProps)(Sequence);
