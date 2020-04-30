// == Import npm
import React from 'react';
import Card from 'react-bootstrap/Card';

// == Import local
import './style.scss';

// == Image Import
import logo from '../../assets/images/Unnamed_Game_3_white.svg';

// == Component
const Rules = () => (
  <div className="site-container">
    <section className="introduction">
      <Card className="site-intro">
        <Card.Img className="site-intro__img" variant="top" src={logo} />
        <Card.Body className="site-intro__body">
          <Card.Title className="site-intro__title">Introduction</Card.Title>
          <Card.Text className="site-intro__content">
            Dans cette aventure, vous jouez Unnamed. Unnamed est un humain de classe 4.
            La classe indique le niveau de modification cybernétique subi.
            En tant que classe 4, il peut recevoir des augmentations cybernétiques.
            Ce genre d'humain ayant fait le choix de sacrifier une partie de l'humanité au profit de la technologie, a perdu le droit d'avoir une identité.
            Ainsi toutes les classes 4 s'appellent Unnamed, et paradoxalement les vrais androids les considèrent comme des humains.
          </Card.Text>
          <Card.Text className="site-intro__content">
            En 2154, l'humanité est entrée en contact pour la première fois avec une race extraterrestre : les Jaons. Cette rencontre a changé de façon drastique le monde.
            200 ans plus tard, la civilisation terrestre n'a cependant toujours pas résolu les soucis liés à son modèle économique défaillant. La Terre ayant atteint un point de "non-retour", le gouvernement mondial (une évolution apportée par les Jaons...) décida d'engager toutes les ressources possibles dans des missions ayant pour but de trouver une nouvelle planète d'accueil. Unnamed fait partie de l'une de ces missions.
          </Card.Text>
        </Card.Body>
      </Card>
    </section>
    <section className="introduction">
      <Card className="site-intro">
        <Card.Body className="site-intro__body">
          <Card.Title className="site-intro__title">Les statistiques principales</Card.Title>
          <Card.Text className="site-intro__content">
            Elles représentent les statistiques d'Unnamed. Vous pouvez les personnaliser au début du jeu.
          </Card.Text>
          <Card.Text className="site-intro__content">
            Force : Utilisée en combat pour le calcul des dégâts.
          </Card.Text>
          <Card.Text className="site-intro__content">
            Agilité : Utilisée en combat pour le calcul du toucher et de l'initiative.
          </Card.Text>
          <Card.Text className="site-intro__content">
            Constitution: Utilisée en combat pour le calcul des PV.
          </Card.Text>
          <Card.Text className="site-intro__content">
            Volonté : Utilisée pour le calcul de plusieurs statistiques secondaires (voir plus bas).
          </Card.Text>
          <Card.Text className="site-intro__content">
            Intelligence : Utilisée pour le calcul du piratage et de plusieurs statistiques secondaires (voir plus bas).
          </Card.Text>
        </Card.Body>
      </Card>
    </section>
    <section className="introduction">
      <Card className="site-intro">
        <Card.Body className="site-intro__body">
          <Card.Title className="site-intro__title">Les statistiques secondaires</Card.Title>
          <Card.Text className="site-intro__content">
            Il s'agit de calculs réalisés à partir des statistiques principales.
            Ce sont ces statistiques secondaires qui sont utilisées par le jeu.
          </Card.Text>
          <Card.Text className="site-intro__content">
            Point de Vie (PV) = (Constitution + (Volonté / 2)) --> Une fois à 0, vous avez perdu.
          </Card.Text>
          <Card.Text className="site-intro__content">
            Initiative = (Agilité) --> En combat, sert de base de calcul pour définir qui agira le premier.
          </Card.Text>
          <Card.Text className="site-intro__content">
            Toucher = (Agilité +(Intelligence / 3)) --> En combat, sert de base de calcul pour définir si vous touchez votre adversaire.
          </Card.Text>
          <Card.Text className="site-intro__content">
            Esquive = (Agilité +(Intelligence / 2)) --> En combat, sert de base de calcul pour définir si vous esquivez une attaque de votre adversaire.
          </Card.Text>
          <Card.Text className="site-intro__content">
            Dégâts = (Force) --> En combat, si vous avez touché votre adversaire, sert de base de calcul pour définir les PV qu'il va perdre.
          </Card.Text>
          <Card.Text className="site-intro__content">
            Piratage = (Intelligence +(Volonté / 2)) --> En exploration, sert de base de calcul pour définir si vous arrivez à pirater le système de sécurité d'une porte.
          </Card.Text>
          <Card.Text className="site-intro__content">
            Guérison = (Intelligence + Volonté) --> Sert de base de calcul pour définir les PV que vous allez gagner lors d'un repos.
          </Card.Text>
        </Card.Body>
      </Card>
    </section>
    <section className="introduction">
      <Card className="site-intro">
        <Card.Body className="site-intro__body">
          <Card.Title className="site-intro__title">Les ressources</Card.Title>
          <Card.Text className="site-intro__content">
            Elles servent de conditions pour réaliser des actions dans le jeu.
          </Card.Text>
          <Card.Text className="site-intro__content">
            PHP : Personal Hour Protocol. Dans l'espace, il n'y a pas d'étoile servant de métronome... C'est l'équivalent d'une journée terrestre.
          </Card.Text>
          <Card.Text className="site-intro__content">
            JSX : Jaon System Xenium. Le système monnétaire des Jaons. C'est l'équivalent de l'euro terrestre. Ils peuvent être dépensés durant le jeu.
          </Card.Text>
          <Card.Text className="site-intro__content">
            XP: Points d'expérience. Ils peuvent être dépensés durant le jeu pour améliorer Unnamed.
          </Card.Text>
        </Card.Body>
      </Card>
    </section>
    <section className="introduction">
      <Card className="site-intro">
        <Card.Body className="site-intro__body">
          <Card.Title className="site-intro__title">Jet & Seuil</Card.Title>
          <Card.Text className="site-intro__content">
            Jet : il s'agit d'une valeur aléatoire qui est ajoutée à une statistique secondaire. Par exemple, lors d'un combat, vous avez votre valeur de "Toucher + 1D6" qui représentera votre valeur finale de toucher pour ce round.
          </Card.Text>
          <Card.Text className="site-intro__content">
            Seuil : il s'agit de la valeur minimale à atteindre pour réussir une action. Par exemple, lors d'un combat, vous avez votre valeur de "Toucher + 1D6" qui sera opposée à la statistique "Esquive" de votre adversaire.
          </Card.Text>
        </Card.Body>
      </Card>
    </section>
    <section className="introduction">
      <Card className="site-intro">
        <Card.Body className="site-intro__body">
          <Card.Title className="site-intro__title">Déroulement d'un combat</Card.Title>
          <Card.Text className="site-intro__content">
            On commence par lancer l'initiative pour savoir qui agira le premier durant le combat. Cette valeur d'initiative est conservée jusqu'à la fin du combat.
          </Card.Text>
          <Card.Text className="site-intro__content">
            Le combat est décomposé en rounds. Lors d'un round, la personne ayant eu l'initiative agit en premier. Les rounds se répétent tant qu'il reste des PV aux 2 antagonistes.
          </Card.Text>
          <Card.Text className="site-intro__content">
            Lors d'un round, on commence par regarder si l'attaque touche. Si c'est le cas, alors on regarde combien de dégâts sont infligés, et on vient retirer ce montant des PV.
          </Card.Text>
          <Card.Text className="site-intro__content">
            Vous gagnez si votre adversaire tombe à 0 PV avant vous. Sinon c'est la fin de l'aventure.
          </Card.Text>
        </Card.Body>
      </Card>
    </section>
  </div>

);

// == Props validation

// == Export
export default Rules;
