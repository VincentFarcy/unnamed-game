// npm imports
import { connect } from 'react-redux';
import { fetchInitialeGameData } from '../actions/gamePlay';

// local imports
import MainPlay from '../components/MainPlay';

// state
const mapStateToProps = null;

// actions
const mapDispatchToProps = (dispatch) => ({
  fetchInitialeGameData: () => {
    dispatch(fetchInitialeGameData());
  },
});

// export
export default connect(mapStateToProps, mapDispatchToProps)(MainPlay);
