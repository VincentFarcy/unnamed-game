// npm imports
import { connect } from 'react-redux';


// local imports
import MainSite from '../components/MainSite';
import { changeGameStatus } from '../actions/gamePlay';

// state
const mapStateToProps = () => ({
  introTitle: 'Une histoire dont vous êtes le héros',
  introContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra, lectus tempor imperdiet maximus, arcu tortor tincidunt purus, ut consequat tellus risus sed lectus. Donec cursus ex erat, sed feugiat magna ullamcorper sit amet. Suspendisse ultrices metus ac porttitor faucibus. Sed nec metus eget arcu rutrum consectetur. Donec nec justo ac diam facilisis lobortis. Phasellus et nulla mi. Sed in eros sed tellus faucibus tincidunt.\r\n\r\nEtiam sagittis ex vel nunc dapibus fermentum. Curabitur feugiat posuere consequat. Nam nec cursus diam, id pellentesque massa. Phasellus tristique bibendum sem, ut ullamcorper tellus vestibulum eu. Fusce ultrices massa ex, vitae varius felis tempus vel. Morbi aliquet leo a purus tincidunt viverra. Quisque hendrerit accumsan leo. Duis a tortor sit amet libero gravida ornare. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam felis purus, aliquet ac fringilla vitae, efficitur vel magna. In est ex, interdum commodo convallis a, sagittis sed ipsum. Etiam sit amet lacus id tellus vestibulum condimentum.',
  warningContent: 'Nunc at leo a libero congue gravida sit amet nec arcu. Morbi dapibus sem vitae enim accumsan consequat. Phasellus ut massa nec risus malesuada faucibus. Nam tortor augue, rutrum id hendrerit nec, pulvinar vel nisi.',
});

// actions
const mapDispatchToProps = (dispatch) => ({
  startGame: () => {
    dispatch(changeGameStatus());
  },
});

// export
export default connect(mapStateToProps, mapDispatchToProps)(MainSite);
