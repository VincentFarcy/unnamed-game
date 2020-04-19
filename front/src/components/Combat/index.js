// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import local
import './style.scss';
import PlayerCombatInfo from '../../containers/PlayerCombatInfo';
import OpponentCombatInfo from '../../containers/OpponentCombatInfo';


// == Component
const Combat = ({ opponent }) => {

  return (
    <div className="main__play">
      <h2 className="combat__title">COMBAT </h2>
      <div className="combat__container">
        <div className="player__container">
          <PlayerCombatInfo />
        </div>
        <p className="combat__presentation">VS {opponent.name}</p>
        <div className="opponent__container"></div>
        <OpponentCombatInfo {...opponent} />
      </div>
    </div>
  );
}

// == Props validation
Combat.propTypes = {
  opponent: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }
  ).isRequired,
};

// == Export
export default Combat;
