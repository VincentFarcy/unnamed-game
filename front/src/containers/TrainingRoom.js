// npm imports
import { connect } from 'react-redux';

// local imports
import Training from '../components/TrainingRoom';
import { incrementAbility, nextSequence } from '../actions/gamePlay';


// state
const mapStateToProps = (state) => ({
  fullAccess: state.gameplay.gameParameters.train_full_access_probability,
  // trainGain: state.gameplay.gameParameters.train_gain,
  roomAccess: state.gameplay.gameParameters.train_room_access_probability,
  php: state.gameplay.phpTimer,
  hp: state.gameplay.player.playerCurrentHP,
  strength: state.gameplay.player.abilities[0].value,
  agility: state.gameplay.player.abilities[1].value,
  constitution: state.gameplay.player.abilities[2].value,
  will: state.gameplay.player.abilities[3].value,
  intelligence: state.gameplay.player.abilities[4].value,
  jsx: state.gameplay.player.jsx,
  xp: state.gameplay.player.xp,
  xpCost: state.gameplay.gameParameters.train_xp_cost,
  jsxCost: state.gameplay.gameParameters.train_money_cost,
});

// actions
const mapDispatchToProps = (dispatch) => ({
  incrementAbility: (ability) => {
    dispatch(incrementAbility(ability));
  },
  // nextSequence: () => {
  //   dispatch(nextSequence());
  // },
});


// export
export default connect(mapStateToProps, mapDispatchToProps)(Training);
