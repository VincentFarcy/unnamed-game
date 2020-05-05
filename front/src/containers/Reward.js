// npm imports
import { connect } from 'react-redux';

// local imports
import Reward from '../components/Reward';
import { findRandomReward, nextSequence, addOpponnentReward } from '../actions/gamePlay';

// state
const mapStateToProps = (state) => ({
  xpReward: state.gameplay.rewards.xpRoll,
  jsxReward: state.gameplay.rewards.jsxRoll,
  eventRewardXp: state.gameplay.eventRewards.xp,
  eventRewardJsx: state.gameplay.eventRewards.jsx,
  xpCombatReward: state.gameplay.combat.currentOpponent.xpGain,
  jsxCombatReward: state.gameplay.combat.currentOpponent.moneyGain,
});

// actions
const mapDispatchToProps = (dispatch) => ({
  addOpponnentReward: () => {
    dispatch(addOpponnentReward());
  },
  findRandomReward: () => {
    dispatch(findRandomReward());
  },
  nextSequence: () => {
    dispatch(nextSequence());
  },
});


// export
export default connect(mapStateToProps, mapDispatchToProps)(Reward);
