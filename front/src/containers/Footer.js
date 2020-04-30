// npm imports
import { connect } from 'react-redux';

// local imports
import Footer from '../components/Footer';

// state
const mapStateToProps = (state) => ({
  gameOn: state.gameplay.gameOn,
});

// actions
const mapDispatchToProps = {};

// export
export default connect(mapStateToProps, mapDispatchToProps)(Footer);
