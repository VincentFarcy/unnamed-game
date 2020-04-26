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
      {win ? (
        <>
          <p className="event__win__text">Votre capacité à "hack" les systèmes de sécurité, vous permez d'ouvrir cette porte. Ou alors est-ce le mot de passe admin Compote23 ? </p>
          {php !== 1 && php !== 30 && <p className="event__win__text2">Quoi qu'il en soit, vous trouvez de quoi augmenter vos stocks de JSX & d'XP </p>}
          <div className="button__container">
            <Button cssClassName="next__button" buttonName="Suivant" url={php !== 30 ? '/play/sequence' : '/play/combat'} onClick={eventWin} />
          </div>
        </>
      ) : (
        <>
          <p className="event__fail__text">Malheuresement vous restez dans l'incapacité d'outre-passer le firewall. Vous vous sentez comme un dev junior qui découvre React-Redux pour la 1ère fois.</p>
          <div className="button__container">
            <Button cssClassName="next__button" buttonName="Suivant" url={php !== 30 ? '/play/sequence' : '/play/story'} onClick={updateTimer} />
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
  php: PropTypes.number.isRequired,
};

// == Export
export default Event;
