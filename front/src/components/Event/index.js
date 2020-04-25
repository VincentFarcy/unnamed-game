// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Button from '../LinkButton';

// == Import local
import './style.scss';
import WonEvent from '../../containers/WonEvent';

// == Component
const Event = ({
  playerRoll,
  eventDifficulty,
  updateTimer,
  hacking,
  findEvent,
}) => {
  useEffect(findEvent, []);
  const win = (hacking + playerRoll) > eventDifficulty;

  return (
    <div className="main__play">
      <p className="event__title">Exploration</p>
      {win ? (
        <>
          <WonEvent />
        </>
      ) : (
        <>
          <p className="event__fail__text">Tu as perdu l'évenement aléatoire</p>
          <div className="button__container">
            <Button cssClassName="next__button" buttonName="Suivant" url="/play/sequence" onClick={updateTimer} />
          </div>
        </>
      )}
    </div>
  );
};

// == Props validation
Event.propTypes = {
  findEvent: PropTypes.func.isRequired,
  updateTimer: PropTypes.func.isRequired,
  eventDifficulty: PropTypes.number.isRequired,
  playerRoll: PropTypes.number.isRequired,
  hacking: PropTypes.number.isRequired,
};

// == Export
export default Event;
