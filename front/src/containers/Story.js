// npm imports
import { connect } from 'react-redux';

// local imports
import Story from '../components/Story';
import { restartNewGame } from '../actions/gamePlay';

// state
const mapStateToProps = (state) => ({
  story: state.gameplay.chapters[0],
  php: state.gameplay.phpTimer,
});

// actions
const mapDispatchToProps = (dispatch) => ({
  restartNewGame: () => {
    dispatch(restartNewGame());
  },
});


// export
export default connect(mapStateToProps, mapDispatchToProps)(Story);
