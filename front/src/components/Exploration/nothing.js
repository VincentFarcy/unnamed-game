// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import Button from '../LinkButton';

// == Import local
import './style.scss';

// == Component
const Nothing = ({ eventNothing }) => (
  <div className="main__play">
    <p className="nothing__title">Le temps passe...</p>
    <p className="nothing__text">Ce vaisseau est immense, son immensité en devient ridicule... Vous avez l'impression d'être déjà passé ici... et pourtant vous êtes bien loin de votre point de départ... Des couloirs et des embranchements à perte de vue... il vous semble préférable de rebrousser chemin avant de vous perdre définitivement.</p>
    <div className="button__container">
      <Button cssClassName="next__button" buttonName="PHP suivant" url="/play/sequence" onClick={eventNothing} />
    </div>
  </div>
);

// == Props validation
Nothing.propTypes = {
  eventNothing: PropTypes.func.isRequired,
};


// == Export
export default Nothing;
