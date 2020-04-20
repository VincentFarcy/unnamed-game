// npm imports
import { connect } from 'react-redux';
import { findOpponentForCombat } from '../reducers/gameplay.js'

// local imports
import Combat from '../components/Combat';

// state
const mapStateToProps = (state) => ({
  isCombatOn: state.gameplay.combat.combatStatus,
  opponent: findOpponentForCombat(state),
});

// actions
const mapDispatchToProps = (dispatch) => ({
});


// export
export default connect(mapStateToProps, mapDispatchToProps)(Combat);
