// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

// == Import local
import './style.scss';
import PlayerCombatInfo from '../../containers/PlayerCombatInfo';
import OpponentCombatInfo from '../../containers/OpponentCombatInfo';
import LinkButton from '../LinkButton';

// == Component
const Combat = ({ opponent, isCombatOn, runAway }) => {

  return (
    <div className="main__play">
      <h2 className="combat__title">COMBAT </h2>
      <div className="combat__container">
        <div className="player__container">
          <PlayerCombatInfo />
        </div>
        {
          !isCombatOn && 
          <div className="combat__choices">
            <Button className="choice" variant="danger">Combattre</Button>
            <LinkButton
              cssClassName="choice btn-warning"
              buttonName="Fuir"
              url="/play/reward"
              onClick={runAway}
            />
          </div>
        }
        <p className="combat__presentation">VS {opponent.name}</p>
        <div className="opponent__container"></div>
          <OpponentCombatInfo {...opponent} />
      </div>
    </div>
  );
}

// == Props validation
Combat.propTypes = {
  opponent: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }
  ).isRequired,
  isCombatOn: PropTypes.bool.isRequired,
  runAway: PropTypes.func.isRequired,
};

// == Export
export default Combat;
