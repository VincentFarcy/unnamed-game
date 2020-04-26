// npm imports
import { connect } from 'react-redux';

// local imports
import MainHub from '../components/Mainhub';

// state
const mapStateToProps = (state) => ({
  medicAccess: state.gameplay.gameParameters.medic_access_probability,
  trainAccess: state.gameplay.gameParameters.train_room_access_probability,
  vendingAccess: state.gameplay.gameParameters.vending_access_probability,
  jsx: state.gameplay.player.jsx,
  xp: state.gameplay.player.xp,
  xpCost: state.gameplay.gameParameters.train_xp_cost,
  php: state.gameplay.phpTimer,
});

// actions
const mapDispatchToProps = (dispatch) => ({
});


// export
export default connect(mapStateToProps, mapDispatchToProps)(MainHub);
