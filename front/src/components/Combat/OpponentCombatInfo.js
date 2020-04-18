// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import Image from 'react-bootstrap/Image';
import ProgressBar from 'react-bootstrap/ProgressBar';


// == Import local
import './style.scss';
import avatar from 'src/assets/images/hal8000.png';

// == Component
const OpponentCombatInfo = ({ }) => {
  const now = 50;

  return (
    <div className="opponent-combat-info">
      <Image className="opponent-combat-info__avatar" src={avatar} rounded />
      <ProgressBar className="opponent__progress" variant="success" min={0} max={75} now={50} label={`HP: ${now}`} />


    </div>
  );
};

// == Props validation
OpponentCombatInfo.propTypes = {
};

// == Export
export default OpponentCombatInfo;
