// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';


// == Import local
import './style.scss';
import LinkButton from '../LinkButton';
import warning from '../../assets/images/r_36.png';
import intro from '../../assets/images/b_04.png';

// == Component
const MainSite = ({
  introTitle,
  introContent,
  warningContent,
  warningTitle,
}) => (
  <div>
    <section className="start-game">
      <LinkButton
        cssClassName="generic-button play-button-main"
        buttonName="Jouer"
        url="/play"
      />
    </section>
    <section className="introduction">
      <Card className="intro-cards">
        <Card.Img className="intro-cards__img" variant="top" src={intro} />
        <Card.Body>
          <Card.Title className="dialog__title">{introTitle}</Card.Title>
          <Card.Text className="dialog__p">
            {introContent}
          </Card.Text>
        </Card.Body>
      </Card>
    </section>
    <section className="warning">
      <Card className="intro-cards">
        <Card.Img className="intro-cards__img" variant="top" src={warning} />
        <Card.Body>
          <Card.Title className="dialog__title">{warningTitle}</Card.Title>
          <Card.Text className="dialog__p">
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
  warningTitle: PropTypes.string.isRequired,
  warningContent: PropTypes.string.isRequired,
};


// == Export
export default MainSite;
