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
  const findOpponentId = roll(1,100);
  const opponentTableId = opponentsTable.find(
    (opponent) => (findOpponentId > opponent.rollFrom && findOpponentId < opponent.rollTo));
  const opponentId = opponentTableId.opponent.id;
  console.log(opponentId);
  const opponent = opponents.find(
    (opponent) => (opponentId === opponent.id));
  console.log(opponent);

  return (
  <div className="main__play">
    <h2 className="combat__title">COMBAT </h2>
    <div className="combat__container">
      <div className="player__container">
        <PlayerCombatInfo />
      </div>
      <p className="combat__presentation">VS {opponent.name}</p>
      <div className="opponent__container"></div>
      <OpponentCombatInfo />
    </div>
  </div>
);
}

// == Props validation
Combat.propTypes = {
  opponents: PropTypes.array.isRequired,
  opponentsTable: PropTypes.array.isRequired,

};

// == Export
export default Combat;
