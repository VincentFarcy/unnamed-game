// npm imports
import { connect } from 'react-redux';

// local imports
import Exploration from '../components/Exploration';
import { findExploration, eventNothing } from '../actions/gamePlay';

// state
const mapStateToProps = (state) => ({
  randomExploration: state.gameplay.exploration,
});

// actions
const mapDispatchToProps = (dispatch) => ({
  findExploration: () => {
    dispatch(findExploration());
  },
  eventNothing: () => {
    dispatch(eventNothing());
  },
});


// export
export default connect(mapStateToProps, mapDispatchToProps)(Exploration);
