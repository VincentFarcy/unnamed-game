// npm imports
import { connect } from 'react-redux';

// local imports
import OpponentInfo from '../components/Combat/OpponentCombatInfo';

// state
const mapStateToProps = (state) => ({
  opponents: state.gameplay.opponents,
  opponentsTable: state.gameplay.chapters[0].randomFightContests,
});

// actions
const mapDispatchToProps = {};


// export
export default connect(mapStateToProps, mapDispatchToProps)(OpponentInfo);
