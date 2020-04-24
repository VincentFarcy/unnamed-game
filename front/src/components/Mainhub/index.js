// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import Button from '../LinkButton';
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
  xp,
  xpCost,
}) => {
  const RollForMedicAccess = rollDice(1, 100);
  const RollForTrainAccess = rollDice(1, 100);
  console.log(RollForTrainAccess);
  console.log(trainAccess);
  console.log(xp, xpCost);
  const RollForVendingAccess = rollDice(1, 100);

  return (
    <div className="story-container">
      <div className="main__play">
        <PlayerInfo />
        <p className="story__title">Que voulez-vous faire ?</p>
        <div className="button__container">
          <Button cssClassName="next__button" buttonName="Se reposer" url="/play/rest" />
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
        {(trainAccess >= RollForTrainAccess) && (xp >= xpCost)
          && (
            <div className="button__container">
              <Button cssClassName="next__button" buttonName="Entrainement" url="/play/train" />
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
  xp: PropTypes.number.isRequired,
  xpCost: PropTypes.number.isRequired,
};

// == Export
export default Mainhub;
