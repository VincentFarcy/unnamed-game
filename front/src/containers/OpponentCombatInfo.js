// npm imports
import { connect } from 'react-redux';

// local imports
import OpponentInfo from '../components/Combat/OpponentCombatInfo';
import { findOpponent } from '../actions/gamePlay';

// state
const mapStateToProps = (state) => ({
  currentOpponent: state.gameplay.combat.currentOpponent,
});

// actions
const mapDispatchToProps = (dispatch) => ({
  findOpponent: () => {
    dispatch(findOpponent());
  },
});


// export
export default connect(mapStateToProps, mapDispatchToProps)(OpponentInfo);
