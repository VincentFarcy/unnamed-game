// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Button from '../LinkButton';
import Typical from 'react-typical';

// == Import local
import './style.scss';


// == Component
const Sequence = ({ sequence, findSequence }) => {
  useEffect(findSequence, []);

  return (
    <div className="main__play">
      {/* <p className="sequence__title">Jour: {id}</p>
      <Typical
        className="sequece__p"
        steps={[mainText, 1000]}
        wrapper="p"
      /> */}
      <div className="button__container">
        <Button cssClassName="next__button" buttonName="Suivant" url="/play/combat" />
      </div>
    </div>
  );
};

// == Props validation
Sequence.propTypes = {
  // findSequence: PropTypes.func.isRequired,
  // sequence: PropTypes.arrayOf(PropTypes.shape({
  //   id: PropTypes.number.isRequired,
  //   mainText: PropTypes.string.isRequired,
  // }),
  // ).isRequired,
};


// == Export
export default Sequence;
