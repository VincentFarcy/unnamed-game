// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import Button from '../LinkButton';

// == Import local
import './style.scss';

// == Component
const Rest = ({ actionRest }) => (
  <div className="main__play">
    <p className="rest__title">Vous décidez de vous reposer</p>
    <div className="button__container">
      <Button cssClassName="next__button" buttonName="Se reposer" url="/play/mainhub" onClick={actionRest} />
    </div>
    <div className="button__container">
      <Button cssClassName="next__button" buttonName="Sortir" url="/play/mainhub" />
    </div>
  </div>
);

// == Props validation
Rest.propTypes = {
  actionRest: PropTypes.func.isRequired,
};


// == Export
export default Rest;
