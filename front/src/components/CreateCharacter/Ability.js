// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

// == Import local
import './style.scss';


// == Component
const Ability = ({ name, value, image, increment, decrement }) => (
  <div id={name} key={uuidv4()} className="ability__container">
    <button className="ability__button" type="button" onClick={(evt) => decrement(event.target.parentNode.id)}>-</button>
    <img className="ability__image" src={image} alt={name} />
    <span className="ability">{name}</span>
    <span className="ability__value">{value}</span>
    <button className="ability__button" type="button" onClick={(evt) => increment(event.target.parentNode.id)}>+</button>
  </div>
);

// == Props validation
Ability.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
};


// == Export
export default Ability;
