// == Import npm
import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

// == Import local

// == Component
const LinkButton = ({ cssClassName, buttonName }) => (
  <Nav.Link
    as={Button}
    variant="outline-light"
    className={cssClassName}
    href="#"
  >
    {buttonName}
  </Nav.Link>
);

// == Props validation
LinkButton.propTypes = {
  cssClassName: PropTypes.string.isRequired,
  buttonName: PropTypes.string.isRequired,
};

// == Export
export default LinkButton;
