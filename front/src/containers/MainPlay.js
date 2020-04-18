// npm imports
import { connect } from 'react-redux';
import { changeGameStatus, fetchInitialeGameData } from '../actions/gamePlay';

// local imports
import MainPlay from '../components/MainPlay';

// state
const mapStateToProps = (state) => ({
  hasError: state.gameplay.hasError,
});

// actions
const mapDispatchToProps = (dispatch) => ({
  startGame: () => {
    dispatch(changeGameStatus());
  },
  fetchInitialeGameData: () => {
    dispatch(fetchInitialeGameData());
  },
});

// export
export default connect(mapStateToProps, mapDispatchToProps)(MainPlay);
