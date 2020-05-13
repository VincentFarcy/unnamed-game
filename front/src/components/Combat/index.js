// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

// == Import local
import './style.scss';
import AdvancedInfo from '../../containers/AdvancedInfo';
import PlayerCombatInfo from '../../containers/Combat/PlayerCombatInfo';
import OpponentCombatInfo from '../../containers/Combat/OpponentCombatInfo';
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
  php,
  findOpponent,
  combatInProgress,
  applyDamage,
  nextSequence,
  endFight,
  changeBg,
}) => {
  useEffect(findOpponent, []);
  useEffect(() => {
    changeBg('bg--combat');
  }, []);


  // first fighter randomisation
  const fightRound = (touch, dodge) => {
    const roll = rollDice(gameParameters.minTouchRoll, gameParameters.maxTouchRoll);
    if (roll === gameParameters.maxTouchRoll) {
      return true;
    }
    return (touch + roll) > (dodge);
  };

  // damage randomisation
  const randomDamage = (characterStrength) => {
    const damage = characterStrength
      + rollDice(gameParameters.minDamageRoll, gameParameters.maxDamageRoll);
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
    const speedPlayer = player.baseSpeed
      + rollDice(gameParameters.minSpeedRoll, gameParameters.maxSpeedRoll);
    const speedOpponent = opponent.speed
      + rollDice(gameParameters.minSpeedRoll, gameParameters.maxSpeedRoll);

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

      let characterTouch = 0;

      switch (currentFighter) {
        case OPPONENT:
          // incremente round coutner
          roundCounter += 1;
          // random touch
          characterTouch = fightRound(opponent.touch, player.dodge);
          // if fighter touches
          if (characterTouch) {
            // damage calculation
            damage = randomDamage(0);
            // HP after damage
            playerHP -= damage;
          }
          // change fighter
          currentFighter = PLAYER;

          // save the curent round
          roundHistory.push({
            playerCurrentHP: (playerHP > 0) ? playerHP : 0,
            opponentCurrentHP: (opponentHP > 0) ? opponentHP : 0,
          });
          break;
        // PLAYER case
        default:
          // incremente round coutner
          roundCounter += 1;
          // random touch
          characterTouch = fightRound(player.baseTouch, opponent.dodge);
          // if fighter touches
          if (characterTouch) {
            // damage calculation
            damage = randomDamage(strength);
            // HP after damage
            opponentHP -= damage;
          }
          // change fighter
          currentFighter = OPPONENT;

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
    <div className="dialog">
      <h2 className="dialog__title">Combat </h2>
      <div className="combat__container">
        <AdvancedInfo />
        <div className="combat__versus-container">
          <div className="combat__player-container">
            <PlayerCombatInfo />
          </div>
          <div className="combat__presentation-container">
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
                    {php > 2 && php < 30 && (
                      <LinkButton
                        cssClassName="choice btn-warning"
                        buttonName="Fuir"
                        url="/play/sequence"
                        onClick={nextSequence}
                      />
                    )}
                  </>
                )
              }
              {
                isCombatOn && isCombatInProgress && (
                  <Button
                    className="choice btn-warning choice--combat-in-progress"
                    variant="danger"
                    disabled
                  >
                    Combat en cours
                  </Button>
                )
              }
              {
                !isCombatOn && !isCombatInProgress && php < 30 && (
                  <LinkButton
                    cssClassName="choice btn-warning"
                    buttonName="Suivant"
                    url={playerHP > 0 ? '/play/reward' : '/play/death'}
                  />
                )
              }
              {
                !isCombatOn && !isCombatInProgress && php >= 30 && (
                  <LinkButton
                    cssClassName="choice btn-warning"
                    buttonName="Fin"
                    url={playerHP > 0 ? '/play/ending' : '/play/death'}
                  />
                )
              }
            </div>
            <p className="combat__vs">VS {opponent.name}</p>
          </div>
          <div className="combat__opponent-container">
            <OpponentCombatInfo />
          </div>
        </div>
      </div>
    </div>
  );
};

// == Props validation
Combat.propTypes = {
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
  strength: PropTypes.number.isRequired,
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
  php: PropTypes.number.isRequired,
  findOpponent: PropTypes.func.isRequired,
  combatInProgress: PropTypes.func.isRequired,
  applyDamage: PropTypes.func.isRequired,
  nextSequence: PropTypes.func.isRequired,
  endFight: PropTypes.func.isRequired,
  changeBg: PropTypes.func.isRequired,
};

// == Export
export default Combat;
