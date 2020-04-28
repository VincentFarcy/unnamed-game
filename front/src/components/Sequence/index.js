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
  changeBg,
  sequence,
  findSequence,
  php,
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
                {php === 1 && <Button cssClassName="generic-button next-button" buttonName="Suivant" url="/play/event" onClick={handleClick} />}
                {php === 2 && <Button cssClassName="generic-button next-button" buttonName="Suivant" url="/play/combat" onClick={handleClick} />}
                {php > 2 && <Button cssClassName="generic-button next-button" buttonName="Suivant" url="/play/mainhub" onClick={handleClick} />}
              </div>
            </div>
          )}
      </div>
    </div>
  );
};

// == Props validation
Sequence.propTypes = {
  changeBg: PropTypes.func.isRequired,
  sequence: PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    mainText: PropTypes.string.isRequired,
  }).isRequired,
  findSequence: PropTypes.func.isRequired,
  gameBackup: PropTypes.func.isRequired,
  php: PropTypes.number.isRequired,
};


// == Export
export default Sequence;
