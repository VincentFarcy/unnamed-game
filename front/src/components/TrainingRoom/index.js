// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

// == Import local
import './style.scss';
import Button from '../LinkButton';
import { rollDice } from '../../func';
import PlayerInfo from '../../containers/PlayerInfo';

// == Component
const Train = ({
  fullAccess,
  roomAccess,
  php,
  hp,
  strength,
  agility,
  constitution,
  will,
  intelligence,
  jsx,
  xp,
  xpCost,
  jsxCost,
  incrementAbility,
}) => {
  const rollFullAccess = rollDice(1, 100);
  const strengthTrainAccess = rollDice(1, 100);
  const agilityTrainAccess = rollDice(1, 100);
  const enduranceTrainAccess = rollDice(1, 100);
  const willTrainAccess = rollDice(1, 100);
  const intelligenceTrainAccess = rollDice(1, 100);

  return (
    <div className="player-action__container">
      {(php > 32 || hp <= 0 || jsx < jsxCost || xp < xpCost) && <Redirect to="/play/death" />}
      <div className="player-bar">
        <PlayerInfo />
      </div>
      <div className="dialog">
        <h2 className="dialog__title">Salle d'augmentation cybernétique</h2>
        <div className="train__button-container">
          {((rollFullAccess <= fullAccess || strengthTrainAccess <= roomAccess)
            && php < 31 && strength < 9)
            && (
              <div className="neon-button-container">
                <Button
                  cssClassName="neon-button neon-button--train"
                  buttonName="Force"
                  url="/play/sequence"
                  onClick={() => (incrementAbility('Force'))}
                />
                <div className="neon-border-container">
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            )}
          {((rollFullAccess <= fullAccess || agilityTrainAccess <= roomAccess)
            && php < 31 && agility < 9)
            && (
              <div className="neon-button-container">
                <Button
                  cssClassName="neon-button neon-button--train"
                  buttonName="Agilité"
                  url="/play/sequence"
                  onClick={() => (incrementAbility('Agilité'))}
                />
                <div className="neon-border-container">
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            )}
          {((rollFullAccess <= fullAccess || enduranceTrainAccess <= roomAccess)
            && php < 31 && constitution < 9)
            && (
              <div className="neon-button-container">
                <Button
                  cssClassName="neon-button neon-button--train"
                  buttonName="Constitution"
                  url="/play/sequence"
                  onClick={() => (incrementAbility('Constitution'))}
                />
                <div className="neon-border-container">
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            )}
          {((rollFullAccess <= fullAccess || willTrainAccess <= roomAccess)
            && php < 31 && will < 9)
            && (
              <div className="neon-button-container">
                <Button
                  cssClassName="neon-button neon-button--train"
                  buttonName="Volonté"
                  url="/play/sequence"
                  onClick={() => (incrementAbility('Volonté'))}
                />
                <div className="neon-border-container">
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            )}
          {((rollFullAccess <= fullAccess || intelligenceTrainAccess <= roomAccess)
            && php < 31 && intelligence < 9)
            && (
              <div className="neon-button-container">
                <Button
                  cssClassName="neon-button neon-button--train"
                  buttonName="Intelligence"
                  url="/play/sequence"
                  onClick={() => (incrementAbility('Intelligence'))}
                />
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
            <Button
              cssClassName="neon-button neon-button--next"
              buttonName="PHP Suivant"
              url="/play/sequence"
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
    </div>
  );
};

// == Props validation
Train.propTypes = {
  fullAccess: PropTypes.number.isRequired,
  roomAccess: PropTypes.number.isRequired,
  php: PropTypes.number.isRequired,
  hp: PropTypes.number.isRequired,
  strength: PropTypes.number.isRequired,
  agility: PropTypes.number.isRequired,
  constitution: PropTypes.number.isRequired,
  will: PropTypes.number.isRequired,
  intelligence: PropTypes.number.isRequired,
  jsx: PropTypes.number.isRequired,
  xp: PropTypes.number.isRequired,
  xpCost: PropTypes.number.isRequired,
  jsxCost: PropTypes.number.isRequired,
  incrementAbility: PropTypes.func.isRequired,

};

// == Export
export default Train;
