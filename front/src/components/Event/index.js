// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Button from '../LinkButton';

// == Import local
import './style.scss';

// == Component
const Event = ({
  playerRoll,
  eventDifficulty,
  updateTimer,
  hacking,
  eventWin,
  findEvent,
}) => {
  useEffect(findEvent, []);
  const win = (hacking + playerRoll) > eventDifficulty;

  return (
    <div className="main__play">
      <p className="event__title">Exploration</p>
      {win ? (
        <>
          <p className="event__win__text">Bravo tu as gagné, ton xp & ton jsx sont mis à jour</p>
          <div className="button__container">
            <Button cssClassName="next__button" buttonName="Suivant" url="/play/sequence" onClick={eventWin} />
          </div>
        </>
      ) : (
        <>
          <p className="event__fail__text">Tu as perdu</p>
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
  eventWin: PropTypes.func.isRequired,
  eventDifficulty: PropTypes.number.isRequired,
  playerRoll: PropTypes.number.isRequired,
  hacking: PropTypes.number.isRequired,
};

// == Export
export default Event;
