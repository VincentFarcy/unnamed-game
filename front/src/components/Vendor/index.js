// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import LinkButton from '../LinkButton';

// == Import local
import './style.scss';
import { updateTimer } from '../../actions/gamePlay';

// == Component
const Vendor = ({ }) => (
  <div className="main__play">
    <p className="vendor__title">Magasin</p>
    <div className="button__container">
      <Button cssClassName="buy__button" onClick={updateTimer}> Arme 1 </Button>
    </div>
    <div className="button__container">
      <Button cssClassName="buy__button" onClick={updateTimer}> Arme 2 </Button>
    </div>
    <div className="button__container">
      <Button cssClassName="buy__button" onClick={updateTimer}> Arme 3 </Button>
    </div>
    <div className="button__container">
      <Button cssClassName="buy__button" onClick={updateTimer}> Armure 1 </Button>
    </div>
    <div className="button__container">
      <Button cssClassName="buy__button" onClick={updateTimer}> Armure 2 </Button>
    </div>
    <div className="button__container">
      <Button cssClassName="buy__button" onClick={updateTimer}> Armure 3 </Button>
    </div>
    <div className="button__container">
      <LinkButton cssClassName="next__button" buttonName="Suivant" url="/play/sequence" onClick={updateTimer} />
    </div>
  </div>
);

// == Props validation
Vendor.propTypes = {
};


// == Export
export default Vendor;
