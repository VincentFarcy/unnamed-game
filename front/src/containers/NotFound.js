// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import NotFound from 'src/components/NotFound';

// Action Creators
import { changeBg } from '../actions/gamePlay';

/* === State (données) === */
const mapStateToProps = (state) => ({
  bgImageCssClass: state.gameplay.bgImageCssClass,
});

/* === Actions === */
const mapDispatchToProps = (dispatch) => ({
  changeBg: (bgImageCssClass) => {
    dispatch(changeBg(bgImageCssClass));
  },
});

// Container
const NotFoundContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NotFound);

// == Export
export default NotFoundContainer;
