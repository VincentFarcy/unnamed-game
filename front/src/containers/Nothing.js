// npm imports
import { connect } from 'react-redux';

// local imports
import Nothing from '../components/Exploration/nothing';
import { eventNothing } from '../actions/gamePlay';

// state
const mapStateToProps = null;

// actions
const mapDispatchToProps = (dispatch) => ({
  eventNothing: () => {
    dispatch(eventNothing());
  },
});


// export
export default connect(mapStateToProps, mapDispatchToProps)(Nothing);
