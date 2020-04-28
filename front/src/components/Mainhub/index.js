// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

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
  jsxCost,
  xp,
  xpCost,
  actionRest,
  php,
  startMission,
}) => {
  const RollForMedicAccess = rollDice(1, 100);
  const RollForTrainAccess = rollDice(1, 100);

  return (
    <div className="player-action__container">
      <div className="player-bar">
        <PlayerInfo />
      </div>
      <div className="dialog">
        <h2 className="dialog__title">Que voulez-vous faire ?</h2>
        <div className="hub__button-container">
          {php < 30 && (
            <Button
              cssClassName="generic-button hub__button"
              buttonName="Se reposer"
              url="/play/sequence"
              onClick={actionRest}
            />
        )}
        {php < 30 && (
            <Button cssClassName="generic-button hub__button" buttonName="Exploration" url="/play/exploration" />
        )}
        {(medicAccess >= RollForMedicAccess) && (jsx >= 10) && (php > 4) && (php < 30)
          && (
              <Button cssClassName="generic-button hub__button" buttonName="Hôpital" url="/play/medic" />
          )}
        {(trainAccess >= RollForTrainAccess) && (xp >= xpCost) && (php > 5) && (php < 30) && (jsx >= jsxCost)
          && (
              <Button cssClassName="generic-button hub__button" buttonName="Entrainement" url="/play/train" />
          )}
        {(php > 12)
          && (
              <Button cssClassName="generic-button hub__button" buttonName="Mission" url="/play/event" onClick={startMission} />
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
  jsxCost: PropTypes.number.isRequired,
  xp: PropTypes.number.isRequired,
  xpCost: PropTypes.number.isRequired,
  actionRest: PropTypes.func.isRequired,
  php: PropTypes.number.isRequired,
  startMission: PropTypes.func.isRequired,
};

// == Export
export default Mainhub;
