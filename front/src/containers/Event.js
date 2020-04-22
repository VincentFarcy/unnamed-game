// npm imports
import { connect } from 'react-redux';

// local imports
import Event from '../components/Event';
import { findEvent } from '../actions/gamePlay';

// state
const mapStateToProps = (state) => ({
  event: state.gameplay.currentEvent,
  strength: state.gameplay.abilities[0].value,
  agility: state.gameplay.abilities[1].value,
  will: state.gameplay.abilities[3].value,
  intelligence: state.gameplay.abilities[4].value,
});

// actions
const mapDispatchToProps = (dispatch) => ({
  findEvent: () => {
    dispatch(findEvent());
  },
});


// export
export default connect(mapStateToProps, mapDispatchToProps)(Event);
