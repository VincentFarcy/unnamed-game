// npm imports
import { connect } from 'react-redux';

// local imports
import Reward from '../components/Reward';

// state
const mapStateToProps = (state) => ({
  // WIP: for now it comes from the initial state
  rewardContent: state.gameplay.rewards[0],

});

// actions
const mapDispatchToProps = {};


// export
export default connect(mapStateToProps, mapDispatchToProps)(Reward);
