// npm imports
import { connect } from 'react-redux';

// local imports
import avatarAnnSo from 'src/assets/images/team/AvatarAnnSo.svg';
import VincentF from 'src/assets/images/team/vf-400.png';
import Kharma from 'src/assets/images/team/VincentM.jpg';
import Adrien from 'src/assets/images/team/Adrien.jpeg';
import Johan from 'src/assets/images/team/Johan.jpeg';
import Team from '../components/Team';
import { changeBg } from '../actions/gamePlay';


// state
const mapStateToProps = () => ({
  team: [
    {
      id: 1,
      name: 'Ann-So B.',
      img: avatarAnnSo,
      title: 'Lead Dev Front',
      description: 'Grande gardienne de la Ternaire Cosmique. On raconte qu\'elle est en fait une entité qui ne dort jamais',
      linkedIn: 'https://gph.is/2yCodpl',
      gitHub: 'https://github.com/AnnSo-B',
    },
    {
      id: 2,
      name: 'Vincent Farcy',
      img: VincentF,
      title: 'Lead Dev Back',
      description: 'Même les deux paires de bras et les trois yeux d\'un Froghemoth ne rivalisent pas avec les jets de rapidité et d\'initiative de ce cyborg.',
      linkedIn: 'https://www.linkedin.com/in/%F0%9F%94%A5-vincent-farcy-%F0%9F%94%A5-730015174/',
      gitHub: 'https://github.com/VincentFarcy',
    },
    {
      id: 3,
      name: 'Adrien Roux',
      img: Adrien,
      title: 'Git Master | Dev Back',
      description: 'Grand évocateur du Quasar du système Bahak. Quasar capable d\'ingurgiter autant de données cosmiques qu\'il n\'en rejette dans tous les systèmes alentours.',
      linkedIn: 'https://www.linkedin.com/in/adrien-roux-603895192/',
      gitHub: 'https://github.com/AdrienRxx',
    },
    {
      id: 4,
      name: 'Vincent Moulin',
      img: Kharma,
      title: 'Dev Front | Scrum Master',
      description: 'Mi-Murgle mi-Empyréen et re mi-Murgle du pulsar sombre dont le marteau est toujours en soutien de l\'équipe.',
      linkedIn: 'https://www.linkedin.com/in/vincent-moulin-10020/',
      gitHub: 'https://github.com/Kharmaska',
    },
    {
      id: 5,
      name: 'Johan Santaliestra',
      img: Johan,
      title: 'Dev Front | Product Owner',
      description: 'Beholder galactique. La vision et le cerveau de l\'équipe. Les User Stories ne résistent pas à son Rayon télékinétique.',
      linkedIn: 'https://www.linkedin.com/in/johansantaliestra/',
      gitHub: 'https://github.com/Johansantaliestra',
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
export default connect(mapStateToProps, mapDispatchToProps)(Team);
