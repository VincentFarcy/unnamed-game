// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import LinkButton from '../LinkButton';

// == Import local
import './style.scss';
import { updateTimer } from '../../actions/gamePlay';

// == Component
const Vendor = ({ }) => (
  <div className="main__play">
    <p className="vendor__title">Magasin</p>
    <div className="button__container">
      <LinkButton cssClassName="next__button" buttonName="Suivant" url="/play/mainhub" onClick={updateTimer} />
    </div>
  </div>
);

// == Props validation
Vendor.propTypes = {
};


// == Export
export default Vendor;
