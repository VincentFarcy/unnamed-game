// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Image from 'react-bootstrap/Image';
import ProgressBar from 'react-bootstrap/ProgressBar';


// == Import local
import './style.scss';


// == Component
const OpponentCombatInfo = ({ findOpponent, currentOpponent }) => {
  useEffect(findOpponent, []);
  const now = currentOpponent.opponentCurrentHP;

  return (
    <div className="opponent-combat-info">
      <Image className="opponent-combat-info__avatar" src={currentOpponent.image} rounded alt={currentOpponent.image} />
      <ProgressBar className="opponent__progress" variant="success" min={0} max={currentOpponent.health} now={now} label={`HP: ${now}/${currentOpponent.health}`} />
    </div>
  );
};

// == Props validation
OpponentCombatInfo.propTypes = {
  findOpponent: PropTypes.func.isRequired, 
  currentOpponent: PropTypes.shape({
      image: PropTypes.string,
      health: PropTypes.number,
  }).isRequired, 
};

// == Export
export default OpponentCombatInfo;
