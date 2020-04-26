// == Import npm
import React from 'react';
import Typical from 'react-typical';
import Button from '../LinkButton';

// == Import local
import './style.scss';

// == Component
const Ending = () => (
  <div className="story-container">
    <div className="main__play">
      <p className="story__title">Bravo !</p>
      <Typical className="story__p" steps={['tu as finis le jeu!', 1000]} wrapper="p" />
      <div className="button__container">
        <Button cssClassName="next__button" buttonName="Rejouer" url="/play" />
      </div>
    </div>
  </div>
);

// == Props validation
Ending.propTypes = {
};


// == Export
export default Ending;
