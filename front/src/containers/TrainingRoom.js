// npm imports
import { connect } from 'react-redux';

// local imports
import Training from '../components/TrainingRoom';
import { incrementAbility } from '../actions/gamePlay';


// state
const mapStateToProps = (state) => ({
  xp: state.gameplay.player.xp,
  fullAccess: state.gameplay.gameParameters.train_full_access_probability,
  trainGain: state.gameplay.gameParameters.train_gain,
  roomAccess: state.gameplay.gameParameters.train_room_access_probability,
});

// actions
const mapDispatchToProps = (dispatch) => ({
  incrementAbility: (ability) => {
    dispatch(incrementAbility(ability));
  },
});


// export
export default connect(mapStateToProps, mapDispatchToProps)(Training);
