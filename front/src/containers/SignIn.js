// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import SignIn from 'src/components/SignIn';

// Action Creators
import { signIn, changeField, setUserErrorMessage } from '../actions/user';

/* === State (données) === */
const mapStateToProps = (state) => ({
  userId: state.user.input.userId,
  password: state.user.input.password,
  errorMessages: state.user.errorMessages,
  setErrorMessages: state.user.setErrorMessages,
  isLogged: state.user.isLogged,
});

/* === Actions === */
const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => {
    dispatch(changeField(value, name));
  },
  handleSignIn: () => {
    dispatch(signIn());
  },
  setUserErrorMessage: (message) => {
    dispatch(setUserErrorMessage(message));
  },
});

// Container
const SignInContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignIn);

// == Export
export default SignInContainer;
