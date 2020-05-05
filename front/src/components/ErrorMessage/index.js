// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import local
import './style.scss';

// == Component
const ErrorMessage = ({ message }) => (
  <p className="message">{message}</p>
);

// == Props validation
ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

// == Export
export default ErrorMessage;
