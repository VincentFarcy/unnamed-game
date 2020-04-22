// npm imports
import { connect } from 'react-redux';

// local imports
import Reward from '../components/Reward';

// state
const mapStateToProps = (state) => ({
  rewardContent: state.gameplay.chapters[0].randomRewards,
});

// actions
const mapDispatchToProps = {};


// export
export default connect(mapStateToProps, mapDispatchToProps)(Reward);
