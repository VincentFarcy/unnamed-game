// npm imports
import { connect } from 'react-redux';


// local imports
import Team from '../components/Team';

// state
const mapStateToProps = () => ({
  team: [
    {
      id: 1,
      name: 'Ann-So B.',
      img: "https://www.cartoonify.de/wp-content/plugins/svg-avatars-generator/data/temp-avatars/svgA25046820168055284.png",
      title: 'Lead Dev Front',
      description: 'Grande gardienne de la Ternaire Cosmique. On raconte qu\'elle est en fait une entité qui ne dort jamais',
      linkedIn: 'https://gph.is/2yCodpl',
    },
    {
      id: 2,
      name: 'Vincent Farcy',
      img: "https://media-exp1.licdn.com/dms/image/C5603AQFeiDkPJyfUHQ/profile-displayphoto-shrink_200_200/0?e=1593043200&v=beta&t=wUcQEok_mOAs31WPlvYn2f7abBWvRgZ8eNgfTt3YCD8",
      title: 'Lead Dev Back',
      description: 'Même les deux paires de bras et les trois yeux d\'un Froghemoth ne rivalisent pas avec les jets de rapidité et d\'initiative de ce robot.',
      linkedIn: 'https://gph.is/2yCodpl',
    },
    {
      id: 3,
      name: 'Adrien Roux',
      img: "https://media-exp1.licdn.com/dms/image/C5603AQHkd1BM711Nxw/profile-displayphoto-shrink_200_200/0?e=1593043200&v=beta&t=hv7VqgyllVWcAJPhwZy5moeZxPN8HlGWvw-bsn7OLwE",
      title: 'Git Master | Dev Back',
      description: 'Grand évocateur du Quasar du système Bahak. Quasar capable d\'ingurgiter autant de données cosmiques qu\'il n\'en rejette dans tous les systèmes alentours.',
      linkedIn: 'https://www.linkedin.com/in/adrien-roux-603895192/',
    },
    {
      id: 4,
      name: 'Vincent Moulin',
      img: "https://scontent-cdg2-1.xx.fbcdn.net/v/t31.0-8/p960x960/1492500_10152066256889661_283901295_o.jpg?_nc_cat=110&_nc_sid=210fed&_nc_ohc=L3Oi4N8smwoAX9_oPjt&_nc_ht=scontent-cdg2-1.xx&_nc_tp=6&oh=f8f15d4050bd3c1946971a7905f250ae&oe=5ECA68AC",
      title: 'Dev Front | Scrum Master',
      description: 'Empyréen en armure de Space Marine dont le marteau est toujours en soutien de l\'équipe.',
      linkedIn: 'https://www.linkedin.com/in/vincent-moulin-10020/',
    },
    {
      id: 5,
      name: 'Johan Santaliestra',
      img: "https://media-exp1.licdn.com/dms/image/C5603AQEAmZDGhxD5vg/profile-displayphoto-shrink_200_200/0?e=1593043200&v=beta&t=7hnIVRqUDxoHyCDxEKktmWCQN1ZdK8dG99NcVRNUx_M",
      title: 'Dev Front | Product Owner',
      description: 'Beholder galactique. La vision et le cerveau de l\'équipe. Les User Stories ne résistent pas à son Rayon télékinétique.',
      linkedIn: 'https://www.linkedin.com/in/johansantaliestra/',
    },
  ],

});

// actions
const mapDispatchToProps = {};

// export
export default connect(mapStateToProps, mapDispatchToProps)(Team);
