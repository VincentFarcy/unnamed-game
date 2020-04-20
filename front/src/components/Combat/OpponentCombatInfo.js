// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Image from 'react-bootstrap/Image';
import ProgressBar from 'react-bootstrap/ProgressBar';


// == Import local
import './style.scss';


// == Component
const OpponentCombatInfo = (props) => {
  useEffect(props.findOpponent, []);
  console.log('props in OpponentCombatInfo', props)
  const now = 10;

  return (
    <div className="opponent-combat-info">
      <Image className="opponent-combat-info__avatar" src={props.currentOpponent.image} rounded alt={props.currentOpponent.image} />
      <ProgressBar className="opponent__progress" variant="success" min={0} max={props.currentOpponent.health} now={now} label={`HP: ${now}/${props.currentOpponent.health}`} />
    </div>
  );
};

// == Props validation
OpponentCombatInfo.propTypes = {
  findOpponent: PropTypes.func.isRequired, 
};

// == Export
export default OpponentCombatInfo;
