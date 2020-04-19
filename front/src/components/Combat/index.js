// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import local
import './style.scss';
import PlayerCombatInfo from '../../containers/PlayerCombatInfo';
import OpponentCombatInfo from '../../containers/OpponentCombatInfo';


// == Component
const Combat = ({ findOpponent }) => {
  findOpponent();


  return (
  <div className="main__play">
    <h2 className="combat__title">COMBAT </h2>
    <div className="combat__container">
      <div className="player__container">
        <PlayerCombatInfo />
      </div>
      <p className="combat__presentation">VS lal</p>
      <div className="opponent__container"></div>
      <OpponentCombatInfo />
    </div>
  </div>
);
}

// == Props validation
Combat.propTypes = {
};

// == Export
export default Combat;
