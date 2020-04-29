// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import Button from '../LinkButton';

// == Import local
import './style.scss';

// == Component
const Medic = ({ actionMedic }) => (
  <div className="dialog">
    <h2 className="dialog__title">Medic Bay</h2>
    <p className="dialog__p">Te faire soigner t'as coûté 10 JSX. Cependant l'efficacité du système es surprenante</p>
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
};


// == Export
export default Medic;
