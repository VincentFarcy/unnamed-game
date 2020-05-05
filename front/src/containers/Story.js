// npm imports
import { connect } from 'react-redux';

// local imports
import Story from '../components/Story';

// state
const mapStateToProps = (state) => ({
  story: state.gameplay.chapters[0],
  php: state.gameplay.phpTimer,
});

// actions
const mapDispatchToProps = {};


// export
export default connect(mapStateToProps, mapDispatchToProps)(Story);
