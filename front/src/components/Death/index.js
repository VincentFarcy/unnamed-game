// == Import npm
import React from 'react';
import loose from 'src/assets/images/death.svg';
import Typical from 'react-typical';
import Image from 'react-bootstrap/Image';
import Button from '../LinkButton';

// == Import local
import './style.scss';


// == Component
const Death = () => (
  <div className="dialog">
    <h2 className="dialog__title">The end...</h2>
    <Typical
      className="dialog__p"
      steps={['Avec un peu de chance votre mort fut rapide...', 1000]}
      wrapper="p"
    />
    <Image className="death__image" src={loose} rounded />
    <div className="next-button-container">
      <Button
        cssClassName="generic-button next-button"
        buttonName="Recommencer"
        url="/play"
      />
    </div>
  </div>
);

// == Props validation

// == Export
export default Death;
