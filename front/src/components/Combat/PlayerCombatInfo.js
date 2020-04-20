// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import Image from 'react-bootstrap/Image';
import ProgressBar from 'react-bootstrap/ProgressBar';


// == Import local
import './style.scss';
import avatar from 'src/assets/images/PlayerAvatar.svg';

// == Component
const PlayerCombatInfo = ({ totalPlayerHP, playerCurrentHP }) => (
  <div className="player-combat-info">
    <ProgressBar className="player__progress" variant="success" min={0} max={totalPlayerHP} now={playerCurrentHP} label={`HP: ${playerCurrentHP} / ${totalPlayerHP}`} />
    <Image className="player-combat-info__avatar" src={avatar} rounded />
  </div>
);

// == Props validation
PlayerCombatInfo.propTypes = {
  totalPlayerHP: PropTypes.number.isRequired,
  playerCurrentHP: PropTypes.number.isRequired,
};

// == Export
export default PlayerCombatInfo;
