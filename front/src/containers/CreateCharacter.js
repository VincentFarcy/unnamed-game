// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import CreateCharacter from 'src/components/CreateCharacter';

// Action Creators
import { changeBg } from '../actions/gamePlay';

/* === State (données) === */
const mapStateToProps = (state) => ({
  isLoading: state.gameplay.isLoading,
  abilities: state.gameplay.abilities,
  pool: state.gameplay.pool,
});

/* === Actions === */
const mapDispatchToProps = (dispatch) => ({
  changeBg: (bgImageCssClass) => {
    dispatch(changeBg(bgImageCssClass));
  },
});

// Container
const CreateCharacterContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateCharacter);

// == Export
export default CreateCharacterContainer;
