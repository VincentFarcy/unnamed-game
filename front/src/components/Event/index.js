// == Import npm
import React, { useEffect } from 'react';
import Typical from 'react-typical';
import PropTypes from 'prop-types';
import Button from '../LinkButton';

// == Import local
import './style.scss';

// == Component
const Event = ({
  playerRoll,
  eventDifficulty,
  findEvent,
  hacking,
}) => {
  useEffect(findEvent, []);
  const win = (hacking + playerRoll) > eventDifficulty;

  return (
    <div className="main__play">
      <p className="event__title">Hackaton</p>
      <Typical className="story__p" steps={['lol', 1000]} wrapper="p" />
      <div className="button__container">
        {win
          ? <Button cssClassName="next__button" buttonName="Suivant" url="/play/sequence" />
          : <Button cssClassName="next__button" buttonName="Suivant" url="/play/death" />}
      </div>
      )
    </div>
  );
};

// == Props validation
Event.propTypes = {
  findEvent: PropTypes.func.isRequired,
  eventDifficulty: PropTypes.number.isRequired,
  playerRoll: PropTypes.number.isRequired,
  hacking: PropTypes.number.isRequired,
};

// == Export
export default Event;
