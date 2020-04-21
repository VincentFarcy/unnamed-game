// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import Image from 'react-bootstrap/Image';
import ProgressBar from 'react-bootstrap/ProgressBar';


// == Import local
import './style.scss';
import avatar from 'src/assets/images/PlayerAvatar.svg';

// == Component
const OpponentInfo = ({  }) => {
  const now = 50;

  return (
    <div className="opponent-info">
      <ProgressBar variant="success" min={0} max={75} now={50} label={`HP: ${now}`} />
      <p className="opponent-info__value"> Sabine </p>
      <Image className="opponent-info__avatar" src={avatar} rounded />
    </div>
  );
};

// == Props validation
OpponentInfo.propTypes = {
};

// == Export
export default OpponentInfo;
