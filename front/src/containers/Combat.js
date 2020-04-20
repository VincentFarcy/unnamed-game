// npm imports
import { connect } from 'react-redux';

// local imports
import Combat from '../components/Combat';
import { findOpponentForCombat } from '../reducers/gameplay.js';
import { runAway } from '../actions/gamePlay';

// state
const mapStateToProps = (state) => ({
  opponent: findOpponentForCombat(state),
  isCombatOn: state.gameplay.combat.combatStatus,
});

// actions
const mapDispatchToProps = (dispatch) => ({
  runAway: () => {
    dispatch(runAway());
  },
});


// export
export default connect(mapStateToProps, mapDispatchToProps)(Combat);
