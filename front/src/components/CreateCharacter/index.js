// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import LinkButton from '../LinkButton';
import strength from '../../../docs/images/strength.png';
import agility from '../../../docs/images/agility.png';
import endurance from '../../../docs/images/endurance.png';
import will from '../../../docs/images/will.png';
import intelligence from '../../../docs/images/intelligence.png';

// == Import local
import './style.scss';


// == Component
const CreateCharacter = ({increment, decrement  }) => (
  <div className="main__play">
    <div className="title__container">
      <h1>Création de personnage</h1>
    </div>
    <div className="ability_main__container">
      <div className="ability_pool__container">
        <p className="ability_pool__text">A répartir<span className="ability_pool__value">10</span></p>
      </div>
      <div className="ability__container">
        <button className="ability__button" type="button" onClick={decrement}>-</button>
        <img className="ability__image" src={strength} alt="strength" />
        <p className="ability">Force</p>
        <p className="ability__value">1</p>
        <button className="ability__button" type="button" onClick={increment}>+</button>
      </div>
      <div className="ability__container">
        <button className="ability__button">-</button>
        <img className="ability__image" src={agility} alt="ability" />
        <p className="ability">Agilité</p>
        <p className="ability__value">1</p>
        <button className="ability__button">+</button>
      </div>
      <div className="ability__container">
        <button className="ability__button">-</button>
        <img className="ability__image" src={endurance} alt="endurance" />
        <p className="ability">Constitution</p>
        <p className="ability__value">1</p>
        <button className="ability__button">+</button>
      </div>
      <div className="ability__container">
        <button className="ability__button">-</button>
        <img className="ability__image" src={will} alt="will" />
        <p className="ability">Volonté</p>
        <p className="ability__value">1</p>
        <button className="ability__button">+</button>
      </div>
      <div className="ability__container">
        <button className="ability__button">-</button>
        <img className="ability__image" src={intelligence} alt="intelligence" />
        <p className="ability">Intelligence</p>
        <p className="ability__value">1</p>
        <button className="ability__button">+</button>
      </div>
      <div className="button__container">
        <LinkButton cssClassName="validate__button" buttonName="Valider" url="/play/story" />
      </div>
    </div>
  </div>
);

// == Props validation
CreateCharacter.propTypes = {
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
};


// == Export
export default CreateCharacter;
