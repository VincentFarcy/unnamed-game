// npm imports
import { connect } from 'react-redux';

// local imports
import Event from '../components/Event';
import { findEvent } from '../actions/gamePlay';

// state
const mapStateToProps = (state) => ({
  event: state.gameplay.currentEvent,

});

// actions
const mapDispatchToProps = (dispatch) => ({
  findEvent: () => {
    dispatch(findEvent());
  },
});


// export
export default connect(mapStateToProps, mapDispatchToProps)(Event);
