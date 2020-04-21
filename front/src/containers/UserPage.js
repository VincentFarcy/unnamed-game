// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Userpage from 'src/components/UserPage';

// Action Creators
import {
  editUser,
  deleteUser,
  changeField,
  setEditMode,
  setDeleteMode,
} from '../actions/user';

/* === State (données) === */
const mapStateToProps = (state) => ({
  currentPseudo: state.user.connectedUser.pseudo,
  currentEmail: state.user.connectedUser.email,
  pseudo: state.user.input.pseudo,
  email: state.user.input.email,
  errorMessages: state.user.errorMessages,
  editMode: state.user.mode.editMode,
  deleteMode: state.user.mode.deleteMode,
  isLogged: state.user.isLogged,
});

/* === Actions === */
const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => {
    dispatch(changeField(value, name));
  },
  setEditMode: (toggle) => {
    dispatch(setEditMode(toggle));
  },
  setDeleteMode: (toggle) => {
    dispatch(setDeleteMode(toggle));
  },
  editUser: () => {
    dispatch(editUser());
  },
  deleteUser: () => {
    dispatch(deleteUser());
  },
});

// Container
const UserPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Userpage);

// == Export
export default UserPageContainer;
