// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Ability from 'src/components/CreateCharacter/Ability';

// Action Creators
import { increment, decrement } from '../../actions/gamePlay';

/* === State (données) === */
const mapStateToProps = null;

/* === Actions === */
const mapDispatchToProps = (dispatch) => ({
  increment: (ability) => {
    dispatch(increment(ability));
  },
  decrement: (ability) => {
    dispatch(decrement(ability));
  },
});

// Container
const AbilityContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Ability);

// == Export
export default AbilityContainer;
