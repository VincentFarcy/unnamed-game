// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Button from '../LinkButton';

// == Import local
import './style.scss';

// == Component
const WonEvent = ({
  playerXp,
  playerJsx,
  eventWin,
}) => {
  useEffect(eventWin, []);

  return (
    <>
      <p className="event__win__text">Votre capacité à "hack" les systèmes de sécurité, vous permez d'ouvrir cette porte. Ou alors est-ce le mot de passe admin Compote23 ? </p>
      <p className="event__win__text">Bravo, tu as gagné ! Tu as désormais {playerXp} xp & {playerJsx} jsx.</p>
      <div className="button__container">
        <Button cssClassName="next__button" buttonName="Suivant" url="/play/sequence" />
      </div>
    </>
  );
};

// == Props validation
WonEvent.propTypes = {
  playerXp: PropTypes.number.isRequired,
  playerJsx: PropTypes.number.isRequired,
  eventWin: PropTypes.func.isRequired,
};

// == Export
export default WonEvent;
