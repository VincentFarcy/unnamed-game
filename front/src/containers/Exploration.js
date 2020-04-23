// npm imports
import { connect } from 'react-redux';

// local imports
import Exploration from '../components/Exploration';
import { findExploration } from '../actions/gamePlay';

// state
const mapStateToProps = (state) => ({
  randomExploration: state.gameplay.exploration,
});

// actions
const mapDispatchToProps = (dispatch) => ({
  findExploration: () => {
    dispatch(findExploration());
  },
});


// export
export default connect(mapStateToProps, mapDispatchToProps)(Exploration);
