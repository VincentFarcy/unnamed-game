// npm imports
import { connect } from 'react-redux';

// local imports
import Medic from '../components/MedicBay';
import { actionMedic } from '../actions/gamePlay';

// state
const mapStateToProps = (state) => ({
  jsx: state.gameplay.player.jsx,
});

// actions
const mapDispatchToProps = (dispatch) => ({
  actionMedic: () => {
    dispatch(actionMedic());
  },
});


// export
export default connect(mapStateToProps, mapDispatchToProps)(Medic);
