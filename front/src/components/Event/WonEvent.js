// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Button from '../LinkButton';

// == Import local
import './style.scss';

// == Component
const WonEvent = ({
  eventRewardXp,
  eventRewardJsx,
  eventWin,
}) => {
  useEffect(eventWin, []);

  return (
    <>
      <p className="event__win__text">Votre capacité à "hack" les systèmes de sécurité, vous permez d'ouvrir cette porte. Ou alors est-ce le mot de passe admin Compote23 ? </p>
      <div className="button__container">
        <Button cssClassName="next__button" buttonName="Suivant" url="/play/reward" />
      </div>
    </>
  );
};

// == Props validation
WonEvent.propTypes = {
  eventRewardXp: PropTypes.number,
  eventRewardJsx: PropTypes.number,
  eventWin: PropTypes.func.isRequired,
};

// == Export
export default WonEvent;
