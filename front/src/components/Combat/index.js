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

// == Component
const Combat = ({ findOpponent, opponent, player, isCombatOn, applyDamage, runAway }) => {
  useEffect(findOpponent, []);

  // combat function
  const launchFight = () => {
    // who starts the fight
    let currentFighter = 'Player';
    // Player's HP
    let playerHP = player.playerCurrentHP;
    // Opponent's HP
    let opponentHP = opponent.opponentCurrentHP;
    // the fight goes on
    do {
      switch (currentFighter) {
        case 'Player':
          opponentHP = opponentHP - 2;
          currentFighter = 'Opponent';
          applyDamage({
            'playerCurrentHP': playerHP,
            'opponentCurrentHP': opponentHP,
          });
          break;
        case 'Opponent':
          playerHP = playerHP - 2;
          currentFighter = 'Player';
          applyDamage({
            'playerCurrentHP': playerHP,
            'opponentCurrentHP': opponentHP,
          });
          break;
      }
    }
    // as long as one of the fighter's HP is above 0
    while (playerHP > 0 && opponentHP > 0);

    console.log('playerHP', playerHP);
    console.log('opponentHP', opponentHP);
  };

  console.log('combat', opponent);
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
          <LinkButton
            cssClassName="choice btn-warning"
            buttonName="Suivant"
            url="/play/reward"
          />
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
  applyDamage: PropTypes.func.isRequired,
  runAway: PropTypes.func.isRequired,
};

// == Export
export default Combat;
