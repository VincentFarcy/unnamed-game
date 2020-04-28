// == Import npm
import React from 'react';
import Typical from 'react-typical';
import Button from '../LinkButton';

// == Import local
import './style.scss';

// == Component
const Ending = () => (
  <div className="story-container">
    <div className="dialog">
      <h2 className="dialog__title">Bravo !</h2>
      <Typical className="dialog__p" steps={['tu as finis le jeu!', 1000]} wrapper="p" />
      <div className="next-button-container">
        <Button cssClassName="next-button" buttonName="Rejouer" url="/play" />
      </div>
    </div>
  </div>
);

// == Props validation
Ending.propTypes = {
};


// == Export
export default Ending;
