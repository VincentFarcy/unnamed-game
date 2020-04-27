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
  xp,
  xpCost,
  actionRest,
}) => {
  const RollForMedicAccess = rollDice(1, 100);
  const RollForTrainAccess = rollDice(1, 100);

  return (
    <div className="story-container">
      <div className="main__play">
        <PlayerInfo />
        <p className="story__title">Que voulez-vous faire ?</p>
        <div className="button__container">
          <Button
            cssClassName="next__button"
            buttonName="Se reposer"
            url="/play/sequence"
            onClick={actionRest}
          />
          <Button cssClassName="next__button" buttonName="Exploration" url="/play/exploration" />
          {(medicAccess >= RollForMedicAccess) && (jsx >= 10)
          && (
            <Button cssClassName="next__button" buttonName="Hôpital" url="/play/medic" />
          )}
          {(trainAccess >= RollForTrainAccess) && (xp >= xpCost)
          && (
            <div className="button__container">
              <Button cssClassName="next__button" buttonName="Entrainement" url="/play/train" />
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
  actionRest: PropTypes.func.isRequired,
};

// == Export
export default Mainhub;
