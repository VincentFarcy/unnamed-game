// == Import npm
import React, { useEffect } from 'react';
import Typical from 'react-typical';
import PropTypes from 'prop-types';
import Button from '../LinkButton';

// == Import local
import './style.scss';

// == Component
const Exploration = ({ findExploration, randomExploration }) => {
  useEffect(findExploration, []);
  console.log(randomExploration);

  return (
    <div className="main__play">
      <p className="event__title">Exploration</p>
      <Typical className="story__p" steps={['Exploration', 1000]} wrapper="p" />
      <div className="button__container">
        <Button cssClassName="next__button" buttonName="Suivant" url="/play/death" />
      </div>
    </div>
  );
};

// == Props validation
Exploration.propTypes = {
  findExploration: PropTypes.func.isRequired,
  randomExploration: PropTypes.array.isRequired,
};

// == Export
export default Exploration;
