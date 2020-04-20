// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import Button from '../LinkButton';
import PlayerInfo from '../../containers/PlayerInfo';
import rollDice from '../../func';


// == Import local
import './style.scss';


// == Component
const Reward = ({ rewardContent }) => {
  // == Dice Roll to manage the Random Loot Table
  const rollDice100 = () => rollDice(1, 100);
  const rollDiceReward = rollDice100();

  // == Here we find in the database which Loot Table to pick the rewards from
  const rollRange = rewardContent.find(
    (reward) => (reward.rollFrom < rollDiceReward && rollDiceReward < reward.rollTo),
  );

  // == Here we determine from the Loot Table above the amount of moneyu (JSX) 
  // and Experience (XP) the player wins
  const xpRoll = rollDice(rollRange.minXp, rollRange.maxXp);
  const jsxRoll = rollDice(rollRange.minMoney, rollRange.maxMoney);

  return (
    <>
      <div className="player-bar">
        <PlayerInfo />
      </div>
      <div className="main__play">
        <p className="reward__title"> Voici vos récompenses suite au combat</p>
        <p className="reward__p"> {`Vous avez gagné ${jsxRoll} JSX et ${xpRoll} point(s) d'éxpérience`} </p>
        <div className="button__container">
          <Button cssClassName="next__button" url="/play/combat" buttonName="Suivant" />
        </div>
      </div>
    </>
  );
};

// == Props validation
Reward.propTypes = {
  rewardContent: PropTypes.arrayOf(
    PropTypes.shape({
      maxXp: PropTypes.number.isRequired,
      maxMoney: PropTypes.number.isRequired,
    }),
  ).isRequired,
};


// == Export
export default Reward;
