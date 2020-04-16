// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import Button from '../LinkButton';
import PlayerInfo from '../../containers/PlayerInfo';


// == Import local
import './style.scss';


// == Component
const Reward = ({ rewardContent, rewardTitle }) => (
  <>
    <div className="player-bar">
      <PlayerInfo />
    </div>
    <div className="main__play">
      <p className="reward__title"> {rewardTitle} Voici vos récompenses suite au combat</p>
      <p className="reward__p">{rewardContent} Contenu de la récompense suite au combat</p>
      <div className="button__container">
        <Button cssClassName="next__button" url="/play" buttonName="Suivant" />
      </div>
    </div>
  </>
);

// == Props validation
Reward.propTypes = {
  rewardTitle: PropTypes.string.isRequired,
  rewardContent: PropTypes.string.isRequired,
};


// == Export
export default Reward;
