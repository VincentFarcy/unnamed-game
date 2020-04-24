// npm imports
import { connect } from 'react-redux';
import {
  changeGameStatus,
  fetchInitialeGameData,
  startBackupLoading,
} from '../actions/gamePlay';

// local imports
import MainPlay from '../components/MainPlay';

// state
const mapStateToProps = (state) => ({
  hasError: state.gameplay.hasError,
  gameOn: state.gameplay.gameOn,
  hasBackup: (state.user.backups) ? state.user.backups.length > 0 : false,
});

// actions
const mapDispatchToProps = (dispatch) => ({
  startGame: () => {
    dispatch(changeGameStatus());
  },
  fetchInitialeGameData: () => {
    dispatch(fetchInitialeGameData());
  },
  startBackupLoading: () => {
    dispatch(startBackupLoading());
  },
});

// export
export default connect(mapStateToProps, mapDispatchToProps)(MainPlay);
