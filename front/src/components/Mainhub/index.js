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
  vendingAccess,
  jsx,
  actionRest,
}) => {
  const RollForMedicAccess = rollDice(1, 100);
  const RollForTrainAccess = rollDice(1, 100);
  const RollForVendingAccess = rollDice(1, 100);

  return (
    <div className="story-container">
      <div className="main__play">
        <PlayerInfo />
        <p className="story__title">Que voulez-vous faire ?</p>
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
          <Button cssClassName="next__button" buttonName="Exploration" url="/play/exploration" />
        {(medicAccess >= RollForMedicAccess) && (jsx >= 10)
          && (
            <Button cssClassName="next__button" buttonName="Hôpital" url="/play/medic" />
          )}
        {trainAccess >= RollForTrainAccess
          && (
            <Button cssClassName="next__button" buttonName="Entrainement" url="/play/death" />
          )}
        {vendingAccess >= RollForVendingAccess
          && (
            <Button cssClassName="next__button" buttonName="Magasin" url="/play/death" />
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
  vendingAccess: PropTypes.number.isRequired,
  jsx: PropTypes.number.isRequired,
  actionRest: PropTypes.func.isRequired,
};


// == Export
export default Mainhub;
