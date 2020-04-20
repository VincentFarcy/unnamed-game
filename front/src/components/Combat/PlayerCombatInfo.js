// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import Image from 'react-bootstrap/Image';
import ProgressBar from 'react-bootstrap/ProgressBar';


// == Import local
import './style.scss';
import avatar from 'src/assets/images/PlayerAvatar.svg';

// == Component
const PlayerCombatInfo = ({ playerHp }) => {

  // @int used to calculate the health ProgressBar percentage
  const now = playerHp;

  return (
    <div className="player-combat-info">
      <ProgressBar className="player__progress" variant="success" min={0} max={75} now={playerHp} label={`HP: ${now}`} />
      <Image className="player-combat-info__avatar" src={avatar} rounded />
    </div>
  );
};

// == Props validation
PlayerCombatInfo.propTypes = {
  playerHp: PropTypes.number.isRequired,
};

// == Export
export default PlayerCombatInfo;
