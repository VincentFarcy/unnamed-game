// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import loose from 'src/assets/images/death.svg';
import Typical from 'react-typical';
import Image from 'react-bootstrap/Image';
import Button from '../LinkButton';

// == Import local
import './style.scss';


// == Component
const Death = ({ restartNewGame }) => (
  <div className="dialog">
    <h2 className="dialog__title">The end...</h2>
    <Typical
      className="dialog__p"
      steps={['Avec un peu de chance votre mort fut rapide...', 1000]}
      wrapper="p"
    />
    <Image className="death__image" src={loose} rounded />
    <div className="next-button-container">
      <Button
        cssClassName="generic-button next-button"
        buttonName="Recommencer"
        url="/play"
        onClick={restartNewGame}
      />
    </div>
  </div>
);

// == Props validation
Death.propTypes = {
  restartNewGame: PropTypes.func.isRequired,
};


// == Export
export default Death;
