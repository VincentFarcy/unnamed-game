// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Button from '../LinkButton';

// == Import local
import './style.scss';
import WonEvent from '../../containers/WonEvent';

// == Component
const Event = ({
  eventDifficulty,
  playerRoll,
  hacking,
  updateTimer,
  findEvent,
}) => {
  useEffect(findEvent, []);
  const win = (hacking + playerRoll) > eventDifficulty;

  return (
    <div className="main__play">
      <p className="event__title">Exploration - Hacking</p>
      {win ? (
        <>
          <WonEvent />
        </>
      ) : (
        <>
          <p className="event__fail__text">Malheureusement vous restez dans l'incapacité d'outre-passer le firewall. Vous vous sentez comme un dev junior qui découvre React-Redux pour la 1ère fois.</p>
          <div className="button__container">
            <Button cssClassName="next__button" buttonName="PHP Suivant" url="/play/sequence" onClick={updateTimer} />
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
