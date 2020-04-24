// npm imports
import { connect } from 'react-redux';

// local imports
import Rest from '../components/Rest';
import { actionRest } from '../actions/gamePlay';

// state
const mapStateToProps = null;

// actions
const mapDispatchToProps = (dispatch) => ({
  actionRest: () => {
    dispatch(actionRest());
  },
});


// export
export default connect(mapStateToProps, mapDispatchToProps)(Rest);
