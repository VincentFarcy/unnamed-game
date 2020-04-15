// npm imports
import { connect } from 'react-redux';

// local imports
import MainPlay from '../components/MainPlay';

// state
const mapStateToProps = null;

// actions
const mapDispatchToProps = (dispatch) => ({
  fetchInitialeGameData: () => {
    console.log('action pour récupérer les datas');
  }
});

// export
export default connect(mapStateToProps, mapDispatchToProps)(MainPlay);
