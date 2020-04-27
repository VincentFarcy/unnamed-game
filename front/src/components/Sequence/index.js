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
    <>
      {sequence.id === 99 ? <Redirect to="/play/mainhub" />
        : (
          <div className="story-container">
            <div className="main__play">
              <p className="story__title">{sequence.title}</p>
              <Typical
                className="story__p"
                steps={[sequence.mainText, 1000]}
                wrapper="p"
              />
              <div className="button__container">
                {php === 1 && <Button cssClassName="next__button" buttonName="Suivant" url="/play/event" onClick={handleClick} />}
                {php === 2 && <Button cssClassName="next__button" buttonName="Suivant" url="/play/combat" onClick={handleClick} />}
                {php > 2 && <Button cssClassName="next__button" buttonName="Suivant" url="/play/mainhub" onClick={handleClick} />}
              </div>
            </div>
          </div>
        )};
    </>
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
