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
    <p className="event__text">Te soigner te coûte 10 JSX et 1 PHP.</p>
    <div className="button__container">
      <Button cssClassName="next__button" buttonName="Se soigner et passer au PHP suivant" url="/play/sequence" onClick={actionMedic} />
    </div>
  </div>
);

// == Props validation
Medic.propTypes = {
  actionMedic: PropTypes.func.isRequired,
};


// == Export
export default Medic;
