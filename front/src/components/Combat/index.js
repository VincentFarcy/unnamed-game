// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

// == Import local
import './style.scss';
import AdvancedInfo from '../../containers/AdvancedInfo';
import PlayerCombatInfo from '../../containers/PlayerCombatInfo';
import OpponentCombatInfo from '../../containers/OpponentCombatInfo';
import LinkButton from '../LinkButton';
import { rollDice } from '../../func';

// == Component
const Combat = ({
  findOpponent,
  opponent,
  player,
  isCombatOn,
  gameParameters,
  applyDamage,
  runAway,
  endFight
}) => {
  useEffect(findOpponent, []);

  // 
  const fightRound = (touch, dodge) => {
    const roll = rollDice(gameParameters.minTouchRoll, gameParameters.maxTouchRoll);
    if (roll === gameParameters.maxTouchRoll) {
      return true
    }
    else {
      return (touch + roll) > (dodge * 2);
    }
  };

  // combat function
  const launchFight = () => {
    const PLAYER = 'PLAYER';
    const OPPONENT = 'OPPONENT';
    // initiative
    let speedPlayer = player.baseSpeed + rollDice(gameParameters.minSpeedRoll, gameParameters.maxSpeedRoll);
    let speedOpponent = opponent.speed + rollDice(gameParameters.minSpeedRoll, gameParameters.maxSpeedRoll);

    // who starts the fight
    let currentFighter = PLAYER;
    if (speedOpponent > speedPlayer) {
      currentFighter = OPPONENT;
    };

    // Player's HP
    let playerHP = player.playerCurrentHP;
    // Opponent's HP
    let opponentHP = opponent.opponentCurrentHP;
    // the fight goes on
    do {
      switch (currentFighter) {
        case PLAYER:
          const playerTouch = fightRound(player.baseTouch , opponent.dodge);
          opponentHP = opponentHP - 2;
          currentFighter = OPPONENT;
          applyDamage({
            'playerCurrentHP': (playerHP > 0) ? playerHP : 0,
            'opponentCurrentHP': (opponentHP > 0) ? opponentHP : 0,
          });
          break;
        case OPPONENT:
          const opponentTouch = fightRound(opponent.touch, player.dodge);
          playerHP = playerHP - 2;
          currentFighter = PLAYER;
          applyDamage({
            'playerCurrentHP': (playerHP > 0) ? playerHP : 0,
            'opponentCurrentHP': (opponentHP > 0) ? opponentHP : 0,
          });
          break;
      }
    }
    // as long as one of the fighter's HP is above 0
    while (playerHP > 0 && opponentHP > 0);
    endFight();
  };

  return (
    <div className="main__play">
      <h2 className="combat__title">COMBAT </h2>
      <AdvancedInfo />
      <div className="combat__container">
        <div className="player__container">
          <PlayerCombatInfo />
        </div>
        {
          isCombatOn ?
          <div className="combat__choices">
            <Button
              className="choice"
              variant="danger"
              onClick={launchFight}
            >
              Combattre
            </Button>
            {/* when you choose to runAway, you have to be redirected and add 1 to PHP */}
            <LinkButton
              cssClassName="choice btn-warning"
              buttonName="Fuir"
              url="/play/reward"
              onClick={runAway}
            />
          </div> 
          :
          <div className="combat__choices">
            <LinkButton
              cssClassName="choice btn-warning"
              buttonName="Suivant"
              url="/play/reward"
            />
          </div> 
        }
        <p className="combat__presentation">VS {opponent.name}</p>
        <div className="opponent__container">
          <OpponentCombatInfo />
        </div>
      </div>
    </div>
  );
}

// == Props validation
Combat.propTypes = {
  findOpponent: PropTypes.func.isRequired,
  opponent: PropTypes.shape({
    name: PropTypes.string,
    opponentCurrentHP: PropTypes.number.isRequired,
  }).isRequired,
  player: PropTypes.shape({
    playerCurrentHP: PropTypes.number.isRequired,
  }).isRequired,
  isCombatOn: PropTypes.bool.isRequired,
  gameParameters: PropTypes.shape({
    minTouchRoll: PropTypes.number.isRequired,
    maxTouchRoll: PropTypes.number.isRequired,
    minDamageRoll: PropTypes.number.isRequired,
    maxDamageRoll: PropTypes.number.isRequired,
    minSpeedRoll: PropTypes.number.isRequired,
    maxSpeedRoll: PropTypes.number.isRequired,
  }).isRequired,
  applyDamage: PropTypes.func.isRequired,
  runAway: PropTypes.func.isRequired,
};

// == Export
export default Combat;
