// npm imports
import { connect } from 'react-redux';

// local imports
import Combat from '../components/Combat';
import { findOpponent, applyDamage, runAway, endFight } from '../actions/gamePlay';

// state
const mapStateToProps = (state) => ({
  opponent: state.gameplay.combat.currentOpponent,
  player: state.gameplay.player,
  isCombatOn: state.gameplay.combat.isCombatOn,
  gameParameters: state.gameplay.gameParameters,
});

// actions
const mapDispatchToProps = (dispatch) => ({
  findOpponent: () => {
    dispatch(findOpponent());
  },
  applyDamage: (damage) => {
    dispatch(applyDamage(damage));
  },
  runAway: () => {
    dispatch(runAway());
  },
  endFight: () => {
    dispatch(endFight());
  },
});


// export
export default connect(mapStateToProps, mapDispatchToProps)(Combat);
