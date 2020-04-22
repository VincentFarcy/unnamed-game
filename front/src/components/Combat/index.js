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
  strength,
  isCombatOn,
  gameParameters,
  applyDamage,
  runAway,
  endFight,
}) => {
  useEffect(findOpponent, []);

  // first fighter randomisation
  const fightRound = (touch, dodge) => {
    const roll = rollDice(gameParameters.minTouchRoll, gameParameters.maxTouchRoll);
    if (roll === gameParameters.maxTouchRoll) {
      return true;
    }
    else {
      return (touch + roll) > (dodge * 2);
    }
  };

  // damage randomisation
  const randomDamage = (strength) => {
    const damage = strength + rollDice(gameParameters.minDamageRoll, gameParameters.maxDamageRoll);
    return damage;
  };

  // Player's HP initialization
  let playerHP = player.playerCurrentHP;
  // Opponent's HP initialization
  let opponentHP = opponent.opponentCurrentHP;

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


    // delay to display damages on HP bar
    let delay = 1000;
    // round history
    let roundHistory = [];

    // the fight goes on
    do {
      // initialize damage
      let damage = 0;

      switch (currentFighter) {
        case PLAYER:
          // random touch
          const playerTouch = fightRound(player.baseTouch , opponent.dodge);
          // if fighter touches
          if (playerTouch) {
            // damage calculation
            damage = randomDamage(strength);
            // HP after damage
            opponentHP = opponentHP - damage;
          }
          // change fighter
          currentFighter = OPPONENT;

          // save the curent round
          roundHistory.push({
            'playerCurrentHP': (playerHP > 0) ? playerHP : 0,
            'opponentCurrentHP': (opponentHP > 0) ? opponentHP : 0,
          }); 

          // change the state accordingly 
          applyDamage({
              'playerCurrentHP': (playerHP > 0) ? playerHP : 0,
              'opponentCurrentHP': (opponentHP > 0) ? opponentHP : 0,
          });
        case OPPONENT:
          // random touch
          const opponentTouch = fightRound(opponent.touch, player.dodge);
          // if fighter touches
          if (opponentTouch) {
            // damage calculation
            damage = randomDamage(0);
            // HP after damage
            playerHP = playerHP - damage;
          };
          // change fighter
          currentFighter = PLAYER;

          // save the curent round
          roundHistory.push({
            'playerCurrentHP': (playerHP > 0) ? playerHP : 0,
            'opponentCurrentHP': (opponentHP > 0) ? opponentHP : 0,
          }); 

          // change the state accordingly 
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
          isCombatOn 
            ? (
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
                url="/play/sequence"
                onClick={runAway}
              />
            </div> 
            )
            : (
            <div className="combat__choices">
              <LinkButton
                cssClassName="choice btn-warning"
                buttonName="Suivant"
                url={playerHP > 0 ? "/play/reward" : "/play/death"}
              />
            </div> 
            )
        }
        <p className="combat__presentation">VS {opponent.name}</p>
        <div className="opponent__container">
          <OpponentCombatInfo />
        </div>
      </div>
    </div>
  );
};

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
  strength: PropTypes.number.isRequired,
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
  endFight: PropTypes.func.isRequired,
};

// == Export
export default Combat;
