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
  php,
}) => {
  useEffect(eventWin, []);

  return (
    <>
      <p className="event__win__text">Votre capacité à "hack" les systèmes de sécurité, vous permez d'ouvrir cette porte. Ou alors est-ce le mot de passe admin Compote23 ? </p>
      {php !== 1 && php !== 30 && <p className="event__win__text2">Quoi qu'il en soit, vous trouvez de quoi augmenter vos stocks de JSX & d'XP </p>}
      <div className="button__container">
        <Button cssClassName="next__button" buttonName="Suivant" url={php !== 30 ? '/play/reward' : '/play/combat'} />
      </div>
    </>
  );
};

// == Props validation
WonEvent.propTypes = {
  eventRewardXp: PropTypes.number,
  eventRewardJsx: PropTypes.number,
  eventWin: PropTypes.func.isRequired,
  php: PropTypes.number.isRequired,
};

// == Export
export default WonEvent;
