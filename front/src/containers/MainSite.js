// npm imports
import { connect } from 'react-redux';


// local imports
import MainSite from '../components/MainSite';
import { changeGameStatus } from '../actions/gamePlay';

// state
const mapStateToProps = () => ({
  introTitle: 'Avant-propos',
  introContent: 'Ce projet de jeu a été réalisé dans le contexte de l\'apothèose de l\'école O\'clock. L\'exercice consiste en 1 mois, à réaliser l\'ensemble de la documentation (CDC, MDC, Wireframe ...), le projet (en 9jours), la mise en production, le recettage ainsi que la démonstration. Dans un premier temps nous avons du définir le style du jeu, après avoir tester trois prototypes, nous avons décidé de nous orienter vers un livre dont vous êtes le héros auquel vient se greffer des éléments emprunter aux jeux de rôles. Nous avons remplacé l\'approche habituelle du "choix de chapitre" par une mécanique de "choix d\'actions". En espérant que vous preniez autant de FUN en jouant que nous en avons eu à le réaliser. Amusez-vous bien ! (GL & HF)    ',
  warningTitle: 'Avertissement au public',
  warningContent: 'Le contenu de ce premier jeu cible un public ayant au moins 12 ans. Le jeu comporte des références à la culture populaire ainsi que des clins d\'oeil spécifiques à notre école O\'clock.',
});

// actions
const mapDispatchToProps = (dispatch) => ({
  startGame: () => {
    dispatch(changeGameStatus());
  },
});

// export
export default connect(mapStateToProps, mapDispatchToProps)(MainSite);
