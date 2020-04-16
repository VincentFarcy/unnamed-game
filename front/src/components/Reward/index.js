// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import Button from '../LinkButton';


// == Import local
import './style.scss';


// == Component
const Reward = ({  }) => (
  <div className="main__play">
    <p className="reward__title">Voici vos récompenses suite au combat</p>
    <p className="reward__p">Contenu de la récompense suite au combat</p>
    <div className="button__container">
      <Button cssClassName="next__button" buttonName="Suivant" />
    </div>
  </div>
);

// == Props validation
Reward.propTypes = {

};


// == Export
export default Reward;
