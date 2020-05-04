// npm imports
import { connect } from 'react-redux';


// local imports
import Whitesand from 'src/assets/images/whitesand.jpg';
import Acknowledgements from '../components/Acknowledgements';
import { changeBg } from '../actions/gamePlay';


// state
const mapStateToProps = () => ({
  artists: [
    {
      id: 1,
      name: 'Mihai Muscan',
      img: 'https://cdna.artstation.com/p/users/avatars/000/065/958/large/4cb90c48840db7a6ffb30d9bc36feed7.jpg?1462743918',
      title: 'Self-studying Artist // Jr. Lighting at CD Projekt Red',
      location: 'Warsaw, Poland',
      artStation: 'https://www.artstation.com/daydead',
    },
    {
      id: 2,
      name: 'Taha Mousavi',
      img: 'https://cdnb.artstation.com/p/users/avatars/000/071/957/large/da56fc1c0ca5cfa0226a165ad99a8e7c.jpg?1436110327',
      title: '3D Artist',
      location: 'Kuala Lumpur, Malaysia',
      artStation: 'https://www.artstation.com/tahamousavi',
    },
    {
      id: 3,
      name: 'Samuel guerrouche',
      img: 'https://cdnb.artstation.com/p/users/avatars/000/648/009/large/41a2c7e7fe61be38e460fca068e5d39d.jpg?1556962885',
      title: '3D Artist - Game art - Freelance',
      location: 'Bourgoin-Jallieu, France',
      artStation: 'https://www.artstation.com/samuel-guerrouche',
    },
    {
      id: 4,
      name: 'Martynas (aka Whitesand) ',
      img: Whitesand,
      title: 'Composer artist - Cinematic Orchestral Soundtrack Music',
      location: 'Lituanie',
      artStation: 'https://www.youtube.com/channel/UCe96JG5gdgSRtmqStx0isXA/featured',
    },
  ],

});

// actions
const mapDispatchToProps = (dispatch) => ({
  changeBg: (bgImageCssClass) => {
    dispatch(changeBg(bgImageCssClass));
  },
});

// export
export default connect(mapStateToProps, mapDispatchToProps)(Acknowledgements);
