// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// == Import local
import './style.scss';
import Button from '../LinkButton';
import WonEvent from '../../containers/WonEvent';

// == Component
const Event = ({
  eventDifficulty,
  playerRoll,
  hacking,
  php,
  nextSequence,
  findEvent,
}) => {
  useEffect(findEvent, []);
  let realDifficulty = 1;
  if (php !== 1) {
    realDifficulty = eventDifficulty;
  }
  if (php === 30) {
    realDifficulty = 8;
  }

  const win = (hacking + playerRoll) > realDifficulty;

  return (

    <div className="dialog">
      <h2 className="dialog__title">{php === 1 ? 'Hacking' : 'Exploration'} </h2>
      { php !== 1 && php < 30
        && (
          <p className="dialog__p">
            Vos déambulations sur le vaisseau prennent du temps. Ce vaisseau vous semble sans fin...
            malgré tout vous finissez par arriver devant une nouvelle porte fermée.
          </p>
        )}
      { php >= 30
        && (
          <p className="dialog__p">
            Vous vous trouvez devant la porte du générateur, vous entendez un bruit étrange.
          </p>
        )}
      <p className="dialog__p">
        Sur l'écran est affiché l'éditeur du firewall et sa version.
        O'clock : <span className="event__difficulty">{`v.${realDifficulty}`}</span>
      </p>
      {
        win ? (
          <>
            <WonEvent />
          </>
        ) : (
          <>
            <p className="dialog__p">
              Malheureusement vous restez dans l'incapacité d'outre-passer le firewall.
              Vous vous sentez comme un dev junior qui découvre React-Redux pour la 1ère fois.
            </p>
            <div className="next-button-container">
              <div className="neon-button-container">
                <Button
                  cssClassName="neon-button neon-button--next"
                  buttonName="PHP Suivant"
                  url={php !== 30 ? '/play/sequence' : '/play/story'}
                  onClick={nextSequence}
                />
                <div className="neon-border-container">
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            </div>
          </>
        )
      }
    </div>
  );
};

// == Props validation
Event.propTypes = {
  eventDifficulty: PropTypes.number.isRequired,
  playerRoll: PropTypes.number.isRequired,
  hacking: PropTypes.number.isRequired,
  php: PropTypes.number.isRequired,
  nextSequence: PropTypes.func.isRequired,
  findEvent: PropTypes.func.isRequired,
};

// == Export
export default Event;
