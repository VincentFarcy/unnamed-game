// npm imports
import { connect } from 'react-redux';

// local imports
import MainHub from '../components/Mainhub';
import { actionRest } from '../actions/gamePlay';

// state
const mapStateToProps = (state) => ({
  medicAccess: state.gameplay.gameParameters.medic_access_probability,
  trainAccess: state.gameplay.gameParameters.train_room_access_probability,
  jsx: state.gameplay.player.jsx,
  xp: state.gameplay.player.xp,
  xpCost: state.gameplay.gameParameters.train_xp_cost,
});

// actions
const mapDispatchToProps = (dispatch) => ({
  actionRest: () => {
    dispatch(actionRest());
  },
});


// export
export default connect(mapStateToProps, mapDispatchToProps)(MainHub);
