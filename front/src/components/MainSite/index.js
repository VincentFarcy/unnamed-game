// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import LinkButton from '../LinkButton';


// == Import local
import './style.scss';
import warning from '../../assets/images/r_36.png';
import intro from '../../assets/images/b_04.png';

// == Component
const MainSite = ({ introTitle, introContent, warningContent }) => (
  <div>
    <section className="start-game">
      <LinkButton cssClassName="play-button-main" buttonName="Jouer" url="/play" />
    </section>
    <section className="introduction">
      <Card style={{ width: '90%' }}>
        <Card.Img className="intro-image" variant="top" src={intro} />
        <Card.Body>
          <Card.Title className="introduction__title">{introTitle}</Card.Title>
          <Card.Text className="introduction__content">
            {introContent}
          </Card.Text>
        </Card.Body>
      </Card>

    </section>
    <section className="warning">
      <Card style={{ width: '90%' }}>
        <Card.Img variant="top" src={warning} />
        <Card.Body>
          <Card.Title>Avertissement au public</Card.Title>
          <Card.Text>
            {warningContent}
          </Card.Text>
        </Card.Body>
      </Card>
    </section>
  </div>
);

// == Props validation
MainSite.propTypes = {
  introTitle: PropTypes.string.isRequired,
  introContent: PropTypes.string.isRequired,
  warningContent: PropTypes.string.isRequired,
};


// == Export
export default MainSite;
