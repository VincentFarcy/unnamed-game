// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Typical from 'react-typical';
import Button from '../LinkButton';
import Story from '../../containers/Story';
import Hal from './halInfo';

// == Import local
import './style.scss';


// == Component
const Sequence = ({ sequence, findSequence }) => {
  useEffect(findSequence, []);
  return (
    <>
      {sequence.id === 99 ? <Story />
        : (
          <div className="main__play">
            <p className="sequence__title">{sequence.title}</p>
            <Typical
              className="sequence__p"
              steps={[sequence.mainText, 1000]}
              wrapper="p"
            />
            <div className="button__container">
              <Button cssClassName="next__button" buttonName="Suivant" url="/play/exploration" />
            </div>
          </div>
        )}
    </>
  );
};

// == Props validation
Sequence.propTypes = {
  // findSequence: PropTypes.func.isRequired,
  // sequence: PropTypes.shape({
  //   id: PropTypes.number.isRequired,
  //   mainText: PropTypes.string.isRequired,
  // }).isRequired,
};


// == Export
export default Sequence;
