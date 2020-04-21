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
const PlayerInfo = ({ mainCounter, playerTotalHP, playerCurrentHP }) => (
  <div className="player-info">
    <Image className="player-info__avatar" src={avatar} rounded />
    <ProgressBar variant="success" min={0} max={playerTotalHP} now={playerCurrentHP} label={`HP: ${playerCurrentHP} / ${playerTotalHP}`} />
    <p className="player-info__counter"> {`Temps : ${mainCounter} PHP`} </p>
  </div>
);

// == Props validation
PlayerInfo.propTypes = {
  mainCounter: PropTypes.number.isRequired,
  playerTotalHP: PropTypes.number.isRequired,
  playerCurrentHP: PropTypes.number.isRequired,
};

// == Export
export default PlayerInfo;
