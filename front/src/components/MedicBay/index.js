// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import Button from '../LinkButton';


// == Import local
import './style.scss';

// == Component
const Medic = ({ actionMedic, php, hp }) => (
  <div className="dialog">
    {(php > 32 || hp <= 0) && <Redirect to="/play/death" />}
    <h2 className="dialog__title">Medic Bay</h2>
    <p className="dialog__p">Te faire soigner t'a coûté 10 JSX. Cependant l'efficacité du système est surprenante</p>
    <div className="next-button-container">
      <div className="neon-button-container">
        <Button cssClassName="neon-button neon-button--next" buttonName="PHP suivant" url="/play/sequence" onClick={actionMedic} />
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
  actionMedic: PropTypes.func.isRequired,
  php: PropTypes.number.isRequired,
  hp: PropTypes.number.isRequired,
};


// == Export
export default Medic;
