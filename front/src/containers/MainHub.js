// npm imports
import { connect } from 'react-redux';

// local imports
import MainHub from '../components/Mainhub';
import { actionRest, startMission, nextSequence } from '../actions/gamePlay';


// state
const mapStateToProps = (state) => ({
  medicAccess: state.gameplay.gameParameters.medic_access_probability,
  trainAccess: state.gameplay.gameParameters.train_access_probability,
  jsx: state.gameplay.player.jsx,
  xp: state.gameplay.player.xp,
  xpCost: state.gameplay.gameParameters.train_xp_cost,
  jsxCost: state.gameplay.gameParameters.train_money_cost,
  php: state.gameplay.phpTimer,
  hp: state.gameplay.player.playerCurrentHP,
});

// actions
const mapDispatchToProps = (dispatch) => ({
  actionRest: () => {
    dispatch(actionRest());
  },
  startMission: () => {
    dispatch(startMission());
  },
  nextSequence: () => {
    dispatch(nextSequence());
  },
});


// export
export default connect(mapStateToProps, mapDispatchToProps)(MainHub);
