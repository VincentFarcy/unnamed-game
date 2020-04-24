// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import Button from '../LinkButton';

// == Import local
import './style.scss';

// == Component
const Medic = ({ actionMedic, actionMedicFail, jsx }) => (
  <div className="main__play">
    <p className="medic__title">Medic Bay</p>
    <div className="button__container">
      {jsx >= 10 ? <Button cssClassName="next__button" buttonName="Se soigner" url="/play/sequence" onClick={actionMedic} />
        : <Button cssClassName="next__button" buttonName="Sortir" url="/play/sequence" onClick={actionMedicFail} />}
    </div>
  </div>
);

// == Props validation
Medic.propTypes = {
  jsx: PropTypes.number.isRequired,
  actionMedic: PropTypes.func.isRequired,
  actionMedicFail: PropTypes.func.isRequired,
};


// == Export
export default Medic;
