// == Import npm
import React from 'react';
import loose from 'src/assets/images/death.svg';
import TypeWriter from 'react-typewriter';
import Image from 'react-bootstrap/Image';
import Button from '../LinkButton';

// == Import local
import './style.scss';


// == Component
const Death = () => (
  <div className="dialog">
    <h2 className="dialog__title">The end...</h2>
    <TypeWriter
      className="dialog__p"
      typing={1}
      maxDelay={27}
      minDelay={27}
      initDelay={1}
    >Avec un peu de chance votre mort fut rapide...
    </TypeWriter>
    <Image className="death__image" src={loose} rounded />
    <div className="next-button-container">
      <div className="neon-button-container">
        <Button
          cssClassName="neon-button neon-button--next"
          buttonName="Recommencer"
          url="/play"
        />
        <div className="neon-border-container">
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
  </div>
);

// == Props validation

// == Export
export default Death;
