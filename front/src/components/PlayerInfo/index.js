// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import Image from 'react-bootstrap/Image';
import ProgressBar from 'react-bootstrap/ProgressBar';


// == Import local
import './style.scss';
import avatar from 'src/assets/images/PlayerAvatar.svg';
import AdvancedInfo from '../../containers/AdvancedInfo';
import RessourceInfo from '../../containers/RessourceInfo';


// == Component
const PlayerInfo = ({ playerTotalHP, playerCurrentHP }) => (
  <div className="player-info">
    <div className="player-info__info-container">
      <AdvancedInfo />
    </div>
    <div className="player-info__avatar-container">
      <Image className="player-info__avatar" src={avatar} />
    </div>
    <div className="player-info__bar-container">
      <ProgressBar
        variant="success"
        min={0}
        max={playerTotalHP}
        now={playerCurrentHP}
        label={`HP: ${playerCurrentHP} / ${playerTotalHP}`}
      />
      <RessourceInfo />
    </div>
  </div>
);

// == Props validation
PlayerInfo.propTypes = {
  playerTotalHP: PropTypes.number.isRequired,
  playerCurrentHP: PropTypes.number.isRequired,
};

// == Export
export default PlayerInfo;
