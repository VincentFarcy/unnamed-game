// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import CreateCharacter from 'src/components/CreateCharacter';

// Action Creators

/* === State (données) === */
const mapStateToProps = (state, ownProps) => ({
  isLoading: state.gameplay.isLoading,
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


