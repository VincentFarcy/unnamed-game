// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import Image from 'react-bootstrap/Image';
import ProgressBar from 'react-bootstrap/ProgressBar';
import roll from '../../func';


// == Import local
import './style.scss';
import avatar from 'src/assets/images/hal8000.png';

// == Component
const OpponentCombatInfo = ({ }) => {
  const now = 50;
  // const findOpponentId = roll(1, 100);
  // const opponentTableId = opponentsTable.find(
  //   (opponent) => (findOpponentId > opponent.rollFrom && findOpponentId < opponent.rollTo));
  // const opponentId = opponentTableId.opponent.id;
  // const opponent = opponents.find(
  //   (opponent) => (opponentId === opponent.id));
  // console.log(opponent);

  return (
    <div className="opponent-combat-info">
      <Image className="opponent-combat-info__avatar" src={avatar} rounded alt="none"/>
      <ProgressBar className="opponent__progress" variant="success" min={0} max={75} now={50} label={`HP: ${now}`} />


    </div>
  );
};

// == Props validation
OpponentCombatInfo.propTypes = {
};

// == Export
export default OpponentCombatInfo;
