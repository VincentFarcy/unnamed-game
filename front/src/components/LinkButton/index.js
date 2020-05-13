// == Import npm
import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import local

// == Component
const LinkButton = ({
  cssClassName,
  buttonName,
  url = '',
  onClick,
}) => (
  <NavLink
    exact
    to={url}
    className={`${cssClassName} nav-link btn btn-outline-light`}
    onClick={onClick}
  >
    {buttonName}
  </NavLink>
);

// == Props validation
LinkButton.propTypes = {
  cssClassName: PropTypes.string.isRequired,
  buttonName: PropTypes.string.isRequired,
  url: PropTypes.string,
  onClick: PropTypes.func,
};

// == Export
export default LinkButton;
