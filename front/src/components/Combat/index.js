// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import local
import './style.scss';
import PlayerInfo from '../../containers/PlayerInfo';
import OpponentCombatInfo from './OpponentCombatInfo';

// == Component
const Combat = () => (
  <div className="main__play">
    <p className="combat__title">COMBAT </p>
    <div className="player__container">
      <PlayerInfo />
    </div>
    <p className="combat__presentation">VS Rat</p>
    <div className="oppoent__container"></div>
    <OpponentCombatInfo />
  </div>
);

// == Props validation
Combat.propTypes = {
};

// == Export
export default Combat;
