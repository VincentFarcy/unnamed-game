// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';


// == Import local
import './style.scss';
import Button from '../LinkButton';

// == Component
const Medic = ({ php, hp, actionMedic }) => (
  <div className="dialog">
    {(php > 32 || hp <= 0) && <Redirect to="/play/death" />}
    <h2 className="dialog__title">Medic Bay</h2>
    <p className="dialog__p">Te faire soigner t'a coûté 10 JSX. Cependant l'efficacité du système est surprenante</p>
    <div className="next-button-container">
      <div className="neon-button-container">
        <Button
          cssClassName="neon-button neon-button--next"
          buttonName="PHP suivant"
          url="/play/sequence"
          onClick={actionMedic}
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
Medic.propTypes = {
  php: PropTypes.number.isRequired,
  hp: PropTypes.number.isRequired,
  actionMedic: PropTypes.func.isRequired,
};


// == Export
export default Medic;
