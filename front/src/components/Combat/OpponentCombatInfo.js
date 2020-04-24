// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import Image from 'react-bootstrap/Image';
import ProgressBar from 'react-bootstrap/ProgressBar';
import drone from '../../assets/images/drone.svg';
import bat from '../../assets/images/bat.svg';
import goblin from '../../assets/images/goblin.svg';
import wolf from '../../assets/images/wolf.svg';
import rat from '../../assets/images/rat.svg';
import robotMonowheel from '../../assets/images/robotMonowheel.svg';
import robotVintage from '../../assets/images/robotVintage.svg';
import sabine from '../../assets/images/sabine.svg';
import slime from '../../assets/images/slime.svg';
import spider from '../../assets/images/spider.svg';

// == Import local
import './style.scss';


// == Component
const OpponentCombatInfo = ({ currentOpponent }) => {
  const now = currentOpponent.opponentCurrentHP;
  const findImage = currentOpponent.image;

  return (
    <div className="opponent-combat-info">
      {findImage == 'drone' ? <Image className="opponent-combat-info__avatar" src={drone} rounded alt="drone" /> : ''}
      {findImage == 'bat' ? <Image className="opponent-combat-info__avatar" src={bat} rounded alt="bat" /> : ''}
      {findImage == 'goblin' ? <Image className="opponent-combat-info__avatar" src={goblin} rounded alt="goblin" /> : ''}
      {findImage == 'wolf' ? <Image className="opponent-combat-info__avatar" src={wolf} rounded alt="wolf" /> : ''}
      {findImage == 'rat' ? <Image className="opponent-combat-info__avatar" src={rat} rounded alt="rat" /> : ''}
      {findImage == 'robotMonowheel' ? <Image className="opponent-combat-info__avatar" src={robotMonowheel} rounded alt="robot1" /> : ''}
      {findImage == 'robotVintage' ? <Image className="opponent-combat-info__avatar" src={robotVintage} rounded alt="robot2" /> : ''}
      {findImage == 'sabine' ? <Image className="opponent-combat-info__avatar" src={sabine} rounded alt="sabine" /> : ''}
      {findImage == 'slime' ? <Image className="opponent-combat-info__avatar" src={slime} rounded alt="slime" /> : ''}
      {findImage == 'spider' ? <Image className="opponent-combat-info__avatar" src={spider} rounded alt="spider" /> : ''}

      <ProgressBar className="opponent__progress" variant="success" min={0} max={currentOpponent.health} now={now} label={`HP: ${now}/${currentOpponent.health}`} />
    </div>
  );
};

// == Props validation
OpponentCombatInfo.propTypes = {
  currentOpponent: PropTypes.shape({
    image: PropTypes.string,
    health: PropTypes.number,
    opponentCurrentHP: PropTypes.number,
  }).isRequired,
};

// == Export
export default OpponentCombatInfo;
