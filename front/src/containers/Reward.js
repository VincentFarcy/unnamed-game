// npm imports
import { connect } from 'react-redux';

// local imports
import Reward from '../components/Reward';
import { findRandomReward, nextSequence } from '../actions/gamePlay';

// state
const mapStateToProps = (state) => ({
  xpReward: state.gameplay.rewards.xpRoll,
  jsxReward: state.gameplay.rewards.jsxRoll,
});

// actions
const mapDispatchToProps = (dispatch) => ({
  findRandomReward: () => {
    dispatch(findRandomReward());
  },
  nextSequence: () => {
    dispatch(nextSequence());
  },
});


// export
export default connect(mapStateToProps, mapDispatchToProps)(Reward);
