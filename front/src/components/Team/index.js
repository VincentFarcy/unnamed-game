// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

// == Import local
import './style.scss';

// == Image Import
import logo from '../../assets/images/Unnamed_Game_3_white.svg';

// == Component
const Team = ({ team, changeBg }) => {
  useEffect(() => {
    changeBg('bg--team');
  }, []);
  return (
    <div className="site-container">
      <section>
        <Card className="site-intro">
          <Card.Img className="site-intro__img" variant="top" src={logo} />
          <Card.Body className="site-intro__body">
            <Card.Title className="site-intro__title">L'équipe derrière Unnamed.Game</Card.Title>
            <Card.Text className="site-intro__content">
              Nous sommes une équipe de 5 jeunes développeurs sortant d'une formation intensive de 5
              mois au sein de l'école <a className="teamLink" target="_blank" rel="noopener noreferrer" href="https://oclock.io" alt="Ecole O'clock">O'clock</a>.
              Nous avons pris beaucoup de plaisir dans l'élaboration de ce projet de fin de
              formation, et espérons que vous vous amuserez autant que nous avons pu le faire
              pendant la création du site et du jeu.
            </Card.Text>
          </Card.Body>
        </Card>
      </section>

      <section className="site-players">

        {
          team.map((member) => (
            <div className="container" key={member.id}>
              <div className="box">
                <div className="imgBx">
                  <img className="imgBx__img" src={member.img} alt={member.name} />
                </div>
                <div className="contentBx">
                  <h3 className="contentBx__title1">{member.name} </h3>
                  <h3 className="contentBx__title2">{member.title} </h3>
                  <p className="contentBx__content">{member.description}</p>
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    size="lg"
                  />
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contentBx__link"
                    href={member.linkedIn}
                    alt={`LinkedIn ${member.name}`}
                  >
                    LinkedIn
                  </a>
                  <FontAwesomeIcon
                    icon={faGithub}
                    size="lg"
                  />
                  <a
                    className="contentBx__link"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={member.gitHub}
                    alt={`GitHub ${member.name}`}
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))
        }
      </section>
    </div>
  );
};

// == Props validation

Team.propTypes = {
  team: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      img: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      linkedIn: PropTypes.string.isRequired,
      gitHub: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  changeBg: PropTypes.func.isRequired,
};


// == Export
export default Team;
