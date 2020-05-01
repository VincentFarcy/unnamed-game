// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import TypeWriter from 'react-typewriter';
import Button from '../LinkButton';

// == Import local
import './style.scss';

// == Component
const Nothing = ({ eventNothing }) => (
  <div className="dialog">
    <h2 className="dialog__title">Le temps passe...</h2>
    <TypeWriter
      className="dialog__p"
      typing={1}
      maxDelay={27}
      minDelay={27}
      initDelay={25}
    >Ce vaisseau est immense, son immensité en devient ridicule... Vous avez l'impression d'être déjà passé ici... et pourtant vous êtes bien loin de votre point de départ... Des couloirs et des embranchements à perte de vue... il vous semble préférable de rebrousser chemin avant de vous perdre définitivement.
    </TypeWriter>
    <div className="next-button-container">
      <div className="neon-button-container">
        <Button cssClassName="neon-button neon-button--next" buttonName="PHP suivant" url="/play/sequence" onClick={eventNothing} />
        <div className="neon-border-container">
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
  </div>
);

// == Props validation
Nothing.propTypes = {
  eventNothing: PropTypes.func.isRequired,
};


// == Export
export default Nothing;
