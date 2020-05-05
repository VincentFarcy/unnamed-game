// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

// == Import local
import './style.scss';

// == Component
const Ability = ({
  name,
  value,
  image,
  description,
  increment,
  decrement,
}) => (
  <div id={name} key={uuidv4()} className="ability__container">
    <OverlayTrigger
      placement="top"
      delay={{ show: 300, hide: 300 }}
      overlay={
        (
          <Tooltip id="tooltip">
            Valeur min: 1
          </Tooltip>
        )
      }
    >
      <button className="ability__button" type="button" onClick={(event) => decrement(event.target.parentNode.id)}>−</button>
    </OverlayTrigger>
    <img className="ability__image" src={image} alt={name} />
    <OverlayTrigger
      placement="top"
      delay={{ show: 300, hide: 300 }}
      overlay={
        (
          <Tooltip id="tooltip">
            {description}
          </Tooltip>
        )
      }
    >
      <span className="ability">{name}</span>
    </OverlayTrigger>
    <span className="ability__value">{value}</span>
    <OverlayTrigger
      placement="top"
      delay={{ show: 300, hide: 300 }}
      overlay={
        (
          <Tooltip id="tooltip">
            Valeur max: 5
          </Tooltip>
        )
      }
    >
      <button className="ability__button" type="button" onClick={(event) => increment(event.target.parentNode.id)}>+</button>
    </OverlayTrigger>
  </div>
);

// == Props validation
Ability.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
};


// == Export
export default Ability;
