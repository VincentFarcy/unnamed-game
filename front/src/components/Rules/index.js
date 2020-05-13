// == Import npm
import React from 'react';
import Card from 'react-bootstrap/Card';

// == Import local
import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';

// == Image Import
import intro from '../../assets/images/rules/p_05.png';
import mainStats from '../../assets/images/rules/p_06.png';
import secondaryStats from '../../assets/images/rules/p_16.png';
import ressources from '../../assets/images/rules/p_18.png';
import roll from '../../assets/images/rules/p_23.png';
import combat from '../../assets/images/rules/p_31.png';

// == Component
const Rules = () => (
  <div className="site-container">
    <section className="introduction">
      <Card className="rules-intro">
        <Card.Img className="site-intro__img" variant="top" src={intro} />
        <Card.Body className="site-intro__body">
          <Card.Title className="site-intro__title">Introduction</Card.Title>
          <Card.Text className="site-intro__content">
            Dans cette aventure, vous jouez <span className="stats-title">Unnamed</span>. Unnamed est un humain de classe 4.
            La classe indique le niveau de modification cybernétique subi.
            En tant que classe 4, il peut recevoir des augmentations cybernétiques.
            Ce genre d'humain ayant fait le choix de sacrifier une partie de leur
            humanité au profit de la technologie, perdant ainsi le droit d'avoir une identité.
            Ainsi toutes les classes 4 s'appellent Unnamed. Paradoxalement les vrais
            androids les considèrent comme des humains.
          </Card.Text>
          <Card.Text className="site-intro__content">
            En 2154, l'humanité est entrée en contact pour la première fois avec une race
            extraterrestre : les Jaons. Cette rencontre a changé de façon drastique le monde.
            200 ans plus tard, la civilisation terrestre n'a cependant toujours pas résolu
            les soucis liés à son modèle économique défaillant. La Terre ayant atteint un point
            de "non-retour", le gouvernement mondial (une évolution apportée par les Jaons...)
            décida, afin de trouver une nouvelle planète d'accueil, d'engager toutes les ressources
            possibles dans des missions d'exploration. Unnamed fait partie de l'une d'elles.
          </Card.Text>
        </Card.Body>
      </Card>
    </section>
    <section className="introduction">
      <Card className="rules-intro">
        <Card.Img className="site-intro__img" variant="top" src={mainStats} />
        <Card.Body className="site-intro__body">
          <Card.Title className="site-intro__title">Les statistiques principales</Card.Title>
          <Card.Text className="site-intro__content">
            Elles représentent les statistiques d'Unnamed. Vous pouvez les personnaliser
            au début du jeu.
          </Card.Text>
          <Card.Text className="site-intro__content">
            <span className="stats-title">Force</span> : Utilisée en combat pour le calcul des dégâts.
          </Card.Text>
          <Card.Text className="site-intro__content">
            <span className="stats-title">Agilité</span> : Utilisée en combat pour le calcul du toucher et de l'initiative.
          </Card.Text>
          <Card.Text className="site-intro__content">
            <span className="stats-title">Constitution</span> : Utilisée en combat pour le calcul des Points de vie (HP).
          </Card.Text>
          <Card.Text className="site-intro__content">
            <span className="stats-title">Volonté</span> : Utilisée pour le calcul de plusieurs statistiques secondaires (voir plus bas).
          </Card.Text>
          <Card.Text className="site-intro__content">
            <span className="stats-title">Intelligence</span> : Utilisée pour le calcul du piratage et de plusieurs statistiques secondaires (voir plus bas).
          </Card.Text>
        </Card.Body>
      </Card>
    </section>
    <section className="introduction">
      <Card className="rules-intro">
        <Card.Img className="site-intro__img" variant="top" src={secondaryStats} />
        <Card.Body className="site-intro__body">
          <Card.Title className="site-intro__title">Les statistiques secondaires</Card.Title>
          <Card.Text className="site-intro__content">
            Il s'agit de calculs réalisés à partir des statistiques principales.
            Ce sont ces statistiques secondaires qui sont utilisées par le jeu.
          </Card.Text>
          <Card.Text className="site-intro__content">
            <span className="stats-title">Points de Vie</span> (HP) = (Constitution + (Volonté / 2)) X 10 <FontAwesomeIcon className="stats-title" icon={faAngleDoubleRight} size="lg" /> Une fois à 0, vous avez perdu.
          </Card.Text>
          <Card.Text className="site-intro__content">
            <span className="stats-title">Initiative</span> = (Agilité) <FontAwesomeIcon className="stats-title" icon={faAngleDoubleRight} size="lg" /> En combat, sert de base de calcul pour définir qui agira le premier.
          </Card.Text>
          <Card.Text className="site-intro__content">
            <span className="stats-title">Toucher</span> = (Agilité +(Intelligence / 3)) <FontAwesomeIcon className="stats-title" icon={faAngleDoubleRight} size="lg" /> En combat, sert de base de calcul pour définir si vous touchez votre adversaire.
          </Card.Text>
          <Card.Text className="site-intro__content">
            <span className="stats-title">Esquive</span> = (Agilité +(Intelligence / 2)) <FontAwesomeIcon className="stats-title" icon={faAngleDoubleRight} size="lg" /> En combat, sert de base de calcul pour définir si vous esquivez une attaque de votre adversaire.
          </Card.Text>
          <Card.Text className="site-intro__content">
            <span className="stats-title">Dégâts</span> = (Force) <FontAwesomeIcon className="stats-title" icon={faAngleDoubleRight} size="lg" /> En combat, si vous avez touché votre adversaire, sert de base de calcul pour définir les HP qu'il va perdre.
          </Card.Text>
          <Card.Text className="site-intro__content">
            <span className="stats-title">Piratage</span> = (Intelligence +(Volonté / 2)) <FontAwesomeIcon className="stats-title" icon={faAngleDoubleRight} size="lg" /> En exploration, sert de base de calcul pour définir si vous arrivez à pirater le système de sécurité d'une porte.
          </Card.Text>
          <Card.Text className="site-intro__content">
            <span className="stats-title">Guérison</span> = (Intelligence + Volonté) <FontAwesomeIcon className="stats-title" icon={faAngleDoubleRight} size="lg" /> Sert de base de calcul pour définir les HP que vous allez gagner lors d'un repos.
          </Card.Text>
        </Card.Body>
      </Card>
    </section>
    <section className="introduction">
      <Card className="rules-intro">
        <Card.Img className="site-intro__img" variant="top" src={ressources} />
        <Card.Body className="site-intro__body">
          <Card.Title className="site-intro__title">Les ressources</Card.Title>
          <Card.Text className="site-intro__content">
            Elles servent de conditions pour réaliser des actions dans le jeu.
          </Card.Text>
          <Card.Text className="site-intro__content">
            <span className="stats-title">PHP</span> : Protocole d'Heures Personnelles. Dans l'espace, il n'y a pas d'étoile servant de métronome... C'est l'équivalent d'une journée terrestre.
          </Card.Text>
          <Card.Text className="site-intro__content">
            <span className="stats-title">JSX</span> : Jaon System Xenium. Le système monétaire des Jaons. C'est l'équivalent de l'euro terrestre. Ils peuvent être dépensés durant le jeu.
          </Card.Text>
          <Card.Text className="site-intro__content">
            <span className="stats-title">XP</span>: Points d'expérience. Ils peuvent être dépensés durant le jeu pour améliorer Unnamed.
          </Card.Text>
        </Card.Body>
      </Card>
    </section>
    <section className="introduction">
      <Card className="rules-intro">
        <Card.Img className="site-intro__img" variant="top" src={roll} />
        <Card.Body className="site-intro__body">
          <Card.Title className="site-intro__title">Jet & Seuil</Card.Title>
          <Card.Text className="site-intro__content">
            <span className="stats-title">Jet</span> : il s'agit d'une valeur aléatoire qui est ajoutée à une statistique secondaire. Par exemple, lors d'un combat, vous avez votre valeur de "Toucher + jet de dé à 6 faces (1D6)" qui représentera votre valeur finale de toucher pour ce round.
          </Card.Text>
          <Card.Text className="site-intro__content">
            <span className="stats-title">Seuil</span> : il s'agit de la valeur minimale à atteindre pour réussir une action. Par exemple, lors d'un combat, vous avez votre valeur de "Toucher + 1D6" qui sera opposée à la statistique "Esquive" de votre adversaire.
          </Card.Text>
        </Card.Body>
      </Card>
    </section>
    <section className="introduction">
      <Card className="rules-intro">
        <Card.Img className="site-intro__img" variant="top" src={combat} />
        <Card.Body className="site-intro__body">
          <Card.Title className="site-intro__title">Déroulement d'un combat</Card.Title>
          <Card.Text className="site-intro__content">
            On commence par lancer l'initiative pour savoir qui agira le premier durant le
            combat. Cette valeur d'initiative est conservée jusqu'à la fin du combat.
          </Card.Text>
          <Card.Text className="site-intro__content">
            Le combat est décomposé en rounds. Lors d'un round, la personne ayant
            eu l'initiative agit en premier. Les rounds se répétent tant qu'il
            reste des HP aux 2 antagonistes.
          </Card.Text>
          <Card.Text className="site-intro__content">
            Lors d'un round, on commence par regarder si l'attaque touche. Si c'est
            le cas, alors on regarde combien de dégâts sont infligés, et on vient
            retirer ce montant des HP.
          </Card.Text>
          <Card.Text className="site-intro__content">
            Vous gagnez si votre adversaire tombe à 0 HP avant vous. Sinon c'est la fin de
            l'aventure.
          </Card.Text>
        </Card.Body>
      </Card>
    </section>
  </div>

);

// == Export
export default Rules;
