// npm imports
import { connect } from 'react-redux';

// local imports
import Death from '../components/Death';
import { restartNewGame } from '../actions/gamePlay';

// state
const mapStateToProps = null;

// actions
const mapDispatchToProps = (dispatch) => ({
  restartNewGame: () => {
    dispatch(restartNewGame());
  },
});


// export
export default connect(mapStateToProps, mapDispatchToProps)(Death);
