// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Button from '../LinkButton';
import PlayerInfo from '../../containers/PlayerInfo';


// == Import local
import './style.scss';


// == Component
const Reward = ({
  xpReward,
  jsxReward,
  findRandomReward,
  nextSequence,
}) => {
  // == Updates the state to get the xpReward and the jsxReward
  useEffect(findRandomReward, []);
  return (
    <>
      <div className="player-bar">
        <PlayerInfo />
      </div>
      <div className="main__play">
        <p className="reward__title"> Voici vos récompenses suite au combat</p>
        <p className="reward__p"> {`Vous avez gagné ${jsxReward} JSX et ${xpReward} point(s) d'éxpérience`} </p>
        <div className="button__container">
          <Button
            cssClassName="next__button"
            url="/play/sequence"
            buttonName="Suivant"
            onClick={nextSequence}
          />
        </div>
      </div>
    </>
  );
};

// == Props validation
Reward.propTypes = {
  xpReward: PropTypes.number.isRequired,
  jsxReward: PropTypes.number.isRequired,
  nextSequence: PropTypes.func.isRequired,
  findRandomReward: PropTypes.func.isRequired,
};


// == Export
export default Reward;
