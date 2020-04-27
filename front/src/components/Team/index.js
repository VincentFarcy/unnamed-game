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
    <div className="team-container">
      <section>
        <Card className="team-intro">
          <Card.Img className="team-intro__img" variant="top" src={logo} />
          <Card.Body className="team-intro__body">
            <Card.Title className="team-intro__title">L'équipe derrière Unnamed.Game</Card.Title>
            <Card.Text className="team-intro__content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra, lectus tempor imperdiet maximus, arcu tortor tincidunt purus, ut consequat tellus risus sed lectus.
            </Card.Text>
          </Card.Body>
        </Card>
      </section>

      <section className="team-players">

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
                  <FontAwesomeIcon icon={faLinkedin} size="lg" /><a className="contentBx__link" href={member.linkedIn} alt={`LinkedIn ${member.name}`}>LinkedIn</a><FontAwesomeIcon icon={faGithub} size="lg" /><a className="contentBx__link" href={member.gitHub} alt={`GitHub ${member.name}`}>GitHub</a>
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
