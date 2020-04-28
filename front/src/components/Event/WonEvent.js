// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Button from '../LinkButton';

// == Import local
import './style.scss';

// == Component
const WonEvent = ({
  eventWin,
  php,
}) => {
  useEffect(eventWin, []);

  return (
    <>
      <p className="dialog__p">Votre capacité à "hack" les systèmes de sécurité, vous permet d'ouvrir cette porte. Ou alors est-ce le mot de passe admin Compote23 ? </p>
      {php !== 1 && php !== 30 && <p className="dialog__p">Quoi qu'il en soit, vous trouvez de quoi augmenter vos stocks de JSX & d'XP </p>}
      <div className="next-button-container">
        <Button cssClassName="generic-button next-button" buttonName="Suivant" url={php !== 30 ? '/play/reward' : '/play/combat'} />
      </div>
    </>
  );
};

// == Props validation
WonEvent.propTypes = {
  eventWin: PropTypes.func.isRequired,
  php: PropTypes.number.isRequired,
};

// == Export
export default WonEvent;
