// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import Button from '../LinkButton';
import { rollDice } from '../../func';

// == Import local
import './style.scss';

// == Component
const Train = ({
  fullAccess,
  roomAccess,
  incrementAbility,

}) => {
  const rollFullAccess = rollDice(1, 100);
  const strengthTrainAccess = rollDice(1, 100);
  const agilityTrainAccess = rollDice(1, 100);
  const enduranceTrainAccess = rollDice(1, 100);
  const willTrainAccess = rollDice(1, 100);
  const intelligenceTrainAccess = rollDice(1, 100);

  return (
    <div className="main__play">
      <p className="train__title">Salle de gym</p>
      <div className="button__container">
        {(rollFullAccess <= fullAccess || strengthTrainAccess <= roomAccess) && <Button cssClassName="strength__button" buttonName="Force" url="/play/sequence" onClick={() => (incrementAbility('Force'))} />}
        {(rollFullAccess <= fullAccess || agilityTrainAccess <= roomAccess) && <Button cssClassName="agility__button" buttonName="Agilité" url="/play/sequence" onClick={() => (incrementAbility('Agilité'))} />}
        {(rollFullAccess <= fullAccess || enduranceTrainAccess <= roomAccess) && <Button cssClassName="endurance__button" buttonName="Constitution" url="/play/sequence" onClick={() => (incrementAbility('Constitution'))} />}
        {(rollFullAccess <= fullAccess || willTrainAccess <= roomAccess) && <Button cssClassName="will__button" buttonName="Volonté" url="/play/sequence" onClick={() => (incrementAbility('Volonté'))} />}
        {(rollFullAccess <= fullAccess || intelligenceTrainAccess <= roomAccess) && <Button cssClassName="intelligence__button" buttonName="Intelligence" url="/play/sequence" onClick={() => (incrementAbility('Intelligence'))} />}
      </div>
      <div className="button__container">
        <Button cssClassName="next__button" buttonName="Suivant" url="/play/sequence" />
      </div>
    </div>
  );
};

// == Props validation
Train.propTypes = {
  fullAccess: PropTypes.number.isRequired,
  roomAccess: PropTypes.number.isRequired,
  incrementAbility: PropTypes.func.isRequired,
};


// == Export
export default Train;
