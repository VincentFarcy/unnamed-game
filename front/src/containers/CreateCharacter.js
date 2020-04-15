// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import CreateCharacter from 'src/components/CreateCharacter';

// Action Creators
import { increment, decrement } from '../actions/gamePlay';

/* === State (données) === */
const mapStateToProps = (state, ownProps) => ({
  abilities: state.gameplay.abilities,
});

/* === Actions === */
const mapDispatchToProps = (dispatch, ownProps) => ({
  increment: () => {
    dispatch(increment());
  },
  decrement: () => {
    dispatch(decrement());
  },
});

// Container
const CreateCharacterContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateCharacter);

// == Export
export default CreateCharacterContainer;
