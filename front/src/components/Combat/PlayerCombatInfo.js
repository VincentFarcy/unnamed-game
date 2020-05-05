// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import Image from 'react-bootstrap/Image';
import ProgressBar from 'react-bootstrap/ProgressBar';


// == Import local
import './style.scss';
import avatar from 'src/assets/images/PlayerAvatar.svg';

// == Component
const PlayerCombatInfo = ({ playerTotalHP, playerCurrentHP }) => (
  <div className="combat-info">
    <ProgressBar variant="success" min={0} max={playerTotalHP} now={playerCurrentHP} label={`HP: ${playerCurrentHP} / ${playerTotalHP}`} />
    <Image className="combat-info__avatar" src={avatar} rounded />
  </div>
);

// == Props validation
PlayerCombatInfo.propTypes = {
  playerTotalHP: PropTypes.number.isRequired,
  playerCurrentHP: PropTypes.number.isRequired,
};

// == Export
export default PlayerCombatInfo;
