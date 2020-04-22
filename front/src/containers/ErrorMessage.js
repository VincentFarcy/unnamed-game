import { connect } from 'react-redux';

// == Import : local
import ErrorMessage from 'src/components/ErrorMessage';

// Action Creators

/* === State (données) === */
const mapStateToProps = (state) => ({
  message: state.gameplay.loadingErrMessage,
});

/* === Actions === */
const mapDispatchToProps = {};

// Container
const ErrorMessageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ErrorMessage);

// == Export
export default ErrorMessageContainer;
