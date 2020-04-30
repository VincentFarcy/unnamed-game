// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Button from '../LinkButton';
import { rollDice } from '../../func';
import PlayerInfo from '../../containers/PlayerInfo';

// == Import local
import './style.scss';

// == Component
const Train = ({
  fullAccess,
  roomAccess,
  incrementAbility,
  nextSequence,
  php,
}) => {
  const rollFullAccess = rollDice(1, 100);
  const strengthTrainAccess = rollDice(1, 100);
  const agilityTrainAccess = rollDice(1, 100);
  const enduranceTrainAccess = rollDice(1, 100);
  const willTrainAccess = rollDice(1, 100);
  const intelligenceTrainAccess = rollDice(1, 100);

  return (
    <div className="player-action__container">
      <div className="player-bar">
        <PlayerInfo />
      </div>
      <div className="dialog">
        <h2 className="dialog__title">Salle d'augmentation cybernétique</h2>
        <div className="train__button-container">
          {(rollFullAccess <= fullAccess || strengthTrainAccess <= roomAccess || php < 30)
            && (
              <div className="neon-button-container">
                <Button cssClassName="neon-button neon-button--train" buttonName="Force" url="/play/sequence" onClick={() => (incrementAbility('Force'))} />
                <div className="neon-border-container">
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            )}
          {(rollFullAccess <= fullAccess || agilityTrainAccess <= roomAccess || php < 30)
            && (
              <div className="neon-button-container">
                <Button cssClassName="neon-button neon-button--train" buttonName="Agilité" url="/play/sequence" onClick={() => (incrementAbility('Agilité'))} />
                <div className="neon-border-container">
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            )}
          {(rollFullAccess <= fullAccess || enduranceTrainAccess <= roomAccess || php < 30)
            && (
              <div className="neon-button-container">
                <Button cssClassName="neon-button neon-button--train" buttonName="Constitution" url="/play/sequence" onClick={() => (incrementAbility('Constitution'))} />
                <div className="neon-border-container">
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            )}
          {(rollFullAccess <= fullAccess || willTrainAccess <= roomAccess || php < 30)
            && (
              <div className="neon-button-container">
                <Button cssClassName="neon-button neon-button--train" buttonName="Volonté" url="/play/sequence" onClick={() => (incrementAbility('Volonté'))} />
                <div className="neon-border-container">
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            )}
          {(rollFullAccess <= fullAccess || intelligenceTrainAccess <= roomAccess || php < 30)
            && (
              <div className="neon-button-container">
                <Button cssClassName="neon-button neon-button--train" buttonName="Intelligence" url="/play/sequence" onClick={() => (incrementAbility('Intelligence'))} />
                <div className="neon-border-container">
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            )}
        </div>
        <div className="next-button-container">
          <div className="neon-button-container">
            <Button cssClassName="neon-button neon-button--next" buttonName="PHP Suivant" url="/play/sequence" onClick={nextSequence} />
            <div className="neon-border-container">
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// == Props validation
Train.propTypes = {
  fullAccess: PropTypes.number.isRequired,
  roomAccess: PropTypes.number.isRequired,
  php: PropTypes.number.isRequired,
  incrementAbility: PropTypes.func.isRequired,
  nextSequence: PropTypes.func.isRequired,
};

// == Export
export default Train;
