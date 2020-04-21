// npm imports
import { connect } from 'react-redux';

// local imports
import Combat from '../components/Combat';
import { runAway } from '../actions/gamePlay';
import {} from '../func';

// state
const mapStateToProps = (state) => ({
  opponent: state.gameplay.combat.currentOpponent,
  isCombatOn: state.gameplay.combat.combatStatus,
});

// actions
const mapDispatchToProps = (dispatch) => ({
  fight: () => {
    console.log('fight');
    // initialize Player and Opponent's Life Point
  },
  runAway: () => {
    dispatch(runAway());
  },
});


// export
export default connect(mapStateToProps, mapDispatchToProps)(Combat);
