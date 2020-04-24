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
  addOpponnentReward,
  nextSequence,
  xpCombatReward,
  jsxCombatReward,
}) => {
  // == Updates the state to get the xpReward and the jsxReward
  useEffect(addOpponnentReward, []);
  useEffect(findRandomReward, []);
  
  return (
    <div className="reward__container">
      <div className="player-bar">
        <PlayerInfo />
      </div>
      <div className="main__play">
        <p className="reward__title"> Voici vos récompenses suite au combat</p>
        <p className="reward__p"> {`Vous avez gagné ${jsxReward + jsxCombatReward} JSX et ${xpReward + xpCombatReward} point(s) d'éxpérience`} </p>
        <div className="button__container">
          <Button
            cssClassName="next__button"
            url="/play/medic"
            buttonName="Suivant"
            onClick={nextSequence}
          />
        </div>
      </div>
    </div>
  );
};

// == Props validation
Reward.propTypes = {
  xpReward: PropTypes.number.isRequired,
  jsxReward: PropTypes.number.isRequired,
  xpCombatReward: PropTypes.number.isRequired,
  jsxCombatReward: PropTypes.number.isRequired,
  nextSequence: PropTypes.func.isRequired,
  findRandomReward: PropTypes.func.isRequired,
  addOpponnentReward: PropTypes.func.isRequired,
};


// == Export
export default Reward;
