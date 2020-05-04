// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';


// == Import local
import './style.scss';
import Button from '../LinkButton';
import PlayerInfo from '../../containers/PlayerInfo';


// == Component
const Reward = ({
  xpReward,
  jsxReward,
  eventRewardXp,
  eventRewardJsx,
  xpCombatReward,
  jsxCombatReward,
  addOpponnentReward,
  findRandomReward,
  nextSequence,
}) => {
  // == Updates the state to get the xpReward and the jsxReward
  useEffect(addOpponnentReward, []);
  useEffect(findRandomReward, []);

  return (
    <div className="player-action__container">
      <div className="player-bar">
        <PlayerInfo />
      </div>
      <div className="dialog">
        <h2 className="dialog__title">Voici vos récompenses</h2>
        <p className="dialog__p"> {`Vous avez gagné ${(eventRewardXp !== null ? eventRewardXp : xpReward) + xpCombatReward} point(s) d'expérience et ${(eventRewardJsx !== null ? eventRewardJsx : jsxReward) + jsxCombatReward} JSX.`} </p>
        <div className="next-button-container">
          <div className="neon-button-container">
            <Button
              cssClassName="neon-button neon-button--next"
              url="/play/sequence"
              buttonName="PHP Suivant"
              onClick={nextSequence}
            />
            <div className="neon-border-container">
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// == Props validation
Reward.propTypes = {
  xpReward: PropTypes.number.isRequired,
  jsxReward: PropTypes.number.isRequired,
  eventRewardXp: PropTypes.number,
  eventRewardJsx: PropTypes.number,
  xpCombatReward: PropTypes.number.isRequired,
  jsxCombatReward: PropTypes.number.isRequired,
  addOpponnentReward: PropTypes.func.isRequired,
  findRandomReward: PropTypes.func.isRequired,
  nextSequence: PropTypes.func.isRequired,
};

// == Default props
Reward.defaultProps = {
  eventRewardJsx: null,
  eventRewardXp: null,
};

// == Export
export default Reward;
