// npm imports
import { connect } from 'react-redux';
import {
  startGame,
  fetchInitialeGameData,
  startBackupLoading,
  restartMusic,
} from '../actions/gamePlay';

// local imports
import MainPlay from '../components/MainPlay';

// state
const mapStateToProps = (state) => ({
  hasError: state.gameplay.hasError,
  hasBackup: (state.user.backups) ? state.user.backups.length > 0 : false,
});

// actions
const mapDispatchToProps = (dispatch) => ({
  startGame: () => {
    dispatch(startGame());
  },
  fetchInitialeGameData: () => {
    dispatch(fetchInitialeGameData());
  },
  startBackupLoading: () => {
    dispatch(startBackupLoading());
  },
  restartMusic: () => {
    dispatch(restartMusic());
  },
});

// export
export default connect(mapStateToProps, mapDispatchToProps)(MainPlay);
