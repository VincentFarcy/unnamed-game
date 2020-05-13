// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// == Import local
import './style.scss';
import Button from '../LinkButton';

// == Component
const WonEvent = ({
  php,
  eventWin,
}) => {
  useEffect(eventWin, []);

  return (
    <>
      <p className="dialog__p">
        Votre capacité à "hack" les systèmes de sécurité, vous permet d'ouvrir cette porte.
        Ou alors est-ce le mot de passe admin Compote23 ?
      </p>
      { php !== 1 && php !== 30
        && (
          <p className="dialog__p">
            Quoi qu'il en soit, vous trouvez de quoi augmenter vos stocks de JSX & d'XP
          </p>
        )}
      <div className="next-button-container">
        <div className="neon-button-container">
          <Button
            cssClassName="neon-button neon-button--next"
            buttonName="Suivant"
            url={php !== 30 ? '/play/reward' : '/play/combat'}
          />
          <div className="neon-border-container">
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
    </>
  );
};

// == Props validation
WonEvent.propTypes = {
  php: PropTypes.number.isRequired,
  eventWin: PropTypes.func.isRequired,
};

// == Export
export default WonEvent;
