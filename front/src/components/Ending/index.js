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
      <Typical className="dialog__p" steps={['Tu as fini le jeu!', 1000]} wrapper="p" />
      <div className="next-button-container">
        <div className="neon-button-container">
          <Button cssClassName="neon-button neon-button--next" buttonName="Rejouer" url="/play" />
          <div className="neon-border-container">
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
    </div>
  </div>
);

// == Props validation
Ending.propTypes = {
};


// == Export
export default Ending;
