// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Typical from 'react-typical';
import { Redirect } from 'react-router-dom';

// == Import local
import './style.scss';
import Button from '../LinkButton';

// == Component
const Sequence = ({
  sequence,
  php,
  hp,
  findSequence,
  changeBg,
  gameBackup,
}) => {
  useEffect(findSequence, []);
  useEffect(gameBackup, []);
  useEffect(() => {
    changeBg('bg--sequence');
  }, []);
  const handleClick = () => {
    changeBg('');
  };
  return (
    <div className="sequence__container">
      <div className="dialog">
        {(php > 32 || hp <= 0) && <Redirect to="/play/death" />}
        {sequence.id === 99 ? <Redirect to="/play/mainhub" />
          : (
            <div>
              <h2 className="dialog__title">{sequence.title}</h2>
              <Typical
                className="dialog__p"
                steps={[sequence.mainText, 1000]}
                wrapper="p"
              />
              <div className="next-button-container">
                {php === 1
                  && (
                  <div className="neon-button-container">
                    <Button cssClassName="neon-button neon-button--next" buttonName="Suivant" url="/play/event" onClick={handleClick} />
                    <div className="neon-border-container">
                      <span />
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>
                  )}
                {php === 2
                  && (
                    <div className="neon-button-container">
                      <Button cssClassName="neon-button neon-button--next" buttonName="Suivant" url="/play/combat" onClick={handleClick} />
                      <div className="neon-border-container">
                        <span />
                        <span />
                        <span />
                        <span />
                      </div>
                    </div>
                  )}
                {php > 2
                  && (
                    <div className="neon-button-container">
                      <Button cssClassName="neon-button neon-button--next" buttonName="Suivant" url="/play/mainhub" onClick={handleClick} />
                      <div className="neon-border-container">
                        <span />
                        <span />
                        <span />
                        <span />
                      </div>
                    </div>
                  )}
              </div>
            </div>
          )}
      </div>
    </div>
  );
};

// == Props validation
Sequence.propTypes = {
  sequence: PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    mainText: PropTypes.string.isRequired,
  }).isRequired,
  php: PropTypes.number.isRequired,
  hp: PropTypes.number.isRequired,
  findSequence: PropTypes.func.isRequired,
  changeBg: PropTypes.func.isRequired,
  gameBackup: PropTypes.func.isRequired,
};


// == Export
export default Sequence;
