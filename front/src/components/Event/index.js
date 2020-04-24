// == Import npm
import React from 'react';
import Typical from 'react-typical';
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
}) => {
  const win = (hacking + playerRoll) > eventDifficulty;

  return (
    <div className="main__play">
      <p className="event__title">Hackaton</p>
      <Typical className="story__p" steps={['lol', 1000]} wrapper="p" />
      <div className="button__container">
        {win
          ? <Button cssClassName="next__button" buttonName="Suivant" url="/play/sequence" onClick={updateTimer} />
          : <Button cssClassName="next__button" buttonName="Suivant" url="/play/sequence" onClick={updateTimer} />}
      </div>
    </div>
  );
};

// == Props validation
Event.propTypes = {
  updateTimer: PropTypes.func.isRequired,
  eventDifficulty: PropTypes.number.isRequired,
  playerRoll: PropTypes.number.isRequired,
  hacking: PropTypes.number.isRequired,
};

// == Export
export default Event;
