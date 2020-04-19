// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import local
import './style.scss';
import PlayerCombatInfo from '../../containers/PlayerCombatInfo';
import OpponentCombatInfo from '../../containers/OpponentCombatInfo';
import roll from '../../func';

// == Component
const Combat = ({ opponents, opponentsTable }) => {
  console.log(opponents);
  console.log(opponentsTable);
  const findOpponentId = roll(1,100);
  console.log(findOpponentId);
  const opponentId = opponentsTable.find(findOpponentId > opponentsTable.rollFrom && findOpponentId < opponentsTable.rollTo)
  console.log(opponentId);
  
  return (
  <div className="main__play">
    <h2 className="combat__title">COMBAT </h2>
    <div className="combat__container">
      <div className="player__container">
        <PlayerCombatInfo />
      </div>
      <p className="combat__presentation">VS Hal</p>
      <div className="opponent__container"></div>
      <OpponentCombatInfo />
    </div>
  </div>
);
}

// == Props validation
Combat.propTypes = {
  opponents: PropTypes.array.isRequired,

};

// == Export
export default Combat;
