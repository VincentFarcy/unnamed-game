// npm imports
import { connect } from 'react-redux';

// local imports
import Story from '../components/Story';

// state
const mapStateToProps = (state) => ({
  isLoading: state.gameplay.isLoading,
  story: state.gameplay.chapters[0],
});

// actions
const mapDispatchToProps = {};


// export
export default connect(mapStateToProps, mapDispatchToProps)(Story);
