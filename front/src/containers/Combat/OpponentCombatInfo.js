// npm imports
import { connect } from 'react-redux';

// local imports
import OpponentInfo from '../../components/Combat/OpponentCombatInfo';

// state
const mapStateToProps = (state) => ({
  currentOpponent: state.gameplay.combat.currentOpponent,
});

// actions
const mapDispatchToProps = {};


// export
export default connect(mapStateToProps, mapDispatchToProps)(OpponentInfo);
