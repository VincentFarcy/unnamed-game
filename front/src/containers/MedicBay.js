// npm imports
import { connect } from 'react-redux';

// local imports
import Medic from '../components/MedicBay';
import { actionMedic } from '../actions/gamePlay';

// state
const mapStateToProps = (state) => ({
  jsx: state.gameplay.player.jsx,
  php: state.gameplay.phpTimer,
  hp: state.gameplay.player.playerCurrentHP,
});

// actions
const mapDispatchToProps = (dispatch) => ({
  actionMedic: () => {
    dispatch(actionMedic());
  },
});


// export
export default connect(mapStateToProps, mapDispatchToProps)(Medic);
