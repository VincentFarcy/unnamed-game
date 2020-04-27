// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Typical from 'react-typical';
import { Redirect } from 'react-router-dom';

// == Import local
import '../Story/style.scss';
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
    <div className="story-container">
      {php === 25 && <Redirect to="/play/story" />}
      {sequence.id === 99 ? <Redirect to="/play/mainhub" />
        : (
          <div className="main__play">
            <p className="story__title">{sequence.title}</p>
            <Typical
              className="story__p"
              steps={[sequence.mainText, 1000]}
              wrapper="p"
            />
            <div className="button__container">
              <Button cssClassName="generic-button next__button" buttonName="Suivant" url="/play/mainhub" onClick={handleClick} />
            </div>
          </div>
        )}
    </div>
  );
};

// == Props validation
Sequence.propTypes = {
  changeBg: PropTypes.func.isRequired,
  sequence: PropTypes.shape({
    id: PropTypes.number.isRequired,
    mainText: PropTypes.string.isRequired,
  }).isRequired,
  findSequence: PropTypes.func.isRequired,
  gameBackup: PropTypes.func.isRequired,
  php: PropTypes.number.isRequired,
};


// == Export
export default Sequence;
