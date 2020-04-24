// npm imports
import { connect } from 'react-redux';

// local imports
import Medic from '../components/MedicBay';
import { actionMedic, actionMedicFail } from '../actions/gamePlay';

// state
const mapStateToProps = (state) => ({
  jsx: state.gameplay.jsx,
});

// actions
const mapDispatchToProps = (dispatch) => ({
  actionMedic: () => {
    dispatch(actionMedic());
  },
  actionMedicFail: () => {
    dispatch(actionMedicFail());
  },
});


// export
export default connect(mapStateToProps, mapDispatchToProps)(Medic);
