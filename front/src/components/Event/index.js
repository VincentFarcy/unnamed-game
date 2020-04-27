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
  php,
}) => {
  useEffect(findEvent, []);
  let realDifficulty = 1;
  if (php !== 1) {
    realDifficulty = eventDifficulty;
  }
  if (php === 30) {
    realDifficulty = 2;
  }

  const win = (hacking + playerRoll) > realDifficulty;

  return (

    <div className="main__play">
      <p className="event__title">{php === 1 ? 'Hacking' : 'Exploration'} </p>
      {php !== 1 && <p className="event__text">Vos déambulations sur le vaisseau prennent du temps. Ce vaisseau vous semble sans fin... malgré tout vous finissez par arrivée devant une nouvelle porte fermée.</p>}
      <p className="event__text2">Sur l'écran est afficher l'éditeur du firewall et sa version. O'clock {realDifficulty}</p>
      {
        win ? (
          <>
            <WonEvent />
          </>
        ) : (
          <>
            <p className="event__fail__text">Malheureusement vous restez dans l'incapacité d'outre-passer le firewall. Vous vous sentez comme un dev junior qui découvre React-Redux pour la 1ère fois.</p>
            <div className="button__container">
              <Button cssClassName="next__button" buttonName="PHP Suivant" url={php !== 30 ? '/play/sequence' : '/play/story'} onClick={updateTimer} />
            </div>
          </>
        )
      }
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
  php: PropTypes.number.isRequired,
};

// == Export
export default Event;
