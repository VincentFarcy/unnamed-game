// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import Image from 'react-bootstrap/Image';
import ProgressBar from 'react-bootstrap/ProgressBar';
import avatar from 'src/assets/images/PlayerAvatar.svg';
import AdvancedInfo from '../../containers/AdvancedInfo';
import RessourceInfo from '../../containers/RessourceInfo';


// == Import local
import './style.scss';


// == Component
const PlayerInfo = ({ playerTotalHP, playerCurrentHP }) => (
  <div className="player-info">
    <AdvancedInfo />
    <Image className="player-info__avatar" src={avatar} rounded />
    <ProgressBar variant="success" min={0} max={playerTotalHP} now={playerCurrentHP} label={`HP: ${playerCurrentHP} / ${playerTotalHP}`} />
    <RessourceInfo />
  </div>
);

// == Props validation
PlayerInfo.propTypes = {
  playerTotalHP: PropTypes.number.isRequired,
  playerCurrentHP: PropTypes.number.isRequired,
};

// == Export
export default PlayerInfo;
