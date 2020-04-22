// npm imports
import { connect } from 'react-redux';

// local imports
import Reward from '../components/Reward';
import { findRandomReward } from '../actions/gamePlay';

// state
const mapStateToProps = (state) => ({
  currentReward: state.gameplay.rewards,
});

// actions
const mapDispatchToProps = (dispatch) => ({
  findRandomReward: () => {
    dispatch(findRandomReward());
  },
});


// export
export default connect(mapStateToProps, mapDispatchToProps)(Reward);
