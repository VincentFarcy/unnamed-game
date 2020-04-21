// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import SignUp from 'src/components/SignUp';

// Action Creators
import { signUp, changeField, sendErrorMessages } from '../actions/user';

/* === State (données) === */
const mapStateToProps = (state) => ({
  pseudo: state.user.input.pseudo,
  email: state.user.input.email,
  password: state.user.input.password,
  confirmPassword: state.user.input.confirmPassword,
  ageChecked: state.user.input.ageChecked,
  errorMessages: state.user.errorMessages,
  isLogged: state.user.isLogged,
});

/* === Actions === */
const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => {
    dispatch(changeField(value, name));
  },
  handleSignUp: () => {
    dispatch(signUp());
  },
  sendErrorMessages: (messages) => {
    dispatch(sendErrorMessages(messages));
  },
});

// Container
const SignUpContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignUp);

// == Export
export default SignUpContainer;
