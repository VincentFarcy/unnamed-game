// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import Button from '../LinkButton';

// == Import local
import './style.scss';

// == Component
const Medic = ({ actionMedic }) => (
  <div className="main__play">
    <p className="medic__title">Medic Bay</p>
    <p className="medic__p">Te faire soigner t'as coûté 10 JSX. Cependant l'efficacité du système es surprenante</p>
    <div className="button__container">
      <Button cssClassName="next__button" buttonName="PHP suivant" url="/play/sequence" onClick={actionMedic} />
    </div>
  </div>
);

// == Props validation
Medic.propTypes = {
  actionMedic: PropTypes.func.isRequired,
};


// == Export
export default Medic;
