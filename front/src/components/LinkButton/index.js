// == Import npm
import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import local

// == Component
const LinkButton = ({ cssClassName, buttonName, url = '' }) => (
  <NavLink
    exact
    to={url}
    className={`${cssClassName} nav-link btn btn-outline-light`}
  >
    {buttonName}
  </NavLink>
);

// == Props validation
LinkButton.propTypes = {
  cssClassName: PropTypes.string.isRequired,
  buttonName: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

// == Export
export default LinkButton;
