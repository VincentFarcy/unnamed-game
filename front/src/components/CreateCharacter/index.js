// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import Button from '../LinkButton';
import { v4 as uuidv4 } from 'uuid';

// == Import local
import './style.scss';


// == Component
const CreateCharacter = ({ abilities, increment, decrement }) => (
  <div className="main__play">
    <div className="title__container">
      <h1>Création de personnage</h1>
    </div>
    <div className="ability_main__container">
      <div className="ability_pool__container">
        <p className="ability_pool__text">A répartir<span className="ability_pool__value">10</span></p>
      </div>
      {
        abilities.map((ability) => (
          <div key={uuidv4()} className="ability__container">
            <button className="ability__button" type="button" onClick={decrement}>-</button>
            <img className="ability__image" src={ability.image} alt={ability.name} />
            <span className="ability">{ability.name}</span>
            <span className="ability__value">{ability.value}</span>
            <button className="ability__button" type="button" onClick={increment}>+</button>
          </div>
        ))
      }
      <div className="button__container">
        <LinkButton cssClassName="validate__button" buttonName="Valider" url="/play/story" />
      </div>
    </div>
  </div>
);

// == Props validation
CreateCharacter.propTypes = {
  abilities: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    }),
  ).isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
};


// == Export
export default CreateCharacter;
