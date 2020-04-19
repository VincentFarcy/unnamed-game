// npm imports
import { connect } from 'react-redux';
import { findOpponent } from '../actions/gamePlay'

// local imports
import Combat from '../components/Combat';

// state
const mapStateToProps = (state) => ({
  // opponents: state.gameplay.opponents,
  // opponentsTable: state.gameplay.chapters[0].randomFightContests,
  // playerHp: ((state.gameplay.abilities[3].value / 2) + (state.gameplay.abilities[2].value)) * 10,
});

// actions
const mapDispatchToProps = (dispatch) => ({
  findOpponent: () => {
    dispatch(findOpponent());
  },
});


// export
export default connect(mapStateToProps, mapDispatchToProps)(Combat);
