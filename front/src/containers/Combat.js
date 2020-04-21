// npm imports
import { connect } from 'react-redux';

// local imports
import Combat from '../components/Combat';
import { findOpponent, applyDamage, runAway } from '../actions/gamePlay';

// state
const mapStateToProps = (state) => ({
  opponent: state.gameplay.combat.currentOpponent,
  player: state.gameplay.player,
  isCombatOn: state.gameplay.combat.isCombatOn,
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
});


// export
export default connect(mapStateToProps, mapDispatchToProps)(Combat);
