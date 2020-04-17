// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import CreateCharacter from 'src/components/CreateCharacter';

// Action Creators
import { increment, decrement } from '../actions/gamePlay';

import { findAbility } from '../reducers/gameplay';

/* === State (données) === */
const mapStateToProps = (state, ownProps) => ({
  abilities: state.gameplay.abilities,
  pool: state.gameplay.pool,
});

/* === Actions === */
const mapDispatchToProps = {};

// Container
const CreateCharacterContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateCharacter);

// == Export
export default CreateCharacterContainer;


