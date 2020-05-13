// == Import npm
import React from 'react';
import Typical from 'react-typical';

// == Import local
import './style.scss';
import Button from '../LinkButton';

// == Component
const Ending = () => (
  <div className="story-container">
    <div className="dialog">
      <h2 className="dialog__title">Félicitation !</h2>
      <Typical
        className="dialog__p"
        steps={['Tu as réussi à réparer le générateur !', 1000, 'GG, tu as fini le jeu.', 500, 'David Goodenough', 1000]}
        wrapper="p"
      />
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
