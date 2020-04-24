// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import Button from '../LinkButton';

// == Import local
import './style.scss';

// == Component
const Nothing = ({ eventNothing }) => (
  <div className="main__play">
    <p className="nothing__title">Nada</p>
    <p className="nothing__text"> Il ne se passe rien</p>

    <div className="button__container">
      <Button cssClassName="next__button" buttonName="Suivant" url="/play/sequence" onClick={eventNothing} />
    </div>
  </div>
);

// == Props validation
Nothing.propTypes = {
  eventNothing: PropTypes.func.isRequired,
};


// == Export
export default Nothing;
