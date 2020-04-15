// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import Button from '../LinkButton';
import strength from '../../../docs/images/strength.png';
import agility from '../../../docs/images/agility.png';
import endurance from '../../../docs/images/endurance.png';
import will from '../../../docs/images/will.png';
import intelligence from '../../../docs/images/intelligence.png';

// == Import local
import './style.scss';


// == Component
const CreateCharacter = ({ }) => (
  <div className="main_play">
    <div className="title_container">
      <h1>Création de personnage</h1>
    </div>
    <div className="ability_main_container">
      <div className="ability_pool_container">
        <p className="ability_pool_text">A répartir<span className="ability_pool_value">10</span></p>
      </div>
      <div className="ability_container">
        <button className="ability_button">-</button>
        <img className="ability_image" src={strength} alt="strength" />
        <p className="ability">Force</p>
        <p className="ability_value">1</p>
        <button className="ability_button">+</button>
      </div>
      <div className="ability_container">
        <button className="ability_button">-</button>
        <img className="ability_image" src={agility} alt="ability" />
        <p className="ability">Agilité</p>
        <p className="ability_value">1</p>
        <button className="ability_button">+</button>
      </div>
      <div className="ability_container">
        <button className="ability_button">-</button>
        <img className="ability_image" src={endurance} alt="endurance" />
        <p className="ability">Constitution</p>
        <p className="ability_value">1</p>
        <button className="ability_button">+</button>
      </div>
      <div className="ability_container">
        <button className="ability_button">-</button>
        <img className="ability_image" src={will} alt="will" />
        <p className="ability">Volonté</p>
        <p className="ability_value">1</p>
        <button className="ability_button">+</button>
      </div>
      <div className="ability_container">
        <button className="ability_button">-</button>
        <img className="ability_image" src={intelligence} alt="intelligence" />
        <p className="ability">Intelligence</p>
        <p className="ability_value">1</p>
        <button className="ability_button">+</button>
      </div>
      <Button cssClassName="validate_button" buttonName="Valider"></Button>
    </div>
  </div>
);

// == Props validation
CreateCharacter.propTypes = {

};


// == Export
export default CreateCharacter;
