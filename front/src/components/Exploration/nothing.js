// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import local
import './style.scss';
import Button from '../LinkButton';

// == Component
const Nothing = ({ eventNothing }) => (
  <div className="dialog">
    <h2 className="dialog__title">Le temps passe...</h2>
    <p className="dialog__p">
      Ce vaisseau est immense, son immensité en devient ridicule... Vous
      avez l'impression d'être déjà passé ici... Et pourtant vous êtes bien
      loin de votre point de départ... Des couloirs et des embranchements à perte
      de vue... Il vous semble préférable de rebrousser chemin avant de vous
      perdre définitivement.
    </p>
    <div className="next-button-container">
      <div className="neon-button-container">
        <Button
          cssClassName="neon-button neon-button--next"
          buttonName="PHP suivant"
          url="/play/sequence"
          onClick={eventNothing}
        />
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
