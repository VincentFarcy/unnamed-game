// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Button from '../LinkButton';
import PlayerInfo from '../../containers/PlayerInfo';
import { rollDice } from '../../func';


// == Import local
import './style.scss';


// == Component
const Reward = ({ currentReward, findRandomReward }) => {
  useEffect(findRandomReward, []);
  // == Dice Roll to manage the Random Loot Table
  console.log('rewardcontent', currentReward);
  // == Here we determine from the Loot Table above the amount of moneyu (JSX)
  // and Experience (XP) the player wins
  const xpRoll = rollDice(currentReward.minXp, currentReward.maxXp);
  const jsxRoll = rollDice(currentReward.minMoney, currentReward.maxMoney);

  return (
    <>
      <div className="player-bar">
        <PlayerInfo />
      </div>
      <div className="main__play">
        <p className="reward__title"> Voici vos récompenses suite au combat</p>
        <p className="reward__p"> {`Vous avez gagné ${jsxRoll} JSX et ${xpRoll} point(s) d'éxpérience`} </p>
        <div className="button__container">
          <Button cssClassName="next__button" url="/play/sequence" buttonName="Suivant" />
        </div>
      </div>
    </>
  );
};

// == Props validation
Reward.propTypes = {
  currentReward: PropTypes.arrayOf(
    PropTypes.shape({
      maxXp: PropTypes.number.isRequired,
      maxMoney: PropTypes.number.isRequired,
    }),
  ).isRequired,
  findRandomReward: PropTypes.func.isRequired,
};


// == Export
export default Reward;
