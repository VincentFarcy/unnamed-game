// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

// == Import local
import './style.scss';
import PlayerInfo from '../../containers/PlayerInfo';
import Button from '../LinkButton';
import { rollDice } from '../../func';

// == Component
const Mainhub = ({
  medicAccess,
  trainAccess,
  jsx,
  xp,
  xpCost,
  jsxCost,
  php,
  hp,
  actionRest,
  startMission,
  nextSequence,
}) => {
  const RollForMedicAccess = rollDice(1, 100);
  const RollForTrainAccess = rollDice(1, 100);

  return (
    <div className="player-action__container">
      {(php > 32 || hp <= 0) && <Redirect to="/play/death" />}
      <div className="player-bar">
        <PlayerInfo />
      </div>
      <div className="dialog">
        <h2 className="dialog__title">Que voulez-vous faire ?</h2>
        <div className="hub__button-container">
          {php < 30 && (
            <div className="neon-button-container">
              <Button
                cssClassName="neon-button"
                buttonName="Se reposer"
                url="/play/sequence"
                onClick={actionRest}
              />
              <div className="neon-border-container">
                <span />
                <span />
                <span />
                <span />
              </div>
            </div>
          )}
          {php < 30 && (
            <div className="neon-button-container">
              <Button cssClassName="neon-button" buttonName="Exploration" url="/play/exploration" />
              <div className="neon-border-container">
                <span />
                <span />
                <span />
                <span />
              </div>
            </div>
          )}
          {(medicAccess >= RollForMedicAccess) && (jsx >= 10) && (php > 4) && (php < 30)
            && (
              <div className="neon-button-container">
                <Button cssClassName="neon-button" buttonName="Hôpital" url="/play/medic" />
                <div className="neon-border-container">
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            )}
          {(trainAccess >= RollForTrainAccess)
            && (xp >= xpCost) && (php > 5) && (php < 30) && (jsx >= jsxCost)
            && (
              <div className="neon-button-container">
                <Button
                  cssClassName="neon-button"
                  buttonName="Augmentation"
                  url="/play/train"
                  onClick={nextSequence}
                />
                <div className="neon-border-container">
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            )}
          {(php > 12)
            && (
              <div className="neon-button-container">
                <Button
                  cssClassName="neon-button"
                  buttonName="Mission"
                  url="/play/event"
                  onClick={startMission}
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
      </div>
    </div>
  );
};

// == Props validation
Mainhub.propTypes = {
  medicAccess: PropTypes.number.isRequired,
  trainAccess: PropTypes.number.isRequired,
  jsx: PropTypes.number.isRequired,
  xp: PropTypes.number.isRequired,
  xpCost: PropTypes.number.isRequired,
  jsxCost: PropTypes.number.isRequired,
  php: PropTypes.number.isRequired,
  hp: PropTypes.number.isRequired,
  actionRest: PropTypes.func.isRequired,
  startMission: PropTypes.func.isRequired,
  nextSequence: PropTypes.func.isRequired,
};

// == Export
export default Mainhub;
