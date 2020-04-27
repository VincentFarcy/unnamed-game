// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

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
    <div className="story-container">
      <div className="main__play">
        <PlayerInfo />
        <p className="story__title">Que voulez-vous faire ?</p>
          {php < 30 && (
            <div className="button__container">
              <OverlayTrigger
                placement="top"
                delay={{ show: 300, hide: 300 }}
                trigger='hover'
                overlay={(
                  <Tooltip id="rest-tooltip">
                    En cliquant ici, vous récupérez des HP et passer au PHP suivant.
                  </Tooltip>
                )}
              >
                <button className="next__button rest" onClick={actionRest} >Se reposer</button>
              </OverlayTrigger>
            </div>
          )}
        {php < 30 && (
          <div className="button__container">
            <Button cssClassName="next__button" buttonName="Exploration" url="/play/exploration" />
          </div>
        )}
        {(medicAccess >= RollForMedicAccess) && (jsx >= 10) && (php < 30)
          && (
            <div className="button__container">
              <Button cssClassName="next__button" buttonName="Hôpital" url="/play/medic" />
            </div>
          )}
        {(trainAccess >= RollForTrainAccess) && (xp >= xpCost) && (php > 5) && (php < 30) && (jsx >= jsxCost)
          && (
            <div className="button__container">
              <Button cssClassName="next__button" buttonName="Entrainement" url="/play/train" />
            </div>
          )}
        {(php > 9)
          && (
            <div className="button__container">
              <Button cssClassName="next__button" buttonName="Mission" url="/play/event" onClick={startMission} />
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
  jsxCost: PropTypes.number.isRequired,
  xp: PropTypes.number.isRequired,
  xpCost: PropTypes.number.isRequired,
  actionRest: PropTypes.func.isRequired,
  php: PropTypes.number.isRequired,
  startMission: PropTypes.func.isRequired,
};

// == Export
export default Mainhub;
