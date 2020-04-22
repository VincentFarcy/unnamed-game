// == Import npm
import React from 'react';
import Image from 'react-bootstrap/Image';

// == Import local
import './style.scss';
import hal from 'src/assets/images/hal8000.png';

// == Component
const HalInfo = () => (
  <div className="player-combat-info">
    <Image className="player-combat-info__avatar" src={hal} rounded />
  </div>
);

// == Props validation


// == Export
export default HalInfo;
