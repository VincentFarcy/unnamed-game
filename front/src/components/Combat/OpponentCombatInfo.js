// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import Image from 'react-bootstrap/Image';
import ProgressBar from 'react-bootstrap/ProgressBar';


// == Import local
import './style.scss';


// == Component
const OpponentCombatInfo = ({ health, image }) => {
  const now = 7;

  return (
    <div className="opponent-combat-info">
      <Image className="opponent-combat-info__avatar" src={image} rounded alt="none" />
      <ProgressBar className="opponent__progress" variant="success" min={0} max={health} now={now} label={`HP: ${now}/${health}`} />
    </div>
  );
};

// == Props validation
OpponentCombatInfo.propTypes = {
  image: PropTypes.string,
  health: PropTypes.number.isRequired,
};

// == Export
export default OpponentCombatInfo;
