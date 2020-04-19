// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import Button from '../LinkButton';
import PlayerInfo from '../../containers/PlayerInfo';


// == Import local
import './style.scss';


// == Component
const Reward = ({ rewardContent, findOpponent }) => (
  <>
    <div className="player-bar">
      <PlayerInfo />
    </div>
    <div className="main__play">
      <p className="reward__title"> Voici vos récompenses suite au combat</p>
      <p className="reward__p"> Vous avez gagné {rewardContent.value} {rewardContent.content}</p>
      <div className="button__container">
        <Button cssClassName="next__button" url="/combat" buttonName="Suivant" onClick={findOpponent}/>
      </div>
    </div>
  </>
);

// == Props validation
Reward.propTypes = {
  rewardContent: PropTypes.shape({
    content: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
  }).isRequired,
};


// == Export
export default Reward;
