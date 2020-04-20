// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import Image from 'react-bootstrap/Image';
import ProgressBar from 'react-bootstrap/ProgressBar';
import AdvancedInfo from '../../containers/AdvancedInfo';
import RessourceInfo from '../../containers/RessourceInfo';


// == Import local
import './style.scss';
import avatar from 'src/assets/images/PlayerAvatar.svg';


// == Component
const PlayerInfo = ({ playerHp }) => {

  // @int used to calculate the health ProgressBar percentage
  const now = playerHp;

  return (
    <div className="player-info">
      <AdvancedInfo />
      <Image className="player-info__avatar" src={avatar} rounded />
      <ProgressBar variant="success" min={0} max={75} now={playerHp} label={`HP: ${now}`} />
      <RessourceInfo />
    </div>
  );
};

// == Props validation
PlayerInfo.propTypes = {
  playerHp: PropTypes.number.isRequired,
};

// == Export
export default PlayerInfo;
