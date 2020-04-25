// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import Button from '../LinkButton';
import Link from 'react-router-dom';
import { rollDice } from '../../func';
import PlayerInfo from '../../containers/PlayerInfo';

// == Import local
import './style.scss';

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
          <Button cssClassName="next__button inactive" buttonName="Se reposer" url="/play/mainhub" onClick={actionRest} />
        </div>
        <div className="button__container">
          <Button cssClassName="next__button" buttonName="Exploration" url="/play/exploration" />
        </div>
        {(medicAccess >= RollForMedicAccess) && (jsx >= 10)
          && (
            <div className="button__container">
              <Button cssClassName="next__button" buttonName="Hôpital" url="/play/medic" />
            </div>
          )}
        {trainAccess >= RollForTrainAccess
          && (
            <div className="button__container">
              <Button cssClassName="next__button" buttonName="Entrainement" url="/play/death" />
            </div>
          )}
        {vendingAccess >= RollForVendingAccess
          && (
            <div className="button__container">
              <Button cssClassName="next__button" buttonName="Magasin" url="/play/death" />
            </div>
          )}
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
