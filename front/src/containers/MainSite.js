// npm imports
import { connect } from 'react-redux';


// local imports
import MainSite from '../components/MainSite';

// state
const mapStateToProps = () => ({
  introTitle: 'Avant-propos',
  introContent: 'Ce projet a été réalisé dans le cadre de l\'apothéose de l\'école O\'clock. L\'exercice consiste, en un mois, à réaliser l\'ensemble de la documentation (CDC, MCD, Wireframe ...), le projet (en 9 jours), la mise en production, le recettage ainsi que la démonstration. Dans un premier temps, nous avons dû définir le style du jeu et après avoir testé trois prototypes, nous avons décidé de nous orienter vers un livre dont vous êtes le héros auquel viennent se greffer des éléments empruntés aux jeux de rôles. Nous avons remplacé l\'approche habituelle du "choix de chapitre" par une mécanique de "choix d\'actions". En espérant que vous preniez autant de FUN en jouant que nous en avons eu à le réaliser. Amusez-vous bien ! (GL & HF)    ',
  warningTitle: 'Avertissement au public',
  warningContent: 'Le contenu de ce premier jeu cible un public ayant au moins 12 ans. Le jeu comporte des références à la culture populaire ainsi que des clins d\'oeil spécifiques à notre école O\'clock.',
});

// actions
const mapDispatchToProps = {};

// export
export default connect(mapStateToProps, mapDispatchToProps)(MainSite);
