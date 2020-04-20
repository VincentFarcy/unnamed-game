// == Import npm
import React from 'react';
import PropTypes from 'prop-types';


// == Import local
import './style.scss';

// == Component
const RessourceInfo = ({ mainCounter, experience, money }) => (
      <div className="ressource-info__container">
      <p className="ressource-info__counter"> {`PHP:${mainCounter}`} </p>
      <p className="ressource-info__experience"> {`XP:${experience}`} </p>
      <p className="ressource-info__money"> {`JSX:${money}`} </p>
      </div>
  );

// == Props validation
RessourceInfo.propTypes = {
  mainCounter: PropTypes.number.isRequired,
  experience: PropTypes.number.isRequired,
  money: PropTypes.number.isRequired,
};

// == Export
export default RessourceInfo;
