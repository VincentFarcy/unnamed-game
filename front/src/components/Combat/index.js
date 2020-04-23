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
  opponent,
  player,
  strength,
  isCombatOn,
  isCombatInProgress,
  gameParameters,
  findOpponent,
  combatInProgress,
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
    return (touch + roll) > (dodge * 2);
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
    // start the game in progress
    combatInProgress();

    // create constant to use
    const PLAYER = 'PLAYER';
    const OPPONENT = 'OPPONENT';

    // initiative
    const speedPlayer = player.baseSpeed + rollDice(gameParameters.minSpeedRoll, gameParameters.maxSpeedRoll);
    const speedOpponent = opponent.speed + rollDice(gameParameters.minSpeedRoll, gameParameters.maxSpeedRoll);

    // who starts the fight
    let currentFighter = PLAYER;
    if (speedOpponent > speedPlayer) {
      currentFighter = OPPONENT;
    }

    // round history
    const roundHistory = [];
    // round counter
    let roundCounter = 0;
    // delay for setTimeout
    const setTimeOutDelay = 250;

    // the fight goes on
    do {
      // initialize damage
      let damage = 0;

      switch (currentFighter) {
        case PLAYER:
          // incremente round coutner
          roundCounter++;
          // random touch
          const playerTouch = fightRound(player.baseTouch, opponent.dodge);
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
            playerCurrentHP: (playerHP > 0) ? playerHP : 0,
            opponentCurrentHP: (opponentHP > 0) ? opponentHP : 0,
          });
          break;
        case OPPONENT:
          // incremente round coutner
          roundCounter++;
          // random touch
          const opponentTouch = fightRound(opponent.touch, player.dodge);
          // if fighter touches
          if (opponentTouch) {
            // damage calculation
            damage = randomDamage(0);
            // HP after damage
            playerHP = playerHP - damage;
          }
          // change fighter
          currentFighter = PLAYER;

          // save the curent round
          roundHistory.push({
            playerCurrentHP: (playerHP > 0) ? playerHP : 0,
            opponentCurrentHP: (opponentHP > 0) ? opponentHP : 0,
          });
          break;
      }
    }
    // as long as one of the fighter's HP is above 0
    while (playerHP > 0 && opponentHP > 0);

    // for each round we want to apply the damage
    roundHistory.forEach((element, index) => {
      // change delay
      const delay = setTimeOutDelay * index;

      // apply damage
      const functionToExecute = () => applyDamage(element);

      return setTimeout(functionToExecute, delay);
    });

    // stop the game in progress and display next button
    const endFightToExecute = () => endFight();
    setTimeout(endFightToExecute, setTimeOutDelay * roundCounter);
  };

  return (
    <div className="main__play">
      <h2 className="combat__title">COMBAT </h2>
      <AdvancedInfo />
      <div className="combat__container">
        <div className="player__container">
          <PlayerCombatInfo />
        </div>
        <div className="combat__choices">
          {
            isCombatOn && !isCombatInProgress && (
              <>
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
              </>
            )
          }
          {
            isCombatOn && isCombatInProgress && (
              <Button
                className="choice btn-warning"
                variant="danger"
                disabled
              >
                Combat en cours
              </Button>
            )
          }
          {
            !isCombatOn && !isCombatInProgress && (
              <LinkButton
                cssClassName="choice btn-warning"
                buttonName="Suivant"
                url={playerHP > 0 ? '/play/reward' : '/play/death'}
              />
            )
          }
        </div>
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
    speed: PropTypes.number.isRequired,
    touch: PropTypes.number.isRequired,
    dodge: PropTypes.number.isRequired,
  }).isRequired,
  player: PropTypes.shape({
    playerCurrentHP: PropTypes.number.isRequired,
    baseSpeed: PropTypes.number.isRequired,
    baseTouch: PropTypes.number.isRequired,
    dodge: PropTypes.number.isRequired,
  }).isRequired,
  isCombatOn: PropTypes.bool.isRequired,
  isCombatInProgress: PropTypes.bool.isRequired,
  gameParameters: PropTypes.shape({
    minTouchRoll: PropTypes.number.isRequired,
    maxTouchRoll: PropTypes.number.isRequired,
    minDamageRoll: PropTypes.number.isRequired,
    maxDamageRoll: PropTypes.number.isRequired,
    minSpeedRoll: PropTypes.number.isRequired,
    maxSpeedRoll: PropTypes.number.isRequired,
  }).isRequired,
  strength: PropTypes.number.isRequired,
  combatInProgress: PropTypes.func.isRequired,
  applyDamage: PropTypes.func.isRequired,
  runAway: PropTypes.func.isRequired,
  endFight: PropTypes.func.isRequired,
};

// == Export
export default Combat;
